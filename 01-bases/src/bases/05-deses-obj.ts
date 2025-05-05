interface Hero{
    name: string;
    age: number;
    codeName: string;
    power?: string;
}

interface CreateHeroArgs{
    name: string;
    age: number;
    codeName: string;
    power?: string;
}


export const person: Hero = {
    name: 'Tony',
    age: 45,
    codeName: 'Ironman',
    //power: 'money',
}

//const {age, name, power = 'No tiene poder'} = person;//Aplica para objetos y arreglos
//console.log({ age, name, power});

const createHero = (args:CreateHeroArgs) => ({
    id:123123,
    name: args.name,
    age: args.age,
    codeName: args.codeName ?? 'No tiene codeName',
    power: args.power ?? 'No tiene poder',
});

const createHero2 = ({name, age, codeName, power}:CreateHeroArgs) => ({
    id:123123,
    name: name,
    age: age,
    codeName: codeName ?? 'No tiene codeName',
    power: power ?? 'No tiene poder',
});

console.log(createHero(person));
console.log(createHero2(person));