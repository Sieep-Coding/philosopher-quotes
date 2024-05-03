import CategoryCard from '@/components/CategoryCard';

const categories = [
  { id: 1, name: 'Stoic', image: '/icons8-crane-bird-90.png' },
  { id: 2, name: 'Brave', image: '/icons8-bull-90.png' },
  { id: 3, name: 'Classic Philosophy', image: '/icons8-turtle-90.png' },
  { id: 4, name: 'Good Life', image: '/goodlife.sv' },
  { id: 5, name: 'Courage', image: '/brave.sv' },
  // Add more categories as needed
];

export default function Home() {
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold mb-8">Philosopher Quotes</h1>
      <h3 className="text-2xl font-bold mb-3">Explore thought-provoking quotes.</h3>
      <div className="grid grid-cols-3 gap-4">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
}