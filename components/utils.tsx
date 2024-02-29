import {ReactNode, RefObject, useEffect, useRef, useState} from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import CatppuccinFrappe from "@/lib/catppuccin-hljs";
import {FaCaretDown, FaCopy} from "react-icons/fa6";
import NextLink from "next/link";
import NextImage from "next/image";
import {createPortal} from "react-dom";
import {useOnScreen} from "@/lib/hooks";

export function Title({children}: {
    children?: ReactNode
}) {
    const [navMenu, setNavMenu] = useState<HTMLElement | null>(null);
    const selfRef: RefObject<HTMLHeadingElement> = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        setNavMenu(document.getElementById("nav-menu"));
    }, []);

    return (
        <>
            {navMenu && createPortal(
                <p
                    className={"cursor-pointer font-bold"}
                    onClick={() => {
                        if (!selfRef.current) return;
                        selfRef.current.scrollIntoView({behavior: "smooth"});
                    }}
                >
                    {children}
                </p>,
                navMenu
            )}
            <h1 className={"text-5xl font-bold py-4 leading-tight"} ref={selfRef}>
                {children}
            </h1>
        </>
    );
}

export function Header({children}: {
    children?: ReactNode
}) {
    const [navMenu, setNavMenu] = useState<HTMLElement | null>(null);
    const selfRef: RefObject<HTMLHeadingElement> = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        setNavMenu(document.getElementById("nav-menu"));
    }, []);

    return (
        <>
            {navMenu && createPortal(
                <p
                    className={"text-sm text-ctp-subtext1 indent-4 hover:text-ctp-green transition-colors duration-100 cursor-pointer"}
                    onClick={() => {
                        if (!selfRef.current) return;
                        selfRef.current.scrollIntoView({behavior: "smooth"});
                    }}
                >
                    {children}
                </p>,
                navMenu
            )}
            <h2 className={"text-4xl font-bold leading-tight pt-4"} ref={selfRef}>
                {children}
            </h2>
        </>
    );
}

export function SubHeader({children}: {
    children?: ReactNode
}) {
    const [navMenu, setNavMenu] = useState<HTMLElement | null>(null);
    const selfRef: RefObject<HTMLHeadingElement> = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        setNavMenu(document.getElementById("nav-menu"));
    }, []);

    return (
        <>
            {navMenu && createPortal(
                <p
                    className={`text-xs text-ctp-subtext0 hover:text-ctp-green indent-8 transition-colors duration-100 cursor-pointer`}
                    onClick={() => {
                        if (!selfRef.current) return;
                        selfRef.current.scrollIntoView({behavior: "smooth"});
                    }}
                >
                    {children}
                </p>,
                navMenu
            )}
            <h3 className={"text-3xl font-bold leading-tight pt-3"} ref={selfRef}>
                {children}
            </h3>
        </>
    );
}

export function Paragraph({children}: {
    children?: ReactNode
}) {
    return (
        <p className={""}>
            {children}
        </p>
    );
}

export function Code({code, output, expand = false, language}: {
    code: string;
    output?: string;
    expand?: boolean;
    language: string;
}) {
    const [expanded, setExpanded] = useState(!expand);

    return (
        <div
            className={`w-full rounded-lg overflow-hidden border-ctp-surface0 border-[1px] text-sm relative grid ${expand && "grid-rows-[13rem,_0fr]"} ${expand && expanded && "grid-rows-[13rem,_1fr] h-auto"} transition-[grid-template-rows_400ms]`}>
            <div className={"w-full overflow-hidden row-[1_/_span_3]"}>
                <div
                    className={"absolute top-0 right-0 p-2 w-8 bg-ctp-base"}
                >
                    <FaCopy
                        className={"cursor-pointer text-ctp-overlay0 hover:text-ctp-overlay2 transition-colors duration-100"}
                        size={16}
                        onClick={() => {
                            navigator.clipboard.writeText(code);
                        }}
                    />
                </div>
                <SyntaxHighlighter language={language} style={CatppuccinFrappe}
                                   className={`${output && "border-b-[2px] border-ctp-surface0"}`} wrapLongLines={true}>
                    {code}
                </SyntaxHighlighter>
                {output &&
                    <SyntaxHighlighter language={"txt"} style={CatppuccinFrappe}>
                        {output}
                    </SyntaxHighlighter>
                }
                {!expanded &&
                    <div
                        className={"absolute -bottom-12 left-0 w-full h-12 shadow-[0_-10px_20px_10px_rgba(0,0,0,0.3)]"}/>
                }
                {expand &&
                    <div className={"absolute bottom-0 left-0 w-full h-7 grid place-items-center"}>
                        <FaCaretDown
                            size={24}
                            className={`text-ctp-overlay1 hover:text-ctp-overlay2 cursor-pointer ${expanded ? "rotate-180 hover:rotate-[150deg]" : "rotate-0 hover:rotate-[30deg]"} transition-[transform_300ms,_font-color_100ms]`}
                            onClick={() => {
                                setExpanded(!expanded);
                            }}
                        />
                    </div>
                }
            </div>
        </div>
    );
}

export function InlineCode({children, color}: {
    children?: ReactNode;
    color?: string;
}) {
    return (
        <code className={`bg-ctp-base text-sm ${color ? color : "text-white"}`}>
            {children}
        </code>
    );
}

export function Link({children, href}: {
    children?: ReactNode;
    href: string;
}) {
    return <NextLink href={href} target={"_blank"}>
        <span
            className={"text-ctp-blue hover:text-ctp-lavender cursor-pointer transition-colors duration-100"}>{children}↗</span>
    </NextLink>;
}

export function Image({src, alt, caption, width, height}: {
    src: string;
    alt: string;
    caption?: string;
    width: number;
    height: number;
}) {
    return (
        <>
            <div className={"rounded-lg overflow-hidden border-ctp-surface0 border-[1px] grid place-items-center mt-2"}>
                <NextImage
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                    placeholder={"blur"}
                    blurDataURL={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAPklEQVQIW2NUVTP9/+/vX4Z/f/8w/P0HoRnVNS2ggggJRk0dG6DgH6AKkCBUpY6e/X+YNpgEo56hM1glsgQAoA9DLTz3kC8AAAAASUVORK5CYII="}
                    style={{objectFit: "cover"}}
                />
            </div>
            {caption && <p className={"text-center text-xs p-2 mb"}>{caption}</p>}
        </>
    );
}