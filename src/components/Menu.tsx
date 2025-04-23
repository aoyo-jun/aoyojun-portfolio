import { cn } from "../lib/utils";
import { MenuToggleProps } from "../types";

function Menu({
    menuOpen,
    setMenuOpen
}: MenuToggleProps) {
    return (
        <button onClick={() => setMenuOpen(!menuOpen)} className="cursor-pointer">
            <span className="relative flex flex-col items-center justify-center gap-1">
                <span
                    className={cn(
                        "h-[0.125rem] w-5 bg-white transition-all duration-200 ease-in-out",
                        menuOpen && "rotate-45 translate-y-[0.375rem] h-[0.1rem] w-4"
                    )}
                ></span>
                <span
                    className={cn(
                        "h-[0.125rem] w-5 bg-white transition-all duration-200 ease-in-out",
                        menuOpen && "opacity-0"
                    )}
                ></span>
                <span
                    className={cn(
                        "h-[0.125rem] w-5 bg-white transition-all duration-200 ease-in-out",
                        menuOpen && "-rotate-45 translate-y-[-0.375rem] h-[0.1rem] w-4"
                    )}
                ></span>
            </span>
        </button>
    )   
}

export default Menu;