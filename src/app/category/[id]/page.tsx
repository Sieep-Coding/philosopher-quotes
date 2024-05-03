import QuoteModal from '@/components/QuoteModal';

interface CategoryPageProps {
  params: {
    id: string;
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const categoryId = parseInt(params.id);

  return (
    <div className="container">
      <h1 className="text-4xl font-bold mb-8">Inspirational Quotes</h1>
      <QuoteModal categoryId={categoryId} />
    </div>
  );
}