import { useEffect } from "react";
import { cn } from "../lib/utils";

import { MenuToggleProps } from "../types";
import { SectionProps } from "../types.ts"

import MobileMenuItems from "./MobileMenuItems.tsx";
import { ReactComponent as Github } from '../assets/svg/github.svg';
import { ReactComponent as Linkedin } from '../assets/svg/linkedin.svg';

function MobileMenu({
    menuOpen,
    setMenuOpen,
    activeSection,
    scrollToSection
}: MenuToggleProps & SectionProps) {
    useEffect(() => {
        if (menuOpen) {
          document.body.style.overflow = "hidden";
        } else {
          document.body.style.overflow = "";
        }
    
        return () => {
          document.body.style.overflow = "";
        };
    }, [menuOpen]);
      
    return (
        <div className="flex justify-end">
            <div
                className={cn(
                    "grid-layout grid-rows-2 fixed top-9 right-0 z-[1000] w-full h-[calc(100%-2.25rem)] origin-right bg-black-bg py-5 px-4 transform transition-transform duration-200 ease-in-out lg:hidden",
                    menuOpen && "translate-x-0",
                    !menuOpen && "translate-x-full"
                )}
            >
                <ul className="row-start-1 flex h-[50%] flex-col gap-y-[0.125rem] col-span-4">
                    <MobileMenuItems mainText={"Home"} href={"/"} menuOpen={menuOpen} setMenuOpen={setMenuOpen} activeSection={activeSection} scrollToSection={scrollToSection} />
                    <MobileMenuItems mainText={"About"} href={"#about"} menuOpen={menuOpen} setMenuOpen={setMenuOpen} activeSection={activeSection} scrollToSection={scrollToSection} />
                    <MobileMenuItems mainText={"Projects"} href={"#projects"} menuOpen={menuOpen} setMenuOpen={setMenuOpen} activeSection={activeSection} scrollToSection={scrollToSection} />
                    <MobileMenuItems mainText={"Contact"} href={"#contact"} menuOpen={menuOpen} setMenuOpen={setMenuOpen} activeSection={activeSection} scrollToSection={scrollToSection} />
                </ul>
                <div className="row-start-2 flex h-[50%] flex-col col-span-4 justify-end gap-y-16">
                    <div className="flex flex-row items-center justify-end gap-x-2 pb-3 pr-3 whitespace-nowrap font-mada text-default-primary text-[1rem]">
                        <a className="h-max" target="_blank" href="https://github.com/aoyo-jun">
                            <Github className="h-12 fill-default-primary hover:fill-default-secondary" />
                        </a>
                        <a className="h-max" target="_blank" href="https://www.linkedin.com/in/patrick-jun-miyaura-ihy/">
                            <Linkedin className="h-12 fill-default-primary stroke-default-primary hover:fill-default-secondary hover:stroke-default-secondary" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileMenu;