import { conversationCategories } from "@/lib/categories";

function TopicCard({ title }: { title: string }) {
  return (
    <div className="rounded-lg border border-outline-variant/70 bg-surface px-5 py-4 transition-colors hover:border-outline-variant hover:bg-surface-container">
      <p className="font-medium text-on-surface">{title}</p>
    </div>
  );
}

export function CategorySection() {
  return (
    <section
      id="conversations"
      className="px-6 py-16 md:px-8 md:py-20"
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="font-display text-2xl font-semibold leading-8 text-on-surface">
          Conversations for every chapter of your trip
        </h2>
        <p className="mt-3 max-w-2xl text-base leading-[1.625] text-on-surface-variant">
          Topics are grouped like sections in a phrasebook — travel, errands,
          work, and the moments that connect you to people.
        </p>

        <div className="mt-10 flex flex-col gap-10">
          {conversationCategories.map((category) => (
            <div key={category.id}>
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <h3 className="font-display text-2xl font-semibold leading-8 text-on-surface">
                  {category.name}
                </h3>
                {category.isFree && (
                  <span className="rounded-full bg-secondary-container px-3 py-1 text-xs font-medium tracking-wide text-on-secondary-container">
                    Free
                  </span>
                )}
              </div>
              <p className="text-base leading-[1.625] text-on-surface-variant">
                {category.description}
              </p>
              <div className="mt-4 flex flex-col gap-4">
                {category.topics.map((topic) => (
                  <TopicCard key={topic} title={topic} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
