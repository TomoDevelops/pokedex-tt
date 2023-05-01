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
        <div className="flex justify-between w-full md:w-auto md:block md:py-2">
            <Link
                className={`flex items-center justify-center lg:justify-start gap-2 p-2 font-bold ${
                    pathname === "/"
                        ? "text-accentColor"
                        : "text-lightestColor text-opacity-90"
                }`}
                href="/"
            >
                <BiHome
                    size="24"
                    color={`${
                        pathname === "/"
                            ? "rgb(var(--accentColor))"
                            : "rgb(var(--lightestColor))"
                    }`}
                />
                <p className="hidden lg:block">Pokédex</p>
            </Link>
            <Link
                className={`flex items-center justify-center lg:justify-start gap-2 p-2 font-bold ${
                    pathname === "/following"
                        ? "text-accentColor"
                        : "text-lightestColor text-opacity-90"
                }`}
                href="/following"
            >
                <HiOutlineUsers
                    size="24"
                    color={`${
                        pathname === "/following"
                            ? "rgb(var(--accentColor))"
                            : "rgb(var(--lightestColor))"
                    }`}
                />
                <p className="hidden lg:block">Following</p>
            </Link>
            <Link
                className={`flex items-center justify-center lg:justify-start gap-2 p-2 font-bold ${
                    pathname === "/live"
                        ? "text-accentColor"
                        : "text-lightestColor text-opacity-90"
                }`}
                href="/live"
            >
                <BsCameraVideo
                    size="24"
                    color={`${
                        pathname === "/live"
                            ? "rgb(var(--accentColor))"
                            : "rgb(var(--lightestColor))"
                    }`}
                />
                <p className="hidden lg:block">LIVE</p>
            </Link>
        </div>
    );
}
