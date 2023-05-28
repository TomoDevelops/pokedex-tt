"use client";

import getPokemonsData from "@/lib/getPokemonsData";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";

export const SearchInput = () => {
    const [userInput, setUserInput] = useState("");
    const [retrievedPokemon, setRetrievedPokemon] = useState<Array<Pokemon>>(
        []
    );

    const onUserInputChange = async (userInput: string) => {
        setUserInput(userInput);
        const pokemonsData = await getPokemonsData(userInput);
        setRetrievedPokemon(pokemonsData);
        console.log(retrievedPokemon);
    };

    return (
        <div className="min-w-[200px] relative">
            <form className="flex items-center overflow-hidden rounded-[92px] bg-grayTransparent px-4 py-2 w-full">
                <input
                    className="w-96 px-1 border-none bg-transparent text-sm leading-[22px] caret-accentColor outline-none"
                    type="search"
                    name="search"
                    id="search"
                    placeholder="Search accounts and videos"
                    value={userInput}
                    onChange={(e) => onUserInputChange(e.target.value)}
                />
                <span className="-mx-1 h-[28px] w-px bg-grayTransparent"></span>
                <button
                    className="-my-3 -mr-4 ml-0 cursor-pointer border-none bg-transparent py-4 pr-4 pl-3 outline-none hover:bg-neutral-700"
                    type="submit"
                >
                    <BsSearch size="20" color="rgba(255, 255, 255, 0.34)" />
                </button>
            </form>
            {retrievedPokemon.length > 0 && (
                <ul className="rounded-lg absolute top-14 w-full flex flex-col items-center bg-white text-black px-2 py-2 z-50">
                    {retrievedPokemon.slice(0, 10).map((pokemon) => (
                        <li className="py-2">{pokemon.name}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};
