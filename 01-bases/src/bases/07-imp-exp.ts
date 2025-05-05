import heroes, {type Owner} from "../data/heroes";

//console.log(owners, heroes);

export const getHeroById = (id: number) => {
    return heroes.find(hero => hero.id === id);
}

export const getHeroesByOwner = (owner: Owner) => {
    return heroes.filter(hero => hero.owner === owner);
}

//console.log(getHeroById(3));
//console.log(getHeroesByOwner('Marvel'));