import Image from "next/image";
import Link from "next/link";

interface TypeColorConfigTypes {
    [key: string]: string;
}

const typeColorConfig: TypeColorConfigTypes = {
    ノーマル: "bg-[#aea886]",
    ほのお: "bg-[#f45c19]",
    みず: "bg-[#4a96d6]",
    くさ: "bg-[#28b25c]",
    でんき: "bg-[#eaa317]",
    こおり: "bg-[#45a9c0]",
    かくとう: "bg-[#9a3d3e]",
    どく: "bg-[#8f5b98]",
    じめん: "bg-[#916d3c]",
    ひこう: "bg-[#7e9ecf]",
    エスパー: "bg-[#d56d8b]",
    むし: "bg-[#989001]",
    いわ: "bg-[#878052]",
    ゴースト: "bg-[#555fa4]",
    ドラゴン: "bg-[#454ba6]",
    あく: "bg-[#7a0049]",
    はがね: "bg-[#9b9b9b]",
    フェアリー: "bg-[#ffbbff]",
};

const SingleCard = ({ pokemon }: { pokemon: Pokemon }) => {
    return (
        <div
            className={`relative flex max-w-[692px] flex-col items-start gap-3 py-5 px-0 after:absolute after:left-0 after:bottom-0 after:h-px after:w-full after:scale-y-50 after:bg-grayTransparent after:content-[""]`}
        >
            <div className={`flex items-start justify-center gap-3`}>
                <Image
                    src="/images/masterball.png"
                    alt="masterball logo"
                    width={50}
                    height={50}
                />
                <div>
                    <h3 className={`text-lg`}>{pokemon.name}</h3>
                    <ul className={`flex items-center justify-center gap-2`}>
                        {pokemon.types.map((type) => (
                            <li
                                className={`flex h-[25px] w-[100px] min-w-[100px] max-w-[100px] items-center justify-center rounded-lg text-sm ${typeColorConfig[type]}`}
                                key={`${pokemon.name}+${type}`}
                            >
                                {type}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <Link
                className={`mr-5 flex h-[600px] max-h-[600px] min-h-[600px] w-[336px] min-w-[336px] max-w-[336px] flex-col items-center justify-center gap-6 rounded-lg bg-darkColor p-6`}
                href={`/${pokemon.eng_name}`}
            >
                <Image
                    src={pokemon.image.front_default}
                    width={250}
                    height={250}
                    alt="Official image of Pokemon"
                    priority={pokemon.id === "1" ? true : false}
                />
                <div>{pokemon.description}</div>
                <ul>
                    {pokemon.abilities.map((ability) => (
                        <li
                            key={`${pokemon.name}+${ability}+${
                                Math.random() * 10
                            }`}
                        >
                            {ability}
                        </li>
                    ))}
                </ul>
            </Link>
        </div>
    );
};
export default SingleCard;
