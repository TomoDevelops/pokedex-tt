"use client";

import getPokemonsData from "@/lib/getPokemonsData";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const Search = () => {
    const [searchQuery, setSearchQuery] = useState(
        useSearchParams().get("q") || ""
    );
    const encodedSearchQuery = encodeURI(searchQuery || "");
    console.log(encodedSearchQuery);
    const [searchResult, setSearchResult] = useState<Array<Pokemon>>([]);

    const fetchData = async () => {
        const pokemonsData = await getPokemonsData(encodedSearchQuery);
        setSearchResult(pokemonsData);
    };

    useEffect(() => {
        fetchData();
    }, [searchQuery]);

    return (
        <div>
            <div>Search: {useSearchParams().get("q")}</div>
            <div>Search: {searchQuery}</div>
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
