import { useEffect, useRef, useState } from "react";

import Header from "./components/Header.tsx";
import MobileMenu from "./components/MobileMenu.tsx";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  const homeRef = useRef<HTMLElement | null>(null);
  const aboutRef = useRef<HTMLElement | null>(null);
  const projectsRef = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log(entry.target.id.toLowerCase());
            setActiveSection(entry.target.id.toLowerCase());
          }
        });
      },
      { threshold: 0.5 }
    );

    const sectionRefs = [homeRef, aboutRef, projectsRef, contactRef];
    sectionRefs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string, behavior: ScrollBehavior) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -36;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
  
      window.scrollTo({ top: y, behavior });
    }
  };

  return (
    <>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} activeSection={activeSection} scrollToSection={scrollToSection} />
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} activeSection={activeSection} scrollToSection={scrollToSection} />
      <section id="home" ref={homeRef}>
        <div className="flex relative h-[100vh] w-full">

        </div>
      </section>
      <section id="about" ref={aboutRef}>
        <div className="flex relative h-[100vh] w-full bg-black-bg">

        </div>
      </section>
      <section id="projects" ref={projectsRef}>
        <div className="flex relative h-[100vh] w-full bg-red-500">

        </div>
      </section>
      <section id="contact" ref={contactRef}>
        <div className="flex relative h-[100vh] w-full bg-blue-500">

        </div>
      </section>
    </>
  )
}

export default App;
