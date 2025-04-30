import { useRef, useState } from "react";
import { cn } from "@lib/utils";
import { SectionProps } from "@types";

interface HeaderItemsProps {
    mainText: string;
    href: string;
}

const letters = "abcdefghijklmnopqrstuvwxyz"

function HeaderItems({
    mainText,
    href,
    activeSection,
    scrollToSection
}: HeaderItemsProps & SectionProps) {
    const [displayText, setDisplayText] = useState<string>(mainText);
    const intervalRef = useRef<number | null>(null);

    const scrambleText = () => {
        let iteration = 0;

        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }

        intervalRef.current = window.setInterval(() => {
            setDisplayText((prev) =>
                prev
                .split("")
                .map((_letter, index) => {
                    if(index < iteration) {
                        return mainText[index];
                    }

                    return letters[Math.floor(Math.random() * letters.length)];
                })
                .join("")
            );

            if (iteration >= mainText.length) {
                clearInterval(intervalRef.current!);
                setDisplayText(mainText);
            }

            iteration += 1/5;
        }, 30);
    }

    const stopScramble = () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          setDisplayText(mainText);
        }
    };
    
    return (
        <div
            className={cn(
                "flex items-center gap-1 text-default-primary hover:text-default-secondary",
                activeSection === (mainText.toLowerCase()) && "!text-default-secondary"
            )}
        >
            <a
                className="min-w-[9ch] text-center"
                onMouseOver={scrambleText}
                onMouseOut={stopScramble}
                onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(mainText.toLowerCase(), "smooth");
                }}
                href={href}
                role="link"
            >
                {displayText}
            </a>
        </div>
    )
}

export default HeaderItems;