const features = [
  {
    title: "Talk, don't tap",
    description:
      "The microphone is the moment of action. Speak naturally and get gentle, conversational feedback — the way you'd practice with a patient friend abroad.",
    accent: "secondary-container",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect
          x="9"
          y="3"
          width="6"
          height="11"
          rx="3"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        <path
          d="M5 11c0 3.866 3.134 7 7 7s7-3.134 7-7"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Real situations, real Spanish",
    description:
      "From ordering tapas in Madrid to opening a bank account — every topic mirrors the conversations you'll actually have.",
    accent: "primary-container",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M4 10c0-1.657 4.03-3 9-3s9 1.343 9 3"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        <path
          d="M4 10v4c0 1.657 4.03 3 9 3s9-1.343 9-3v-4"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        <path
          d="M4 14v4c0 1.657 4.03 3 9 3s9-1.343 9-3v-4"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "A traveler's journal, not a test",
    description:
      "Soft surfaces, generous spacing, and a calm pace. The design invites you to stay — not rush through a lesson and leave.",
    accent: "tertiary-container",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M6 4h12a2 2 0 0 1 2 2v14l-4-2.5L12 20l-4-1.5L4 20V6a2 2 0 0 1 2-2z"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinejoin="round"
        />
        <path
          d="M9 8h6M9 12h4"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
] as const;

const accentClasses = {
  "secondary-container": "bg-secondary-container text-on-secondary-container",
  "primary-container": "bg-primary-container/30 text-on-primary-container",
  "tertiary-container": "bg-tertiary-container/40 text-on-tertiary-container",
} as const;

export function Features() {
  return (
    <section className="border-t border-outline-variant/50 bg-surface-container px-6 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-display text-2xl font-semibold leading-8 text-on-surface">
          Learning that feels human
        </h2>
        <p className="mt-3 max-w-2xl text-base leading-[1.625] text-on-surface-variant">
          We built Anytime Spanish around one idea: speaking a new language
          should feel welcoming, not intimidating.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-lg border border-outline-variant/70 bg-surface p-6"
            >
              <div
                className={`mb-5 inline-flex rounded-xl p-3 ${accentClasses[feature.accent]}`}
              >
                {feature.icon}
              </div>
              <h3 className="font-display text-xl font-semibold text-on-surface">
                {feature.title}
              </h3>
              <p className="mt-3 text-base leading-[1.625] text-on-surface-variant">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
