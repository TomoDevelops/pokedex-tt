"use client";

import React from "react";
import Link from "next/link";
import { useSearchParams, usePathname } from "next/navigation";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const currentPath = usePathname();
    const searchQuery = useSearchParams().get("q") || "";

    return (
        <div>
            <div className="h-12 pt-2 sticky top-[60px] w-[800px] bg-main">
                <div className="h-12 flex justify-start text-base font-semibold bg-main relative before:absolute before:bottom-0 before:right-3 before:left-0 before:border-b before:border-opacity-10 before:border-solid before:border-white">
                    <Link
                        href={`/search?q=${searchQuery}`}
                        className={`w-32 py-3 flex justify-center text-white ${
                            currentPath === "/search"
                                ? "text-opacity-90"
                                : "text-opacity-50"
                        }`}
                    >
                        <span>トップ</span>
                    </Link>
                    <Link
                        href={`/search/account?q=${searchQuery}`}
                        className={`w-32 py-3 flex justify-center text-white ${
                            currentPath === "/search/account"
                                ? "text-opacity-90"
                                : "text-opacity-50"
                        }`}
                    >
                        <span>アカウント</span>
                    </Link>
                    <Link
                        href={`/search/video?q=${searchQuery}`}
                        className={`w-32 py-3 flex justify-center text-white ${
                            currentPath === "/search/video"
                                ? "text-opacity-90"
                                : "text-opacity-50"
                        }`}
                    >
                        <span>動画</span>
                    </Link>
                    <div className="absolute h-[2px] bottom-0 bg-white bg-opacity-90"></div>
                </div>
            </div>
            {children}
        </div>
    );
}
