export const ACTION_TYPES = {
    GET_ALL_POKEMONS_REQUEST: 'pokemons/get/request',
    GET_ALL_POKEMONS_SUCCESS: 'pokemons/get/success',
    GET_ALL_POKEMONS_ERROR: 'pokemons/get/error',
    SET_SELECTED_POKEMON: 'pokemon/selected/set',
    SET_SELECTED_POKEMON_DATA_REQUEST: 'pokemon/selected/data/request',
    SET_SELECTED_POKEMON_DATA_SUCCESS: 'pokemon/selected/data/success',
    SET_SELECTED_POKEMON_DATA_ERROR: 'pokemon/selected/data/error'
  }
  
  const getAllPokemonsRequest = () => ({
    type: ACTION_TYPES.GET_ALL_POKEMONS_REQUEST
  })
  
  const getAllPokemonsSuccess = (payload) => ({
    type: ACTION_TYPES.GET_ALL_POKEMONS_SUCCESS,
    payload
  })
  
  const getPokemonDetailsRequest = (payload) => ({
    type: ACTION_TYPES.SET_SELECTED_POKEMON_DATA_REQUEST,
    payload
  })
  
  const getPokemonDetailsSuccess = (payload) => ({
    type: ACTION_TYPES.SET_SELECTED_POKEMON_DATA_SUCCESS,
    payload
  })
  
  export const asyncGetAllPokemons = (limit) => {
    return function (dispatch) {
      dispatch(getAllPokemonsRequest())
      fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)
        .then((response) => response.json())
        .then((data) => {
          dispatch(getAllPokemonsSuccess(data.results))
        })
    }
  }
  
  export const asyncGetPokemonDetails = (url) => {
    return function (dispatch) {
      dispatch(getPokemonDetailsRequest())
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          dispatch(getPokemonDetailsSuccess(data))
        })
    }
  }
  
  export const setSelectedPokemon = (selectedPokemonId) => ({
    type: ACTION_TYPES.SET_SELECTED_POKEMON,
    payload: selectedPokemonId
  })
  