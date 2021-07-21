import { ACTION_TYPES } from '../actions/pokemons'

const initialState = {
  isLoading: false,
  data: [],
}

export default function pokemonsReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.GET_ALL_POKEMONS_REQUEST: {
      return { ...state, isLoading: true }
    }
    case ACTION_TYPES.GET_ALL_POKEMONS_SUCCESS: {
      return { ...state, isLoading: false, data: [...action.payload] }
    }
    case ACTION_TYPES.SET_SELECTED_POKEMON: {
      return { ...state, selectedPokemonId: action.payload }
    }
    case ACTION_TYPES.SET_SELECTED_POKEMON_DATA_SUCCESS: {
      return { ...state, selectedPokemonData: action.payload }
    }
    default:
      return state
  }
}
