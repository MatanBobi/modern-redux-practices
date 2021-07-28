import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// First, create the thunk
export const getAllPokemons = createAsyncThunk(
  'pokemons/getAll',
  async (limit) => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}`
    )
    const data = await response.json()
    return data.results
  }
)

export const getPokemonDetails = createAsyncThunk(
  'pokemons/getPokemonDetails',
  async (url) => {
    const response = await fetch(url)
    const data = await response.json()
    return data
  }
)

const initialState = { selectedPokemonId: '', data: [], isLoading: false }

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    setSelectedPokemon(state, action) {
      state.selectedPokemonId = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getAllPokemons.fulfilled, (state, action) => {
      state.data = action.payload
    })
    builder.addCase(getPokemonDetails.fulfilled, (state, action) => {
      state.selectedPokemonData = action.payload
    })
  }
})

export const { setSelectedPokemon } = pokemonsSlice.actions
export default pokemonsSlice.reducer
