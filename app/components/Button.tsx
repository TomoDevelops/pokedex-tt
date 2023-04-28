import React from "react";

type ButtonPropTypes = {
    children: React.ReactNode;
    bgColor: string;
    height: number;
    width: number;
    className?: string;
};

interface ButtonConfigTypes {
    [key: string]: string[];
}

const buttonConfig: ButtonConfigTypes = {
    transparent: [
        "bg-grayTransparent",
        "rounded-sm",
        "border-[1px]",
        "border-gray-900",
        "border-opacity-10",
        "text-white",
    ],
    red: ["bg-accentColor", "rounded-[4px]", "border-none", "text-white"],
    outline: [
        "bg-grayTransparent",
        "rounded-sm",
        "border-[1px]",
        "border-accentColor",
        "text-accentColor",
        "font-semibold",
        "text-accentColor",
    ],
};

function Button({
    children,
    bgColor,
    height,
    width,
    className,
}: ButtonPropTypes) {
    return (
        <button
            className={`flex cursor-pointer items-center justify-center gap-2 font-source font-bold text-opacity-90 ${className} ${buttonConfig[
                bgColor
            ].join(" ")}`}
            style={{ minWidth: width, minHeight: height }}
        >
            {children}
        </button>
    );
}

export default Button;
