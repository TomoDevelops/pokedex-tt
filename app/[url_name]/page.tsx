import Image from "next/image";
import type { Metadata } from "next";
import Button from "../components/Button";
import { Suspense } from "react";

import getPokemonData from "@/lib/getPokemonData";
import getPokemonVideos from "@/lib/getPokemonVideos";
import VideoContainer from "../components/VideoContainer";

type ParamTypes = {
    params: {
        url_name: string;
    };
};

export async function generateMetadata({
    params: { url_name },
}: ParamTypes): Promise<Metadata> {
    const pokemonData: Promise<Pokemon> = getPokemonData(url_name);
    const pokemon: Pokemon = await pokemonData;

    return {
        title: pokemon.name,
        description: `${pokemon.name}　の　詳細ページ`,
        icons: {
            icon: pokemon.image.front_default,
        },
    };
}

export default async function DetailPage({ params: { url_name } }: ParamTypes) {
    const pokemonData: Promise<Pokemon> = getPokemonData(url_name);
    const pokemon = await pokemonData;
    const pokemonVideosData: PokemonVideo = await getPokemonVideos(
        pokemon.eng_name
    );

    return (
        <div
            className={`flex min-h-screen max-w-[1776px] flex-auto flex-col gap-5 overflow-x-hidden py-9 px-6`}
        >
            <div className={`flex max-w-[624px] flex-col`}>
                <div className={`flex items-start justify-start gap-5`}>
                    <Image
                        src={pokemon.image.front_default}
                        alt="pokemon official image"
                        className={`rounded-full bg-white p-2`}
                        width={120}
                        height={120}
                    />
                    <div className={`flex flex-col gap-3`}>
                        <div>
                            <h1 className={`text-3xl`}>{pokemon.name}</h1>
                            <h2 className={`text-lg`}>{pokemon.eng_name}</h2>
                        </div>
                        <Button
                            className={`tracking-wide`}
                            height={36}
                            width={208}
                            bgColor={"red"}
                        >
                            Follow
                        </Button>
                    </div>
                </div>
                <div className={`mt-5 flex gap-4`}>
                    <p>HP: {pokemon.stats["HP"]}</p>
                    <p>攻撃: {pokemon.stats["こうげき"]}</p>
                    <p>防御: {pokemon.stats["ぼうぎょ"]}</p>
                    <p>特攻: {pokemon.stats["とくこう"]}</p>
                    <p>特防: {pokemon.stats["とくぼう"]}</p>
                    <p>素早: {pokemon.stats["すばやさ"]}</p>
                </div>
                <p className={`mt-3 whitespace-pre-line`}>
                    {pokemon.description}
                </p>
            </div>
            <div className={`w-full`}>
                <Suspense fallback={<h2>Loading ....</h2>}>
                    {/* @ts-expect-error server component*/}
                    <VideoContainer videos={pokemonVideosData} />
                </Suspense>
            </div>
        </div>
    );
}
