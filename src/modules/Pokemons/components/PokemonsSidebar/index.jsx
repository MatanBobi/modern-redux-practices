import { useEffect, useState } from 'react'
import styled from 'styled-components'

const PokemonItem = styled.li`
  margin: 4px 0;
  cursor: pointer;
`

const SidebarWrapper = styled.div`
  background-color: rgb(202, 46, 54);
  max-width: 200px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ul,
  ol {
    all: unset;
    display: revert;
  }
  ul {
    max-height: 400px;
    overflow: auto;
  }
  li {
    margin: 4px 0;
    cursor: pointer;
  }
`

export const PokemonsSidebar = ({
  pokemons,
  setSelectedPokemon,
  asyncGetAllPokemons
}) => {
  const [pokemonsNumber, setPokemonsNumber] = useState(10)
  useEffect(() => {
    asyncGetAllPokemons(pokemonsNumber)
  }, [asyncGetAllPokemons, pokemonsNumber])

  return (
    <SidebarWrapper>
      <select
        onChange={({ target: { value } }) => setPokemonsNumber(value)}
        defaultValue={10}
      >
        <option value={10}>10</option>
        <option value={20}>20</option>
        <option value={30}>30</option>
        <option value={150}>150</option>
      </select>
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
    </SidebarWrapper>
  )
}
