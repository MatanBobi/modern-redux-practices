import { useEffect } from 'react'
import styled from 'styled-components'

const PokemonItem = styled.ol`
  margin: 4px 0;
  cursor: pointer;
`

export const PokemonsSidebar = ({ pokemons, setSelectedPokemon, asyncGetAllPokemons }) => {
  useEffect(() => {
    asyncGetAllPokemons()
  }, [asyncGetAllPokemons])
  
  return (
    <ul>
      {pokemons.map((pokemon) => (
        <PokemonItem
          key={pokemon.name}
          onClick={() => {
            setSelectedPokemon(pokemon)
          }}
        >
          {pokemon.name}
        </PokemonItem>
      ))}
    </ul>
  )
}
