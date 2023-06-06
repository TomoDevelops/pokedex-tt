"use client";

import getPokemonVideos from "@/lib/getPokemonVideos";
import { useEffect, useState } from "react";
import { Skeleton } from "./ui/skeleton";
import VideoCard from "./VideoCard";

type Props = {
    pokemonName: string;
};

export default function VideoContainer({ pokemonName }: Props) {
    const [pokemonVideosData, setPokemonVideosData] = useState<PokemonVideo>();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getPokemonVideos(pokemonName);
                setPokemonVideosData(data);
                setLoading(false);
            } catch (err) {
                console.error(err);
                return (
                    <div>
                        <h1 className="text-4xl">
                            Could not load videos at this time
                        </h1>
                    </div>
                );
            }
        };
        fetchData();
    }, []);

    if (loading) {
        return (
            <div
                className={`grid grid-cols-[repeat(auto-fill,minmax(184px,1fr))] gap-y-6 gap-x-4 min-w-[520px]`}
            >
                {Array.from({ length: 20 }, (_, i) => i + 1).map((id) => (
                    <Skeleton
                        className="bg-grayTransparent w-52 h-72"
                        key={id}
                    />
                ))}
            </div>
        );
    }

    return (
        <div
            className={`grid grid-cols-[repeat(auto-fill,minmax(184px,1fr))] gap-y-6 gap-x-4 min-w-[520px]`}
        >
            {pokemonVideosData?.items.map((video) => (
                <VideoCard video={video} key={video.id.videoId} />
            ))}
        </div>
    );
}
