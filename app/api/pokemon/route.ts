import { NextResponse } from "next/server";

export async function GET(request: Request) {
    let allPokemonData: any = [];
    const { searchParams } = new URL(request.url);
    const dataNum = searchParams.get("dataNum") ?? 5000;
    const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${dataNum}`
    );
    const data = await res.json();

    for (const pokemon of data.results) {
        const res1 = await fetch(pokemon["url"]);
        const res1Data = await res1.json();
        const res2 = await fetch(
            pokemon["url"].replace("pokemon", "pokemon-species")
        );
        const res2Data = await res2.json();

        // Pokemon ID
        const id = pokemon["url"].split("/")[6];

        // Pokemon JP Name
        const jpName = res2Data["names"][0]["name"];

        // Pokemon Eng Name
        const engName = res2Data["names"].filter((name: any) => {
            if (name["language"]["name"] === "en") {
                return name["name"];
            }
        })[0]["name"];

        // Pokemon URL name
        const invalidChars = /[<>#%{}|\\^~\[\]"'’`\/?:;=&,.]/g;
        const stripped = engName.replace(invalidChars, "");
        const urlName = stripped.replace(" ", "-");

        // Pokemon Description
        const desc = res2Data["flavor_text_entries"].filter((desc: any) => {
            if (desc["language"]["name"] === "ja-Hrkt") {
                return desc["flavor_text"];
            }
        })[0]["flavor_text"];

        // Pokemon Images
        const image = res1Data["sprites"]["other"]["official-artwork"];

        // Pokemon JP Abilities
        let abilities: any = [];
        for (const ability of res1Data["abilities"]) {
            const res = await fetch(ability["ability"]["url"]);
            const data = await res.json();
            const abilityName = data["names"][0]["name"];
            abilities.push(abilityName);
        }

        // Pokemon JP Stats
        let stats: any = {};
        for (const stat of res1Data["stats"]) {
            const res = await fetch(stat["stat"]["url"]);
            const data = await res.json();
            const statName = data["names"][0]["name"];
            const statNum = stat["base_stat"];
            stats[statName] = statNum;
        }

        // Pokemong JP Egg Groups
        let eggGroups: any = [];
        for (const eggGroup of res2Data["egg_groups"]) {
            const res = await fetch(eggGroup["url"]);
            const data = await res.json();
            const eggGroupName = data["names"][0]["name"];
            eggGroups.push(eggGroupName);
        }

        // Pokemon JP Types
        let types: any = [];
        for (const type of res1Data["types"]) {
            const res = await fetch(type["type"]["url"]);
            const data = await res.json();
            const typeName = data["names"][0]["name"];
            types.push(typeName);
        }

        const newPokemon = {
            id: id,
            name: jpName,
            eng_name: engName,
            url_name: urlName,
            description: desc,
            image: image,
            types: types,
            abilities: abilities,
            egg_groups: eggGroups,
            stats: stats,
        };
        allPokemonData.push(newPokemon);
    }
    return NextResponse.json(allPokemonData);
}
