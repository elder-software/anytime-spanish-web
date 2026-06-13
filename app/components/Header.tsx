import Link from "next/link";

const navLinkClassName =
  "text-label-sm text-on-surface-variant transition-colors hover:text-on-surface";

export function Header() {
  return (
    <header className="border-b border-outline-variant/60 bg-surface">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 md:px-8">
        <Link href="/" className="font-display text-xl font-semibold text-on-surface">
          Anytime Spanish
        </Link>
        <nav className="flex items-center gap-6" aria-label="Legal">
          <Link href="/terms" className={navLinkClassName}>
            Terms
          </Link>
          <Link href="/privacy" className={navLinkClassName}>
            Privacy Policy
          </Link>
        </nav>
      </div>
    </header>
  );
}
