export function CtaBanner() {
  return (
    <section
      id="get-started"
      className="px-6 py-16 md:px-8 md:py-20"
    >
      <div className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-lg border border-outline-variant/70 bg-surface-container-high px-8 py-12 text-center md:px-16 md:py-16">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(220,138,122,0.15),transparent_60%)]"
          />
          <div className="relative">
            <h2 className="font-display text-[32px] font-bold leading-[1.2] tracking-tight text-on-surface md:text-[40px]">
              Your plaza is waiting
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-[1.625] text-on-surface-variant md:text-lg">
              Try two free conversations today — order food in Madrid or talk
              about your day. No pressure, just practice.
            </p>
            <a
              href="#"
              className="mt-8 inline-flex items-center justify-center rounded-xl bg-primary px-8 py-4 text-base font-medium text-on-primary shadow-[0_8px_32px_rgba(143,75,62,0.12)] transition-opacity hover:opacity-90"
            >
              Begin with a free topic
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
