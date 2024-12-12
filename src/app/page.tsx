import Link from 'next/link';

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

      <section className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-center mb-8">
            Welcome to BlissRead
          </h1>
          <p className="text-center text-lg mb-8 max-w-2xl mx-auto">
            Discover thousands of web novels, connect with fellow readers, 
            and embark on endless adventures.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="btn-primary">
              Browse Novels
            </button>
            <button className="btn-secondary">
              Start Writing
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}