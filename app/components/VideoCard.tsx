import Image from "next/image";
import Link from "next/link";

function VideoCard({ video }: any) {
    return (
        <div>
            <div className={`min-h-72 max-h-72 w-full rounded-[4px]`}>
                <Link
                    href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                    target="_blank"
                    className={`flex justify-center items-center`}
                >
                    <Image
                        src={video.snippet.thumbnails.high.url}
                        width={190}
                        height={252}
                        alt={video.snippet.title}
                    />
                </Link>
                <h1>{video.snippet.title}</h1>
            </div>
        </div>
    );
}

export default VideoCard;
