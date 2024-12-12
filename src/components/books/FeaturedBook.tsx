"use client";

import Image from 'next/image';
import { Star, Eye, Book } from 'lucide-react';

interface FeaturedBookProps {
  title: string;
  author: string;
  cover: string;
  rating: number;
  views: number;
  chapters: number;
  status: 'Ongoing' | 'Completed' | 'Hiatus';
  synopsis: string;
}

export function FeaturedBook({ 
  title, 
  author, 
  cover, 
  rating, 
  views, 
  chapters, 
  status,
  synopsis 
}: FeaturedBookProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 card">
      <div className="relative aspect-[2/3]">
        <Image
          src={cover}
          alt={title}
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <div>
        <h2 className="text-3xl font-bold mb-2">{title}</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">by {author}</p>
        <div className="flex items-center gap-6 mb-4">
          <span className="flex items-center gap-2">
            <Star className="h-5 w-5 text-yellow-400" />
            {rating.toFixed(1)}
          </span>
          <span className="flex items-center gap-2">
            <Eye className="h-5 w-5 text-blue-400" />
            {views > 1000 ? `${(views/1000).toFixed(1)}K` : views}
          </span>
          <span className="flex items-center gap-2">
            <Book className="h-5 w-5 text-green-400" />
            {chapters} chapters
          </span>
        </div>
        <span className={`inline-block px-3 py-1 rounded-full text-sm mb-4 ${
          status === 'Ongoing' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100' :
          status === 'Completed' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100' :
          'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100'
        }`}>
          {status}
        </span>
        <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-4">
          {synopsis}
        </p>
        <div className="flex gap-4">
          <button className="btn-primary">Read Now</button>
          <button className="btn-secondary">Add to Library</button>
        </div>
      </div>
    </div>
  );
}