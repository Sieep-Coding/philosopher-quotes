import { useState, useEffect } from 'react';
import axios from 'axios';

interface QuoteModalProps {
  categoryId: number;
}

export default function QuoteModal({ categoryId }: QuoteModalProps) {
  const [quotes, setQuotes] = useState<string[]>([]);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    fetchQuotes();
  }, []);

  const fetchQuotes = async () => {
    try {
      const response = await axios.get(`/api/quotes?categoryId=${categoryId}`);
      setQuotes(response.data);
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
    <div className="bg-white shadow-md rounded-lg p-8">
      <p className="text-2xl mb-4">{quotes[currentQuoteIndex]}</p>
      <div className="flex justify-between">
        <button onClick={prevQuote} className="bg-blue-500 text-white px-4 py-2 rounded">
          Previous
        </button>
        <button onClick={nextQuote} className="bg-blue-500 text-white px-4 py-2 rounded">
          Next
        </button>
      </div>
    </div>
  );
}