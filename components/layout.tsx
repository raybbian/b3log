import {ReactNode} from "react";
import {calloutIcons, calloutStyles, CalloutType} from "@/lib/callout-constants";

export function Callout({children, type, title}: {
    children: ReactNode;
    type: CalloutType;
    title: string;
}) {
    return (
        <div className={"col-span-3 grid grid-cols-3 gap-4 h-0"}>
            <div
                className={"w-full col-start-3 rounded-lg bg-ctp-mantle border-ctp-surface0 border-[1px] flex flex-col -translate-y-1/2"}>
                <div
                    className={`h-12 border-ctp-surface0 border-b-[1px] text-lg px-4 flex flex-row items-center font-bold gap-3 bg-ctp-surface0 rounded-t-lg`}>
                    <div className={`${calloutStyles[type]["color"]}`}>
                        {calloutIcons[type]}
                    </div>
                    {title}
                </div>
                <div className={"px-4 py-2"}>
                    {children}
                </div>
            </div>
        </div>
    );
}

export function Body({children}: {
    children: ReactNode
}) {
    return (
        <div className={"col-span-2 flex flex-col gap-4 px-4 pb-4 last:pb-12"}>
            {children}
        </div>
    );
}

export function BlogContainer({children}: {
    children: ReactNode;
}) {
    return (
        <main
            className={`h-[100dvh] w-[100dvw] max-w-[100dvw] flex flex-row justify-center bg-ctp-crust overflow-x-scroll text-ctp-text`}>
            <div className={"w-auto max-w-[1280px] px-6 grid grid-cols-5 gap-4"}>
                <div id={"nav-menu"} className={"fixed flex flex-col gap-1 pt-24 w-56 text-wrap col-span-1"}/>
                <div className={"w-full grid grid-cols-3 gap-x-12 col-start-2 col-span-4 mb-12"}>
                    {children}
                </div>
            </div>
        </main>
    );
}
