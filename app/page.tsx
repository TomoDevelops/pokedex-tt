"use client";

import SingleCard from "./components/SingleCard";

import ALL_POKEMON from "@/public/data/data.json";
import { useEffect, useRef, useState } from "react";

export default function ForYou() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [containerOffset, setContainerOffset] = useState<
        number | undefined
    >();
    const [numberOfCardsLoaded, setNumberOfCardsLoaded] = useState<number>(20);
    const loadedPokemon = ALL_POKEMON.slice(0, numberOfCardsLoaded);

    useEffect(() => {
        const handleScroll = () => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                if (rect.top <= containerRef.current.clientHeight * -0.9) {
                    setNumberOfCardsLoaded((prevState) => prevState + 20);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [containerOffset]);

    useEffect(() => {
        if (containerRef.current) {
            setContainerOffset(
                containerRef.current.getBoundingClientRect().bottom
            );
        }
    }, [containerRef.current]);

    return (
        <div
            className=" h-auto w-full md:w-[592px] md:max-w-[592px] lg:max-w-none lg:w-[692px]"
            ref={containerRef}
        >
            {loadedPokemon.map((pokemon, index) => (
                <SingleCard
                    pokemon={pokemon}
                    key={`${pokemon.id}+${Math.random() * 20}`}
                />
            ))}
        </div>
    );
}
