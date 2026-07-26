import { useRef } from "react";
import {
  AboutSection,
  ContactSection,
  ExperienceSection,
  Footer,
  Header,
  Hero,
  Marquee,
  Preloader,
  ToolkitSection,
  WorkSection,
} from "../components/sections";
import { usePortfolioMotion } from "../hooks/usePortfolioMotion";

export default function PortfolioPage() {
  const rootRef = useRef<HTMLDivElement>(null);
  usePortfolioMotion(rootRef);

  return (
    <div ref={rootRef} className="portfolio-root">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Preloader />
      <Header />
      <main id="main">
        <Hero />
        <Marquee />
        <AboutSection />
        <WorkSection />
        <ExperienceSection />
        <ToolkitSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
