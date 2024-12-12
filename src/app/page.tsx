import Link from 'next/link';
import { BookCard } from '@/components/books/BookCard';
import { FeaturedSlider } from '@/components/home/FeaturedSlider';

const TRENDING_BOOKS = [
  {
    id: 1,
    title: "The Dragon's Legacy",
    author: "Sarah Chen",
    cover: "https://picsum.photos/400/600",
    rating: 4.5,
    views: 150000,
    chapters: 245,
    status: "Ongoing" as const,
  },
  {
    id: 2,
    title: "Digital Dreams",
    author: "James Wilson",
    cover: "https://picsum.photos/400/601",
    rating: 4.8,
    views: 180000,
    chapters: 180,
    status: "Completed" as const,
  },
  {
    id: 3,
    title: "Heart's Melody",
    author: "Emma Roberts",
    cover: "https://picsum.photos/400/602",
    rating: 4.3,
    views: 120000,
    chapters: 150,
    status: "Ongoing" as const,
  },
  {
    id: 4,
    title: "Shadow Hunter",
    author: "Michael Black",
    cover: "https://picsum.photos/400/603",
    rating: 4.7,
    views: 200000,
    chapters: 320,
    status: "Completed" as const,
  }
];

const GENRES = [
  "All",
  "Fantasy",
  "Science Fiction",
  "Romance",
  "Action",
  "Mystery",
  "Horror",
  "Adventure",
  "Historical",
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <header className="fixed top-0 w-full bg-white dark:bg-gray-900 shadow-sm">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-blue-500">
            BlissRead
          </Link>
          <div className="flex items-center space-x-4">
            <Link href="/rankings" className="hover:text-blue-500">
              Rankings
            </Link>
            <Link href="/library" className="hover:text-blue-500">
              Library
            </Link>
            <Link href="/contests" className="hover:text-blue-500">
              Contests
            </Link>
            <button className="btn-primary">
              Login
            </button>
          </div>
        </nav>
      </header>
      
      <div className="container mx-auto px-4 pt-24">
        {/* Featured Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Featured Stories</h2>
          <FeaturedSlider />
        </section>

        {/* Genres Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Browse by Genre</h2>
          <div className="flex gap-4 overflow-x-auto pb-4">
            {GENRES.map((genre) => (
              <button
                key={genre}
                className="btn-secondary whitespace-nowrap"
              >
                {genre}
              </button>
            ))}
          </div>
        </section>

        {/* Trending Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Trending Now</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {TRENDING_BOOKS.map((book) => (
              <BookCard key={book.id} {...book} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}