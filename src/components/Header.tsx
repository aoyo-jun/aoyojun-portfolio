import HeaderItems from "./HeaderItems.tsx";
import Menu from "./Menu.tsx";
import { MenuToggleProps } from "../types";
import { SectionProps } from "../types.ts"

import Logo from "../assets/svg/Logo/Logo.tsx"
import { ReactComponent as Globe } from '../assets/svg/globe.svg';
import { ReactComponent as Github } from '../assets/svg/github.svg';
import { ReactComponent as Linkedin } from '../assets/svg/linkedin.svg';

function Header({
    menuOpen,
    setMenuOpen,
    activeSection,
    scrollToSection
}: MenuToggleProps & SectionProps) {
    return (
        <nav className="fixed top-0 z-[1000] w-full flex flex-col items-center justify-center bg-black-bg text-[0.75rem] lg:text-[0.85rem] font-mada border-1 border-b-[#262626] lg:border-none
        lg:bg-transparent lg:[background-image:linear-gradient(#000000_1px,transparent_1px),linear-gradient(to_right,#000000_1px,rgba(0,0,0,0.7)_1px)]
        lg:[background-position-y:1px] lg:[background-size:2px_2px] lg:after:absolute lg:after:-bottom-px lg:after:left-0 lg:after:h-px after:w-full lg:after:bg-brand-w1/10">
            <div className="h-9 grid items-center grid-cols-[repeat(4,minmax(0,1fr))] lg:grid-cols-[repeat(12,minmax(0,1fr))]
            mx-auto w-full max-w-[120rem] gap-3 px-4">
                <a className="col-span-1 w-fit lg:col-start-1 lg:col-end-2 flex flex-row items-end" href="/">
                    <Logo menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                </a>
                <div className="col-start-3 col-end-10 hidden lg:flex w-full justify-center gap-5 lg:gap-7 lg:ml-[2.25rem]">
                    <HeaderItems mainText="Home" href="" activeSection={activeSection} scrollToSection={scrollToSection} />
                    <HeaderItems mainText="About" href="#about" activeSection={activeSection} scrollToSection={scrollToSection} />
                    <HeaderItems mainText="Projects" href="#projects" activeSection={activeSection} scrollToSection={scrollToSection} />
                    <HeaderItems mainText="Contact" href="#contact" activeSection={activeSection} scrollToSection={scrollToSection} />
                </div>
                <div className="col-start-2 col-end-5 lg:col-start-10 lg:col-end-13 ml-auto mr-3 lg:mr-0 flex items-center overflow-hidden">
                    <div className="hidden lg:flex items-center justify-end mr-5 gap-x-3">
                        <a className="h-max" target="_blank" href="https://github.com/aoyo-jun">
                            <Github className="h-7 fill-default-primary hover:fill-default-secondary" />
                        </a>
                        <a className="h-max" target="_blank" href="https://www.linkedin.com/in/patrick-jun-miyaura-ihy/">
                            <Linkedin className="h-7 fill-default-primary stroke-default-primary hover:fill-default-secondary hover:stroke-default-secondary" />
                        </a>
                    </div>
                    <span className="text-default-primary">Coding globally from Brazil</span>
                    <Globe className="size-4 lg:size-5 ml-[0.35rem] lg:pb-[0.1rem]" />
                </div>
                <div className="col-start-5 flex lg:hidden items-center justify-end">
                    <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                </div>
            </div>
        </nav>
    )
  }
  
export default Header;