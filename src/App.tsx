import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import CursorFollower from "./components/CursorFollower";
import { useScrollSpy } from "./hooks/useScrollSpy";
import { scrollToSection } from "./utils/smoothScroll";

function App() {
  const sectionIds = ["hero", "about", "portfolio", "skills", "contact"];
  const activeSection = useScrollSpy(sectionIds);

  return (
    <div className="relative">
      <CursorFollower />
      <Navigation
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;
