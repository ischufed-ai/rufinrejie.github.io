import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { ScrollProgress } from "./components/ui/ScrollProgress";
import { About } from "./components/sections/About";
import { CallToAction } from "./components/sections/CallToAction";
import { Contact } from "./components/sections/Contact";
import { Education } from "./components/sections/Education";
import { Experience } from "./components/sections/Experience";
import { Expertise } from "./components/sections/Expertise";
import { Hero } from "./components/sections/Hero";
import { Process } from "./components/sections/Process";
import { Toolkit } from "./components/sections/Toolkit";
import { ValueProps } from "./components/sections/ValueProps";

export default function App() {
  return (
    <div className="min-h-screen bg-mist">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-5 focus:py-3 focus:text-sm focus:font-medium focus:text-navy focus:shadow-lg"
      >
        Skip to content
      </a>

      <ScrollProgress />
      <Navbar />

      <main id="main" tabIndex={-1} className="focus:outline-none">
        <Hero />
        <About />
        <Expertise />
        <Experience />
        <Process />
        <ValueProps />
        <Toolkit />
        <Education />
        <CallToAction />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
