"use client";

import { useSearchParams } from "next/navigation";
import VideoContainer from "@/app/components/VideoContainer";

const SearchVideo = () => {
    const searchQuery = useSearchParams().get("q") || "";

    return (
        <div className={`min-w-[420px] mx-auto`}>
            <div className={`w-[800px] pt-4 pr-6 pb-16 pl-4`}>
                <div className="flex justify-between">
                    <h2 className="pb-2 font-bold">動画</h2>
                </div>
                <VideoContainer pokemonName={searchQuery} />
            </div>
        </div>
    );
};
export default SearchVideo;
