import {ReactNode} from "react";
import {calloutIcons, calloutStyles, CalloutType} from "@/lib/callout-constants";
import {Link, Image} from "@/components/utils";

export function Callout({children, type, title}: {
    children: ReactNode;
    type: CalloutType;
    title: string;
}) {
    return (
        <div className={"col-span-3 phone:col-span-1 grid grid-cols-3 phone:grid-cols-1 gap-4 h-0 phone:h-auto phone:mb-4"}>
            <div
                className={"w-full col-start-3 phone:col-start-1 rounded-lg bg-ctp-mantle border-ctp-surface0 border-[1px] flex flex-col -translate-y-1/2 phone:translate-y-0"}>
                <div
                    className={`h-12 border-ctp-surface0 border-b-[1px] text-lg px-4 flex flex-row items-center font-bold gap-3 bg-ctp-surface0 rounded-t-lg`}>
                    <div className={`${calloutStyles[type]["color"]}`}>
                        {calloutIcons[type]}
                    </div>
                    {title}
                </div>
                <div className={"px-4 py-2 flex flex-col gap-2"}>
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
        <div className={"col-span-2 phone:col-span-1 flex flex-col gap-4 pb-4 last:pb-12"}>
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
            <div className={"w-auto px-6 pt-6 max-w-[1024px]"}>
                <Link href={"/"}>Back to home</Link>
                <div className={"w-full grid grid-cols-3 phone:grid-cols-1 gap-x-12 mb-12"}>
                    {children}
                </div>
            </div>
        </main>
    );
}

export function BlogPreview({title, children, link, image}:{
    title: string;
    children: ReactNode;
    link: string;
    image: string;
}) {
    return (
        <div
            className={"rounded-lg bg-ctp-base border-ctp-surface0 border-[1px] flex flex-col h-96"}>
            <div className={"w-full rounded-t-lg overflow-hidden h-1/4"}>
                <Image
                    src={image}
                    alt={title}
                    height={200}
                    width={400}
                />
            </div>
            <div className={"px-4 py-2 h-3/4 flex flex-col gap-2"}>
                <h2 className={"text-xl font-bold line-clamp-2"}>{title}</h2>
                <div className={"text-sm flex-grow"}>
                    {children}
                </div>
                <div className={"w-full flex flex-row justify-end"}>
                    <Link href={link}>Read more</Link>
                </div>
            </div>
        </div>
    );
}
