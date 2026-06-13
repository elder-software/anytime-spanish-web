import { DOWNLOAD_SECTION_ID } from "@/lib/app-links";

export function Header() {
  return (
    <header className="border-b border-outline-variant/60 bg-surface">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 md:px-8">
        <a href="#" className="font-display text-xl font-semibold text-on-surface">
          Anytime Spanish
        </a>
        <a
          href={`#${DOWNLOAD_SECTION_ID}`}
          className="text-label-sm rounded-xl bg-primary px-5 py-2.5 text-on-primary transition-opacity hover:opacity-90"
        >
          Download
        </a>
      </div>
    </header>
  );
}
