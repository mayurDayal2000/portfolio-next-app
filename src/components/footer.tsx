export default function Footer() {
  return (
    <footer className="bg-dark-secondary border-t border-white/10 py-6 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-2">
        <p className="text-sm text-muted-foreground">
          &copy; 2021 - {new Date().getFullYear()} Your Name. Built with React,
          TypeScript, and Tailwind CSS.
        </p>
        <p className="text-sm text-muted">
          Available for freelance projects and full-time opportunities.
        </p>
      </div>
    </footer>
  );
}
