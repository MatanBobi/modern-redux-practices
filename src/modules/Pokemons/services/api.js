import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (build) => ({
    getPokemonByName: build.query({
      query: (name) => `pokemon/${name}`
    }),
    getAllPokemons: build.query({
      query: (limit = 151) => `pokemon?limit=${limit}`,
      transformResponse: (response) => response.results,
    })
  }),
  reducerPath: 'pokemonsApi'
})

export const { useGetPokemonByNameQuery, useGetAllPokemonsQuery } = api
