import SingleCard from "./components/SingleCard";

import ALL_POKEMON from "@/public/data/data.json";

export default function ForYou() {
    return (
        <div className="w-[692px]">
            {ALL_POKEMON.map((pokemon) => (
                <SingleCard
                    pokemon={pokemon}
                    key={`${pokemon.id}+${Math.random() * 20}`}
                />
            ))}
        </div>
    );
}
