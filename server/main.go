package main

import (
	"encoding/json"
	"log"
	"net/http"
	"os"
	"strconv"
)

type Quote struct {
	ID           int    `json:"id"`
	Text         string `json:"text"`
	Author       string `json:"author"`
	CategoryName string `json:categoryName`
	CategoryID   int    `json:"categoryId"`
}

var quotes = []Quote{
	{ID: 1, Text: "The happiness of your life depends upon the quality of your thoughts.", Author: "Marcus Aurelius", CategoryID: 1, CategoryName: "Stoic"},
	{ID: 2, Text: "Waste no more time arguing about what a good man should be. Be one.", Author: "Marcus Aurelius", CategoryID: 1, CategoryName: "Stoic"},
	{ID: 3, Text: "The only way to do great work is to love what you do.", Author: "Steve Jobs", CategoryID: 2, CategoryName: "Inspirational"},
	{ID: 4, Text: "The best revenge is massive success.", Author: "Frank Sinatra", CategoryID: 2, CategoryName: "Inspirational"},
	{ID: 5, Text: "The only true wisdom is in knowing you know nothing.", Author: "Socrates", CategoryID: 3, CategoryName: "Philosophy"},
	{ID: 6, Text: "The unexamined life is not worth living.", Author: "Socrates", CategoryID: 3, CategoryName: "Philosophy"},
	{ID: 7, Text: "In the end, it's not the years in your life that count. It's the life in your years.", Author: "Abraham Lincoln", CategoryID: 4, CategoryName: "Life"},
	{ID: 8, Text: "Life is what happens when you're busy making other plans.", Author: "John Lennon", CategoryID: 4, CategoryName: "Life"},
	{ID: 9, Text: "The only thing we have to fear is fear itself.", Author: "Franklin D. Roosevelt", CategoryID: 5, CategoryName: "Courage"},
	{ID: 10, Text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", Author: "Winston Churchill", CategoryID: 5, CategoryName: "Courage"},
	// Add more quotes with their respective categoryId and categoryName
}

func getQuotes(w http.ResponseWriter, r *http.Request) {
	categoryID := r.URL.Query().Get("categoryId")
	if categoryID == "" {
		http.Error(w, "Missing categoryId parameter", http.StatusBadRequest)
		return
	}

	categoryIDInt, err := strconv.Atoi(categoryID)
	if err != nil {
		http.Error(w, "Invalid categoryId parameter", http.StatusBadRequest)
		return
	}

	var filteredQuotes []Quote
	for _, quote := range quotes {
		if quote.CategoryID == categoryIDInt {
			filteredQuotes = append(filteredQuotes, quote)
		}
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(filteredQuotes)
}

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	log.Printf("Server is running on port %s", port)
	http.HandleFunc("/api/quotes", getQuotes)
	log.Fatal(http.ListenAndServe(":"+port, nil))
}
