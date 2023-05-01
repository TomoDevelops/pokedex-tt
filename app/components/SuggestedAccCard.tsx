import React from "react";
import Link from "next/link";
import Image from "next/image";

type SuggestedAccCardPropTypes = {
    name: string;
    eng_name: string;
    image: {
        front_default: string;
        front_shiny?: string | null;
    };
};

function SuggestedAccCard({
    name,
    eng_name,
    image,
}: SuggestedAccCardPropTypes) {
    return (
        <Link
            href={`/${eng_name}`}
            className={`flex items-center justify-center lg:justify-start gap-2 p-2`}
        >
            <Image
                className={`rounded-full bg-grayTransparent p-1`}
                src={image.front_default}
                width={40}
                height={40}
                alt="Official image of Pokemon"
            />
            <div className={`hidden lg:block font-semibold`}>{name}</div>
        </Link>
    );
}

export default SuggestedAccCard;
