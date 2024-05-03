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
      <div className="bg-gradient-to-br from-blue-300 to-purple-300 rounded-lg overflow-hidden border-2 border-blue-400 hover:border-purple-500 hover:shadow-md cursor-pointer transform hover:scale-105 transition-all duration-300 flex flex-col justify-center items-center">
        <img
          src={category.image}
          alt={category.name}
          className="w-35 h-36 object-cover"
        />
        <div className="p-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 tracking-wide capitalize">
            {category.name}
          </h2>
          {/* <p className="text-sm text-gray-600">{category.description}</p> */}
        </div>
      </div>
    </Link>
  );
}
