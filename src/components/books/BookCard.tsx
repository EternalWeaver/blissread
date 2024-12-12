"use client";

import Image from 'next/image';
import { Book, Star, Eye } from 'lucide-react';

interface BookCardProps {
  title: string;
  author: string;
  cover: string;
  rating: number;
  views: number;
  chapters: number;
  status: 'Ongoing' | 'Completed' | 'Hiatus';
}

export function BookCard({ title, author, cover, rating, views, chapters, status }: BookCardProps) {
  return (
    <div className="card hover:shadow-lg transition-shadow">
      <div className="relative aspect-[2/3] mb-4">
        <Image
          src={cover}
          alt={title}
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <h3 className="font-bold mb-2 line-clamp-2">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{author}</p>
      <div className="flex items-center justify-between text-sm">
        <span className="flex items-center gap-1">
          <Star className="h-4 w-4 text-yellow-400" />
          {rating.toFixed(1)}
        </span>
        <span className="flex items-center gap-1">
          <Eye className="h-4 w-4 text-blue-400" />
          {views > 1000 ? `${(views/1000).toFixed(1)}K` : views}
        </span>
        <span className="flex items-center gap-1">
          <Book className="h-4 w-4 text-green-400" />
          {chapters}
        </span>
      </div>
      <div className="mt-2">
        <span className={`inline-block px-2 py-1 rounded text-xs ${
          status === 'Ongoing' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100' :
          status === 'Completed' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100' :
          'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100'
        }`}>
          {status}
        </span>
      </div>
    </div>
  );
}