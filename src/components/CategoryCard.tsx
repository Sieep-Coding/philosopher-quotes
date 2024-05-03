'use client';

import Link from 'next/link';

interface CategoryCardProps {
  category: {
    id: number;
    name: string;
    image: string;
  };
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link href={`/category/${category.id}`}>
      <div className="bg-white shadow-md rounded-lg p-4 cursor-pointer">
        <img src={category.image} alt={category.name} className="mb-4" />
        <h2 className="text-xl font-semibold">{category.name}</h2>
      </div>
    </Link>
  );
}