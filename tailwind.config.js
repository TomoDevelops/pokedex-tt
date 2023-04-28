/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundColor: {
                main: "rgb(var(--background-rgb))",
            },
            boxShadow: {
                header: "0px 1px 1px rgb(255 255 255 / 12%)",
            },
            colors: {
                accentColor: "rgb(var(--accentColor))",
                grayTransparent: "rgba(255,255,255,0.12)",
            },
            fontFamily: {
                montserrat: ["var(--font-montserrat)"],
                source: ["var(--font-source)"],
            },
        },
    },
    plugins: [],
};
