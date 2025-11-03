import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-dark">
      <main className="text-center px-4">
        <h1 className="mb-4 text-6xl font-bold text-light">404</h1>
        <p className="mb-8 text-2xl text-muted">Oops! Page not found</p>
        <p className="mb-8 text-base text-muted max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          aria-label="Return to home page"
          className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl transition-colors glow-effect"
          href="/"
        >
          Return to Home
        </Link>
      </main>
    </div>
  );
}
