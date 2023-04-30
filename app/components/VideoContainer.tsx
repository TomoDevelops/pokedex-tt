import VideoCard from "./VideoCard";

type Props = {
    promise: Promise<PokemonVideo>;
};

async function VideoContainer({ promise }: Props) {
    const videos = await promise;

    return (
        <div
            className={`grid grid-cols-[repeat(auto-fill,minmax(184px,_1fr))] gap-y-6 gap-x-4 min-w-[520px]`}
        >
            {videos.items.map((video) => (
                <VideoCard video={video} key={video.id.videoId} />
            ))}
        </div>
    );
}

export default VideoContainer;
