import { computed, onMounted, ref } from 'vue';
import { GameStatus, type Pokemon, type PokemonListResponse } from '../interfaces';
import { pokemonApi } from '../api/pokemonApi';
import confetti from 'canvas-confetti';

export const usePokemonGame = () => {
  const gameStatus = ref<GameStatus>(GameStatus.Playing);
  const pokemon = ref<Pokemon[]>([]);
  const pokemonOptions = ref<Pokemon[]>([]);

  const randomPokemon = computed(() => {
    const randomIndex = Math.floor(Math.random() * pokemonOptions.value.length);
    return pokemonOptions.value[randomIndex] || { id: randomIndex, name: 'indefinido :/' };
  });

  const isLoading = computed(() => pokemon.value.length === 0);

  const getPokemon = async (): Promise<Pokemon[]> => {
    const response = await pokemonApi.get<PokemonListResponse>('/?limit=1000');
    const pokemonArray: Pokemon[] = response.data.results.map((pokemon) => {
      const urlParts = pokemon.url.split('/');
      const id = urlParts[urlParts.length - 2] ?? 0;
      return {
        name: pokemon.name,
        id: +id,
      };
    });

    return pokemonArray.sort(() => Math.random() - 0.5);
  };

  const getNextRound = async (howMany: number = 4) => {
    gameStatus.value = GameStatus.Playing;
    pokemonOptions.value = pokemon.value.slice(0, howMany);
    pokemon.value = pokemon.value.slice(howMany);
    if (pokemon.value.length < 4) {
      pokemon.value = await getPokemon();
    }
  };

  const checkAnswer = (id: number) => {
    const hasWon = randomPokemon.value?.id === id;

    if (hasWon) {
      gameStatus.value = GameStatus.Won;

      confetti({
        particleCount: 300,
        spread: 150,
        origin: { y: 0.6 },
      });
      return;
    }
    gameStatus.value = GameStatus.Lost;
  };

  const reJugar = () => {
    gameStatus.value = GameStatus.Playing;
    getNextRound();
  };

  onMounted(async () => {
    //wait new Promise((r) => setTimeout(r, 1000));
    pokemon.value = await getPokemon();
    getNextRound();
    console.log(pokemonOptions.value);
  });

  return {
    //Properties
    gameStatus,
    isLoading,
    pokemonOptions,
    randomPokemon,

    //methods
    getNextRound,
    checkAnswer,
    reJugar,
  };
};
