import { cn } from "@lib/utils";
import { MenuToggleProps, SectionProps } from "@types";

interface MobileMenuItemsProps {
    mainText: string;
    href: string;
}
 
function MobileMenuItems({
    mainText,
    href,
    menuOpen,
    setMenuOpen,
    activeSection,
    scrollToSection
}: MobileMenuItemsProps & MenuToggleProps & SectionProps) {
    return (
        <li
            className={cn(
                "text-default-primary font-mada font-bold text-[2rem]",
                activeSection === (mainText.toLowerCase()) && "!text-default-secondary"
            )}
        >
            <a
                className="flex flex-row justi items-center text-start hover:animate-blink-green hover:text-default-secondary w-fit"
                onClick={(e) => {
                    setMenuOpen(!menuOpen);
                    e.preventDefault();
                    scrollToSection(mainText.toLowerCase(), "instant");
                }}
                href={href}
                role="link"
            >
                <span className="!text-default-primary mr-2">{">"}</span>
                {mainText}
                {activeSection === (mainText.toLowerCase()) ? (<div className="h-[0.20rem] w-4 mt-5 ml-[0.375rem] bg-default-secondary animate-blink"></div>) : null}
            </a>
        </li>
    );
}
 
export default MobileMenuItems;