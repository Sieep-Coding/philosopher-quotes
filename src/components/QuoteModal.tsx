'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';

interface Quote {
  id: number;
  text: string;
  author: string;
  categoryId: number;
  categoryName: string;
}

interface QuoteModalProps {
  categoryId: number;
}

export default function QuoteModal({ categoryId }: QuoteModalProps) {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    fetchQuotes();
  }, [categoryId]);

  const fetchQuotes = async () => {
    try {
      const response = await axios.get(`/api/quotes?categoryId=${categoryId}`);
      setQuotes(response.data);
      setCurrentQuoteIndex(0); // Reset the current quote index when new quotes are fetched
    } catch (error) {
      console.error('Error fetching quotes:', error);
    }
  };

  const nextQuote = () => {
    setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
  };

  const prevQuote = () => {
    setCurrentQuoteIndex((prevIndex) => (prevIndex - 1 + quotes.length) % quotes.length);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-8">
      {quotes.length > 0 ? (
        <>
          <p className="quote">{quotes[currentQuoteIndex]?.text}</p>
          <p className="author">- {quotes[currentQuoteIndex]?.author}</p>
          <div className="flex justify-between mt-8">
            <button
              onClick={prevQuote}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            >
              Previous
            </button>
            <button
              onClick={nextQuote}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            >
              Next
            </button>
          </div>
        </>
      ) : (
        <p>No quotes available for this category.</p>
      )}
    </div>
  );
}