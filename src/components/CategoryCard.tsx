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
      <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg overflow-hidden shadow-md hover:shadow-lg cursor-pointer transform hover:scale-105 transition-all duration-300">
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-40 object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold text-white mb-2">
            {category.name}
          </h2>
          {/* <p className="text-sm text-gray-200">{category.description}</p> */}
        </div>
      </div>
    </Link>
  );
}