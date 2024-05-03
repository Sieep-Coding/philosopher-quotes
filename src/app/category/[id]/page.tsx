'use client';

import QuoteModal from '@/components/QuoteModal';
import { useRouter } from 'next/navigation';

interface CategoryPageProps {
  params: {
    id: string;
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const categoryId = parseInt(params.id);
  const router = useRouter();

  const handleGoBack = () => {
    router.push('https://philosophy-quotes.vercel.app/');
  };

  return (
    <div className="container">
      <h1 className="text-4xl font-bold mb-4">Philosophy Quotes</h1>
      <QuoteModal categoryId={categoryId} /> 
      <br></br>
      <button 
      className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded"
      onClick={handleGoBack}     >
      ← Go Back
      </button>
    </div>
  );
}