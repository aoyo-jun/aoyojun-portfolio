export interface MenuToggleProps {
    menuOpen: boolean;
    setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface SectionProps {
    activeSection: string;
    scrollToSection: (id: string, behavior: ScrollBehavior) => void;
}