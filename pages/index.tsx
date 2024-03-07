import Image from "next/image";
import {Inter} from "next/font/google";
import {BlogPreview} from "@/components/layout";
import {Link} from "@/components/utils";

const inter = Inter({subsets: ["latin"]});

export default function Home() {
    return (
        <main className={`h-[100dvh] w-[100dvw] ${inter.className} bg-ctp-crust flex flex-row`}>
            <div className={"flex-grow grid place-items-center"}>
                <h1 className={"text-8xl font-bold"}>b³log</h1>
            </div>
            <div className={"w-96 bg-ctp-mantle p-4 flex flex-row gap-4"}>
                <BlogPreview
                    title={"How to Debug Complex Data Structures in Competitive Programming"}
                    link={"/blog/how-to-debug-complex-data-structures-in-competitive-programming"}
                    image={"/how-to-debug-complex-data-structures-in-competitive-programming/debug.png"}
                >
                    If you've ever done competitive programming on a site like <Link newTab={true}
                                                                                     href={"https://usaco.org"}>USACO</Link> or <Link
                    newTab={true} href={"https://codeforces.com"}>Codeforces</Link>,
                    you've probably related to the struggles of typing out super long print statements in some form or
                    another. Visualizing the information in the data structures you use should be a useful option when
                    trying to debug your code. Let's make it so that is the case.
                </BlogPreview>
            </div>
        </main>
    );
}
