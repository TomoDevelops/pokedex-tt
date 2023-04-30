import ALL_POKEMON from "@/public/data/data.json";

export default async function getPokemonData(eng_name: string) {
    const pokemonIndex = ALL_POKEMON.findIndex(
        (pokemon) => pokemon["eng_name"] === eng_name
    );
    return ALL_POKEMON[pokemonIndex];
}
