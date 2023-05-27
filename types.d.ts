type Pokemon = {
    id: string;
    name: string;
    eng_name: string;
    url_name: string;
    description: string;
    image: {
        front_default: string;
        front_shiny?: string | null;
    };
    types: string[];
    abilities: string[];
    egg_groups: string[];
    stats: {
        HP: number;
        こうげき: number;
        ぼうぎょ: number;
        とくこう: number;
        とくぼう: number;
        すばやさ: number;
    };
};

type PokemonVideo = {
    kind: string;
    etag: string;
    nextPageToken: string;
    regionCode: string;
    pageInfo: {
        totalResults: number;
        resultsPerPage: number;
    };
    items: [
        {
            kind: string;
            etag: string;
            id: {
                kind: string;
                videoId: string;
            };
            snippet: {
                publishedAt: string;
                channelId: string;
                title: string;
                description: string;
                thumbnails: {
                    default: {
                        url: string;
                        width: number;
                        height: number;
                    };
                    medium: {
                        url: string;
                        width: number;
                        height: number;
                    };
                    high: {
                        url: string;
                        width: number;
                        height: number;
                    };
                };
                channelTitle: string;
                liveBroadcastContent: string;
                publishTime: string;
            };
        }
    ];
};
