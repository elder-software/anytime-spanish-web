import { APP_STORE_URL, DOWNLOAD_SECTION_ID, PLAY_STORE_URL } from "@/lib/app-links";

export function Hero() {
  return (
    <section
      id={DOWNLOAD_SECTION_ID}
      className="relative flex flex-1 items-center overflow-hidden px-6 py-16 md:px-8 md:py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-primary-container/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-secondary-container/30 blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-2xl text-center">
        <p className="text-label-sm text-on-surface-variant">
          Practice anywhere · Fully offline · Android (iOS coming soon)
        </p>

        <h1 className="text-display-lg mt-4 text-on-surface">
          Practice Spanish through real conversations
        </h1>

        <p className="text-body-lg mt-5 text-on-surface-variant">
          On the plane, in the park, or off the grid. Pick a scenario and speak
          naturally with an AI tutor that lives on your phone.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={APP_STORE_URL}
            className="text-body-md inline-flex w-full items-center justify-center rounded-xl bg-secondary px-8 py-4 font-medium text-on-secondary shadow-[0_8px_32px_rgba(118,90,38,0.12)] transition-opacity hover:opacity-90 sm:w-auto"
          >
            Download on the App Store
          </a>
          <a
            href={PLAY_STORE_URL}
            className="text-body-md inline-flex w-full items-center justify-center rounded-xl border border-outline-variant bg-surface-container px-8 py-4 font-medium text-on-surface transition-colors hover:bg-surface-container-high sm:w-auto"
          >
            Get it on Google Play
          </a>
        </div>

        <p className="text-body-md mt-5 text-on-surface-variant">
          Free to download. Two conversations included.
        </p>
        <p className="text-body-md mt-5 text-on-surface-variant">
          Unlock every scenario for only $9.99 USD once. No subscription.
        </p>
      </div>
    </section>
  );
}
