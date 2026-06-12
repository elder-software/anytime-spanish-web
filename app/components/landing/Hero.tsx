function MicrophoneIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      aria-hidden
      className="text-secondary"
    >
      <rect
        x="10"
        y="4"
        width="8"
        height="14"
        rx="4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M6 13c0 4.418 3.582 8 8 8s8-3.582 8-8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M14 21v4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-16 pt-14 md:px-8 md:pb-24 md:pt-20">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary-container/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-secondary-container/30 blur-3xl"
      />

      <div className="relative mx-auto max-w-5xl">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-outline-variant bg-surface-container px-4 py-2">
          <MicrophoneIcon />
          <span className="text-sm font-medium tracking-wide text-on-surface-variant">
            Voice-first Spanish practice
          </span>
        </div>

        <h1 className="font-display max-w-3xl text-[32px] font-bold leading-[1.2] tracking-tight text-on-surface md:text-[40px] md:leading-[1.2]">
          Speak Spanish like you&apos;re sitting in the plaza
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-[1.67] text-on-surface-variant md:text-[18px] md:leading-[1.67]">
          Anytime Spanish lowers the pressure of language learning. Practice real
          conversations with a warm, unhurried tutor — more travel journal than
          classroom drill.
        </p>

        <p className="mt-4 max-w-2xl text-lg leading-[1.67] text-primary md:text-[18px]">
          <span className="font-medium">Habla con confianza.</span>{" "}
          <span className="text-on-surface-variant">
            Build confidence through dialogue, not flashcards.
          </span>
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href="#get-started"
            className="inline-flex items-center justify-center rounded-xl bg-secondary px-8 py-4 text-base font-medium text-on-primary shadow-[0_8px_32px_rgba(118,90,38,0.12)] transition-opacity hover:opacity-90"
          >
            Start your first conversation
          </a>
          <a
            href="#conversations"
            className="inline-flex items-center justify-center rounded-xl border border-outline-variant bg-surface-container px-8 py-4 text-base font-medium text-on-surface transition-colors hover:bg-surface-container-high"
          >
            Browse topics
          </a>
        </div>
      </div>
    </section>
  );
}
