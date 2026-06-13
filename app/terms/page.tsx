import type { Metadata } from "next";
import { Footer } from "@/app/components/Footer";
import { Header } from "@/app/components/Header";
import { TERMS_SECTIONS } from "@/lib/legal/terms-sections";
import { TERMS_EFFECTIVE_DATE } from "@/lib/legal/site-metadata";

export const metadata: Metadata = {
  title: "Terms & Conditions — Anytime Spanish",
  description:
    "Terms and conditions for using the Anytime Spanish app and marketing website.",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col px-6 py-16 md:px-8 md:py-20">
        <article className="mx-auto w-full max-w-5xl">
          <h1 className="text-headline-md text-on-surface">
            Terms &amp; Conditions
          </h1>
          <p className="text-label-sm mt-3 text-on-surface-variant">
            Last updated: {TERMS_EFFECTIVE_DATE}
          </p>

          {TERMS_SECTIONS.map((section) => (
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
                  className="text-body-md mt-4 text-on-surface-variant"
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
