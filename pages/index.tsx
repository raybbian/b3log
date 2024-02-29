import Image from "next/image";
import {Inter} from "next/font/google";

const inter = Inter({subsets: ["latin"]});

export default function Home() {
    return (
        <main className={`h-[100dvh] w-[100dvw] ${inter.className} bg-ctp-crust flex flex-col items-center`}>
            <div className={"flex flex-col gap-2 w-full max-w-[1152px] p-6"}>
                <p className={"text-4xl font-bold"}>Raymond's Blog</p>
                <div className={"flex flex-row gap-4 justify-between"}>
                    <p className={"text-base line-clamp-2"}>A place to jot down all the things that I find
                        interesting.</p>
                </div>
            </div>
        </main>
    );
}
