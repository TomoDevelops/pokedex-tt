import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { Montserrat, Source_Sans_Pro } from "next/font/google";
import { BsSearch, BsPlus } from "react-icons/bs";

import Button from "@/app/components/Button";
import SidebarNavs from "@/app/components/SidebarNavs";
import SuggestedAccContainer from "./components/SuggestedAccContainer";

export const metadata = {
    title: "Pokédex",
    description: "TikTok-like Pokédex app. All videos are from YouTube.com",
};

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["200", "300", "400", "600", "700", "900"],
    variable: "--font-montserrat",
});

const source = Source_Sans_Pro({
    subsets: ["latin"],
    weight: ["200", "300", "400", "600", "700", "900"],
    variable: "--font-source",
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        // TODO: Add responsive layout for mobile and current one for tablet will be md:
        <html lang="en">
            <body
                className={`${montserrat.variable} ${source.variable} custom-scrollbar flex min-h-full flex-col justify-start bg-main font-montserrat text-base`}
            >
                <header className="hidden md:flex fixed z-30 h-[60px] w-full items-center justify-around bg-main shadow-header">
                    <nav className="flex h-full w-full items-center justify-between px-5">
                        <div className="min-w-[100px]">
                            <Link href="/">
                                <Image
                                    src="/images/logo.svg"
                                    alt="Logo"
                                    height={42}
                                    width={118}
                                />
                            </Link>
                        </div>
                        <div className="min-w-[200px] py-2">
                            <form className="flex items-center overflow-hidden rounded-[92px] bg-grayTransparent px-4 py-2">
                                <input
                                    className="w-[252px] border-none bg-transparent text-sm leading-[22px] caret-accentColor outline-none"
                                    type="search"
                                    name="search"
                                    id="search"
                                    placeholder="Search accounts and videos"
                                />
                                <span className="-mx-1 h-[28px] w-px bg-grayTransparent"></span>
                                <button
                                    className="-my-3 -mr-4 ml-0 cursor-pointer border-none bg-transparent py-4 pr-4 pl-3 outline-none hover:bg-neutral-700"
                                    type="submit"
                                >
                                    <BsSearch
                                        size="20"
                                        color="rgba(255, 255, 255, 0.34)"
                                    />
                                </button>
                            </form>
                        </div>
                        <div className="flex justify-around gap-4">
                            <Button
                                bgColor={"transparent"}
                                width={113}
                                height={36}
                            >
                                <BsPlus size="20" color="#ffffffe6" />
                                Upload
                            </Button>
                            <Button bgColor={"red"} width={100} height={36}>
                                Login
                            </Button>
                        </div>
                    </nav>
                </header>
                <main className="mt-0 md:mt-[60px] flex w-full self-center">
                    <aside className="relative md:w-[72px] lg:min-w-[240px]">
                        <div className="bg-black md:bg-main flex md:block custom-scrollbar fixed md:top-[60px] bottom-0 z-20 h-14 md:h-auto w-full md:w-[72px] lg:w-[240px] overflow-y-auto overflow-x-hidden overscroll-y-contain lg:pt-5 px-4 md:pr-0 md:pb-6 md:pl-2 text-sm border-r border-white border-opacity-10 lg:border-none">
                            <SidebarNavs />
                            <div className="hidden lg:block relative py-6 px-2 after:absolute after:bottom-0 after:left-2 after:right-2 after:h-px after:bg-grayTransparent after:content-['']">
                                <p className="hidden lg:block leading-[22px] text-midColor">
                                    Log in to follow creators, like videos, and
                                    view comments.
                                </p>
                                <div className="hidden lg:block mt-5 w-full">
                                    <Button
                                        className="text-lg"
                                        bgColor={"outline"}
                                        height={48}
                                        width={200}
                                    >
                                        Log in
                                    </Button>
                                </div>
                            </div>
                            <SuggestedAccContainer />
                        </div>
                    </aside>
                    <div
                        className={`w-full md:min-w-[420px] flex flex-col items-center`}
                    >
                        {children}
                    </div>
                </main>
            </body>
        </html>
    );
}
