package main

import (
	"encoding/json"
	"net/http"
	"strconv"
)

type Quote struct {
	ID         int    `json:"id"`
	Text       string `json:"text"`
	Author     string `json:"author"`
	CategoryID int    `json:"categoryId"`
}

var quotes = []Quote{
	{ID: 1, Text: "Quote 1", Author: "Author 1", CategoryID: 1},
	{ID: 2, Text: "Quote 2", Author: "Author 2", CategoryID: 2},
	// Add more quotes with their respective categoryId
}

func main() {
	http.HandleFunc("/api/quotes", getQuotes)
	http.ListenAndServe(":8080", nil)
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
