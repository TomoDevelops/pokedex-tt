import ALL_POKEMON from "@/public/data/data.json";
import getPokemonData from "./getPokemonData";

export default async function getPokemonsData(query: string) {
    const pokemonNames: Array<Pokemon> = ALL_POKEMON.filter(
        (pokemon) =>
            pokemon.name.toLowerCase().includes(query.toLowerCase()) ||
            pokemon.eng_name.toLowerCase().includes(query.toLowerCase())
    );
    const pokemonList = await Promise.all(
        pokemonNames.map(
            async (pokemon) => await getPokemonData(pokemon.url_name)
        )
    );
    return pokemonList;
}
