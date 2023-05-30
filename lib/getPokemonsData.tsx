import ALL_POKEMON from "@/public/data/data.json";
import getPokemonData from "./getPokemonData";

const isHiragana = (query: string) => {
    const hiraganaRegex = /^[\u3040-\u3096ー]+$/;
    return hiraganaRegex.test(query);
};

const convertHiraganaToKatakana = (query: string) => {
    return query.replace(/[\u3041-\u3096]/g, (match) => {
        const charCode = match.charCodeAt(0) + 0x60;
        return String.fromCharCode(charCode);
    });
};

export default async function getPokemonsData(query: string) {
    if (isHiragana(query)) {
        query = convertHiraganaToKatakana(query);
    }
    const pokemonNames: Array<Pokemon> = ALL_POKEMON.filter(
        (pokemon) =>
            pokemon.name.includes(query) ||
            pokemon.eng_name.toLowerCase().includes(query.toLowerCase())
    );
    const pokemonList = await Promise.all(
        pokemonNames.map(
            async (pokemon) => await getPokemonData(pokemon.url_name)
        )
    );
    return pokemonList;
}
