import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Metrics } from "@/components/Metrics";
import { Navbar } from "@/components/Navbar";
import { Profile } from "@/components/Profile";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <div className="section-rule" aria-hidden />
        <Profile />
        <div className="section-rule" aria-hidden />
        <Metrics />
        <div className="section-rule" aria-hidden />
        <Projects />
        <Skills />
        <div className="section-rule" aria-hidden />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
