import type { Metadata } from "next";
import { Footer } from "@/app/components/Footer";
import { Header } from "@/app/components/Header";
import { PRIVACY_POLICY_SECTIONS } from "@/lib/legal/privacy-policy-sections";
import { PRIVACY_POLICY_EFFECTIVE_DATE } from "@/lib/legal/site-metadata";

export const metadata: Metadata = {
  title: "Privacy Policy - Anytime Spanish",
  description:
    "How Anytime Spanish handles your data, offline voice practice, local AI, and website analytics.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col px-6 py-16 md:px-8 md:py-20">
        <article className="mx-auto w-full max-w-5xl">
          <h1 className="text-headline-md text-on-surface">Privacy Policy</h1>
          <p className="text-label-sm mt-3 text-on-surface-variant">
            Last updated: {PRIVACY_POLICY_EFFECTIVE_DATE}
          </p>

          {PRIVACY_POLICY_SECTIONS.map((section) => (
            <section
              key={section.id}
              aria-labelledby={section.id}
              className="mt-10 first:mt-6"
            >
              <h2
                id={section.id}
                className="text-body-lg font-semibold text-on-surface"
              >
                {section.title}
              </h2>
              {section.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className={`text-body-md mt-4 text-on-surface-variant${section.italicFirstParagraph && index === 0 ? " italic" : ""}`}
                >
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </article>
      </main>
      <Footer />
    </>
  );
}
