import VideoCard from "./VideoCard";

type Props = {
    promise: Promise<PokemonVideo>;
};

async function VideoContainer({ promise }: Props) {
    try {
        const videos = await promise;

        if (!videos || !videos.items) {
            return (
                <div>
                    <h1 className="text-4xl">
                        Could not load videos at this time
                    </h1>
                </div>
            );
        }

        return (
            <div
                className={`grid grid-cols-[repeat(auto-fill,minmax(184px,_1fr))] gap-y-6 gap-x-4 min-w-[520px]`}
            >
                {videos.items.map((video) => (
                    <VideoCard video={video} key={video.id.videoId} />
                ))}
            </div>
        );
    } catch (err) {
        console.error(err);
        return (
            <div>
                <h1 className="text-4xl">Could not load videos at this time</h1>
            </div>
        );
    }
}

export default VideoContainer;
