import { useEffect, useRef, useState } from "react";

import Header from "@components/Header";
import MobileMenu from "@components/MobileMenu";

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
        <div className="fixed top-0 left-0 z-10 h-[80vh] lg:h-screen w-full">
          <img className="h-full w-full object-cover" src="/assets/images/desk.png" alt="Hero"/>
        </div>
      </section>
      <div className="mt-[80dvh] lg:mt-[100dvh]">
        <main className="relative flex z-20 scroll-m-9 flex-col bg-black-bg pt-4 pb-12 lg:pb-24">
          <section id="about" ref={aboutRef}>
            <div className="flex h-[1000px] w-full bg-green-500"></div>
          </section>
          <section id="projects" ref={projectsRef}>
            <div className="flex h-[1000px] w-full bg-red-500"></div>
          </section>
          <section id="contact" ref={contactRef}>
            <div className="flex h-[1000px] w-full bg-blue-500"></div>
          </section>
        </main>
      </div>
    </>
  )
}

export default App;
