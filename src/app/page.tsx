import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Process from "@/components/Process";
import CTABanner from "@/components/CTABanner";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1}>
      {/* Skip to main content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-amber-400 focus:text-slate-900 focus:rounded-lg focus:font-bold"
      >
        Pular para o conteúdo principal
      </a>

      <Navbar />

      <Hero />
      <About />
      <Services />
      <Process />
      <CTABanner />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
