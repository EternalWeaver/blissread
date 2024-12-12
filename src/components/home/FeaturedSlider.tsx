"use client";

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { FeaturedBook } from '../books/FeaturedBook';

const FEATURED_BOOKS = [
  {
    id: 1,
    title: "The Dragon's Legacy",
    author: "Sarah Chen",
    cover: "https://picsum.photos/600/900",  // Using picsum for placeholder images
    rating: 4.5,
    views: 150000,
    chapters: 245,
    status: "Ongoing" as const,
    synopsis: "In a world where dragons and humans once coexisted, the last dragon egg holds the key to restoring balance. Follow Maya, a young scholar, as she embarks on an epic journey to protect the egg from those who would use its power for destruction."
  },
  {
    id: 2,
    title: "Digital Dreams",
    author: "James Wilson",
    cover: "https://picsum.photos/600/901",  // Different URL to get different image
    rating: 4.8,
    views: 180000,
    chapters: 180,
    status: "Completed" as const,
    synopsis: "When virtual reality becomes indistinguishable from the real world, one programmer discovers a hidden code that could either save humanity or doom it forever. A thrilling cyberpunk adventure that questions the nature of reality itself."
  }
];

export function FeaturedSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % FEATURED_BOOKS.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + FEATURED_BOOKS.length) % FEATURED_BOOKS.length);
  };

  return (
    <div className="relative">
      <FeaturedBook {...FEATURED_BOOKS[currentIndex]} />
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 dark:bg-gray-800/80 shadow-lg"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 dark:bg-gray-800/80 shadow-lg"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  );
}