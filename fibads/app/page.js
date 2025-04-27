import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import Benefits from "../components/Benefits/Benefits";
import CaseStudy from "../components/CaseStudy/CaseStudy";
import Testimonials from "../components/Testimonials/Testimonials";
import CTA from "../components/CTA/CTA";
import FAQ from "../components/FAQ/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Benefits />
      <CaseStudy />
      <Testimonials />
      <CTA /> {/* CTA placed before FAQ to ensure visibility */}
      <FAQ />
    </>
  );
}
