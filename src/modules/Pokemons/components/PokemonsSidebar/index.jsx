import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import {
  getAllPokemons,
  setSelectedPokemon
} from '../../reducers/pokemons-slice'

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

export const PokemonsSidebar = () => {
  const pokemons = useSelector(({ pokemons }) => pokemons.data)
  const [pokemonsNumber, setPokemonsNumber] = useState(10)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllPokemons(pokemonsNumber))
  }, [dispatch, pokemonsNumber])
  return (
    <SidebarWrapper>
      <select onChange={({ target: { value } }) => setPokemonsNumber(value)}>
        <option value={10} selected>
          10
        </option>
        <option value={20}>20</option>
        <option value={30}>30</option>
        <option value={150}>150</option>
      </select>
      <ul>
        {pokemons.map((pokemon) => (
          <PokemonItem
            key={pokemon.name}
            onClick={() => {
              dispatch(setSelectedPokemon(pokemon))
            }}
          >
            {pokemon.name}
          </PokemonItem>
        ))}
      </ul>
    </SidebarWrapper>
  )
}
