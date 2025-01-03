import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About/Index";
import Repertoire from "@/components/Repertoire";
import Vision from "@/components/Vision";
import Contact from "@/components/Contact";
import CTA from "@/components/CTA";
import Footer from "@/components/Foooter";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <About />
      <Repertoire />
      <Vision />
      <Contact />
      <CTA />
      <Footer />
    </div>
  );
}
