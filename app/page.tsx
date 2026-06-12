import { CategorySection } from "@/app/components/landing/CategorySection";
import { CtaBanner } from "@/app/components/landing/CtaBanner";
import { Features } from "@/app/components/landing/Features";
import { Footer } from "@/app/components/landing/Footer";
import { Header } from "@/app/components/landing/Header";
import { Hero } from "@/app/components/landing/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <CategorySection />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
