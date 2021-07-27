import { createSlice } from '@reduxjs/toolkit'

const initialState = { selectedPokemonId: '', data: [], isLoading: false }

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    setSelectedPokemon(state, action) {
      state.selectedPokemonId = action.payload
    }
  }
})

export const { setSelectedPokemon } = pokemonsSlice.actions
export default pokemonsSlice.reducer
