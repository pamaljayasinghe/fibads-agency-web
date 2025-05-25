import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Services from "../components/Services/Services";
import CaseStudy from "../components/CaseStudy/CaseStudy";
import Testimonials from "../components/Testimonials/Testimonials";
import CTA from "../components/CTA/CTA";
import FAQ from "../components/FAQ/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <CaseStudy />
      <CTA /> {/* CTA placed before FAQ to ensure visibility */}
    </>
  );
}
