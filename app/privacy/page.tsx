import type { Metadata } from "next";
import { Footer } from "@/app/components/Footer";
import { Header } from "@/app/components/Header";

export const metadata: Metadata = {
  title: "Privacy Policy — Anytime Spanish",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col px-6 py-16 md:px-8 md:py-20">
        <article className="mx-auto w-full max-w-5xl">
          <h1 className="text-headline-md text-on-surface">Privacy Policy</h1>
          <p className="text-body-md mt-6 text-on-surface-variant">
            Privacy policy content will be published here.
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
