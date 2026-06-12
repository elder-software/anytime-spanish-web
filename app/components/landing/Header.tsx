export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-outline-variant/60 bg-surface/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 md:px-8">
        <a href="#" className="font-display text-xl font-semibold text-on-surface">
          Anytime Spanish
        </a>
        <nav className="flex items-center gap-3">
          <a
            href="#conversations"
            className="hidden rounded-xl px-4 py-2 text-sm font-medium text-on-surface-variant transition-colors hover:text-on-surface sm:inline-block"
          >
            Conversations
          </a>
          <a
            href="#get-started"
            className="rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-on-primary transition-opacity hover:opacity-90"
          >
            Get started
          </a>
        </nav>
      </div>
    </header>
  );
}
