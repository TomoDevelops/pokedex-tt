import ALL_POKEMON from "@/public/data/data.json";

export default async function getPokemonData(url_name: string) {
    const pokemonIndex = ALL_POKEMON.findIndex(
        (pokemon) => pokemon["url_name"] === url_name
    );
    return ALL_POKEMON[pokemonIndex];
}
