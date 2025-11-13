
const characters = ['Goku', 'Vegeta', 'Trunks', 'Goten'];

const [g, v, t, g2, g3 = 'Yamoshi'] = characters;

//console.log({g, v, t, g2, g3});

const returArray = () => {
    return [123, 'ABC'] as const;
}

const [numbers, letters] = returArray();

console.log(numbers * 2, letters.toLowerCase());