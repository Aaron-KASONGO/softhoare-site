import Image from "next/image";
import { Navbar } from "./_components/navbar";
import { HeroSection } from "./_components/hero-section";
import { FeaturesSection } from "./_components/features-section";
import { WhyUs } from "./_components/why-us";
import { MyProjects } from "./_components/my-projects";
import { Testimonial } from "./_components/testimonial";
import { ContactProjet } from "./_components/contact-projet";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <WhyUs />
      <MyProjects />
      <Testimonial />
      <ContactProjet />
    </div>
  );
}
