"use client";

import getPokemonsData from "@/lib/getPokemonsData";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import VideoContainer from "../components/VideoContainer";

const Search = () => {
    const searchQuery = useSearchParams().get("q") || "";
    const [searchResult, setSearchResult] = useState<Array<Pokemon>>([]);
    const fetchData = async () => {
        const pokemonsData = await getPokemonsData(searchQuery);
        setSearchResult(pokemonsData);
    };

    useEffect(() => {
        fetchData();
    }, [searchQuery]);

    return (
        <div className={`min-w-[420px] mx-auto`}>
            {searchResult.length > 0 && (
                <div className={`w-[800px] pt-4 pr-6 pb-8 pl-4`}>
                    <div className="flex justify-between">
                        <h2 className="pb-2 font-bold">ポケモン</h2>
                        <Link
                            href={`/search/account?q=${searchQuery}`}
                            className="text-sm"
                        >
                            もっと見る
                        </Link>
                    </div>
                    <ul className="flex flex-col gap-6">
                        {searchResult.splice(0, 3).map((pokemon) => (
                            <Link
                                className={`flex`}
                                href={`/${pokemon.url_name}`}
                                key={pokemon.id}
                            >
                                <div
                                    className={`m-4 rounded-full bg-grayTransparent p-2`}
                                >
                                    <Image
                                        src={pokemon.image.front_default}
                                        height={60}
                                        width={60}
                                        alt="Official image of Pokemon"
                                    />
                                </div>
                                <div
                                    className={`flex flex-col justify-center gap-1`}
                                >
                                    <p className={`text-base font-bold`}>
                                        {pokemon.name}
                                    </p>
                                    <ul className={`flex gap-3`}>
                                        <li className="text-sm">
                                            HP: {pokemon.stats["HP"]}
                                        </li>
                                        <li className="text-sm">
                                            攻撃: {pokemon.stats["こうげき"]}
                                        </li>
                                        <li className="text-sm">
                                            防御: {pokemon.stats["ぼうぎょ"]}
                                        </li>
                                        <li className="text-sm">
                                            特攻: {pokemon.stats["とくこう"]}
                                        </li>
                                        <li className="text-sm">
                                            特防: {pokemon.stats["とくぼう"]}
                                        </li>
                                        <li className="text-sm">
                                            素早: {pokemon.stats["すばやさ"]}
                                        </li>
                                    </ul>
                                    <p className={`text-sm`}>
                                        {pokemon.description}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </ul>
                </div>
            )}
            <div className={`w-[800px] pt-4 pr-6 pb-16 pl-4`}>
                <div className="flex justify-between">
                    <h2 className="pb-2 font-bold">動画</h2>
                </div>
                <VideoContainer pokemonName={searchQuery} />
            </div>
        </div>
    );
};

export default Search;
