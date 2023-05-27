"use client";

import React, { useState } from "react";

import ALL_POKEMON from "@/public/data/data.json";
import SuggestedAccCard from "@/app/components/SuggestedAccCard";

const pokemonSortedByAtk = [...ALL_POKEMON].sort(
    (a, b) => b.stats["こうげき"] - a.stats["こうげき"]
);

function SuggestedAccContainer() {
    const [numToShow, setNumToShow] = useState(5);

    const handleShowMore = () => {
        setNumToShow((prevNumToShow) => prevNumToShow + 20);
    };

    const handleShowLess = () => {
        setNumToShow((prevNumToShow) => prevNumToShow - 20);
    };
    return (
        <div
            className={`hidden md:block py-2 px-0 text-white text-opacity-90 font-semibold text-sm relative before:content-[''] before:absolute before:top-0 before:left-2 before:right-2 before:h-px before:bg-grayTransparent`}
        >
            <p className={`hidden lg:block py-0 px-2 mb-2 text-sm`}>
                Top Attack
            </p>
            {pokemonSortedByAtk.slice(0, numToShow).map((pokemon) => (
                <SuggestedAccCard
                    key={pokemon.id}
                    name={pokemon.name}
                    eng_name={pokemon.eng_name}
                    url_name={pokemon.url_name}
                    image={pokemon.image}
                />
            ))}
            {numToShow < 25 ? (
                <button
                    className={`hidden lg:block bg-transparent outline-none border-none text-mainRed cursor-pointer py-0 px-2 mt-2`}
                    onClick={handleShowMore}
                >
                    Show More
                </button>
            ) : (
                <button
                    className={`hidden lg:block bg-transparent outline-none border-none text-mainRed cursor-pointer py-0 px-2 mt-2`}
                    onClick={handleShowLess}
                >
                    Show Less
                </button>
            )}
        </div>
    );
}

export default SuggestedAccContainer;
