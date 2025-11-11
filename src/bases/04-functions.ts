//function greetPerson(name: String){
//    return `Hola ${name}`
//}

//const greetPerson = (name: String) => {
//    return `Hola ${name}`
//}

const greetPerson = (name: String) => `Hola ${name}`;

//console.log(greetPerson('Fernando'));

const getUser = (uid:String) => ({
        uid: uid,
        username: 'Tony001'
    });

//console.log(getUser('XYZ-456'));

const heroes = [
    {
        id: 1,
        name: 'Batman',
    },
    {
        id: 2,
        name: 'Superman',
        power: 'Super fuerza',
    },
];

const hero = heroes.find((h) => h.id===2);
console.log(hero?.power?.toUpperCase());