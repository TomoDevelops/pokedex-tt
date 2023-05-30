"use client";

import getPokemonsData from "@/lib/getPokemonsData";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const Search = () => {
    const pathname = usePathname();
    const [query, setQuery] = useState<string>(
        useSearchParams()?.get("q") || ""
    );
    const [searchResult, setSearchResult] = useState<Array<Pokemon>>([]);

    useEffect(() => {
        const fetchData = async () => {
            const pokemonsData = await getPokemonsData(query);
            setSearchResult(pokemonsData);
            console.log(query);
        };
        fetchData();
    }, [query]);

    return (
        <div>
            {/* <div>Search: {query}</div> */}
            {searchResult.length > 0 && (
                <ul>
                    {searchResult.map((pokemon) => (
                        <li key={pokemon.id}>{pokemon.name}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Search;
