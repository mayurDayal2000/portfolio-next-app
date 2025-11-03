export default function SkipToContent() {
  return (
    <a
      className="fixed top-4 left-4 z-50 bg-primary px-6 py-3 text-white font-semibold rounded-lg shadow-lg transform -translate-y-32 focus:translate-y-0 transition-transform duration-200 focus:outline-none focus:ring-4 focus:ring-primary/50"
      href="#main-content"
    >
      Skip to main content
    </a>
  );
}
