"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { useState } from "react";
import { BsSearch } from "react-icons/bs";

import getPokemonsData from "@/lib/getPokemonsData";

export const SearchInput = () => {
    const router = useRouter();
    const [query, setQuery] = useState<string>("");
    const [inputFocus, setInputFocus] = useState<boolean>(false);
    const [retrievedPokemon, setRetrievedPokemon] = useState<Array<Pokemon>>(
        []
    );

    const onUserInputChange = async (query: string) => {
        setQuery(query);
        const pokemonsData = await getPokemonsData(query);
        setRetrievedPokemon(pokemonsData);
    };

    // TODO: Fix suggestions going away right before clicking the actual suggestion caused by onBlur. Will stay without onBlur.
    return (
        <div className="min-w-[200px] relative">
            <div className="flex items-center overflow-hidden rounded-[92px] bg-grayTransparent px-4 py-2 w-full">
                <input
                    className="w-96 px-1 border-none bg-transparent text-sm leading-[22px] caret-accentColor outline-none"
                    type="text"
                    name="query"
                    id="query"
                    placeholder="Search accounts and videos"
                    value={query}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            router.push(`/search?q=${query}`);
                            setInputFocus(false);
                        }
                    }}
                    onFocus={() => setInputFocus(true)}
                    onBlur={() =>
                        setTimeout(() => {
                            setInputFocus(false);
                        }, 150)
                    }
                    onChange={(e) => onUserInputChange(e.target.value)}
                />
                <span className="-mx-1 h-[28px] w-px bg-grayTransparent"></span>
                <Link href={`/search?q=${query}`}>
                    <button
                        type="submit"
                        className="-my-3 -mr-4 ml-0 cursor-pointer border-none bg-transparent py-4 pr-4 pl-3 outline-none hover:bg-neutral-700"
                    >
                        <BsSearch size="20" color="rgba(255, 255, 255, 0.34)" />
                    </button>
                </Link>
            </div>
            {retrievedPokemon.length > 0 && inputFocus && (
                <ul className="rounded-lg absolute top-14 w-full flex flex-col items-center bg-white text-black px-2 py-2 z-50">
                    {retrievedPokemon.slice(0, 10).map((pokemon) => (
                        <Link
                            href={`/${pokemon.url_name}`}
                            className="py-2 w-full"
                            key={pokemon.id}
                            onClick={() => setInputFocus(false)}
                        >
                            {pokemon.name}
                        </Link>
                    ))}
                </ul>
            )}
        </div>
    );
};
