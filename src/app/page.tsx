import CategoryCard from '@/components/CategoryCard';

const categories = [
  { id: 1, name: 'Stoic', image: '/images/stoic.jpg' },
  { id: 2, name: 'Brave', image: '/images/brave.jpg' },
  { id: 3, name: 'Classic Philosophy', image: '/images/insperational.jpg' },
  { id: 4, name: 'Good Life', image: '/images/brave.jpg' },
  { id: 5, name: 'Courage', image: '/images/brave.jpg' },
  // Add more categories as needed
];

export default function Home() {
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold mb-8">Philosopher Quotes</h1>
      <div className="grid grid-cols-3 gap-4">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
}