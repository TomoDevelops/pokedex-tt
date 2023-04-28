"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { BiHome } from "react-icons/bi";
import { BsCameraVideo } from "react-icons/bs";
import { HiOutlineUsers } from "react-icons/hi";

export default function SidebarNavs() {
    const pathname = usePathname();
    return (
        <div>
            <Link
                className={`flex items-center justify-start gap-2 p-2 font-bold ${
                    pathname === "/"
                        ? "text-accentColor"
                        : "text-white text-opacity-90"
                }`}
                href="/"
            >
                <BiHome
                    size="32"
                    color={`${
                        pathname === "/"
                            ? "rgb(var(--accentColor))"
                            : "#ffffffe6"
                    }`}
                />
                Pokédex
            </Link>
            <Link
                className={`flex items-center justify-start gap-2 p-2 font-bold ${
                    pathname === "/following"
                        ? "text-accentColor"
                        : "text-white text-opacity-90"
                }`}
                href="/following"
            >
                <HiOutlineUsers
                    size="32"
                    color={`${
                        pathname === "/following"
                            ? "rgb(var(--accentColor))"
                            : "#ffffffe6"
                    }`}
                />
                Following
            </Link>
            <Link
                className={`flex items-center justify-start gap-2 p-2 font-bold ${
                    pathname === "/live"
                        ? "text-accentColor"
                        : "text-white text-opacity-90"
                }`}
                href="/live"
            >
                <BsCameraVideo
                    size="32"
                    color={`${
                        pathname === "/live"
                            ? "rgb(var(--accentColor))"
                            : "#ffffffe6"
                    }`}
                />
                LIVE
            </Link>
        </div>
    );
}
