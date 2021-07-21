import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { asyncGetAllPokemons, setSelectedPokemon } from '../../actions/pokemons'

const PokemonItem = styled.ol`
  margin: 4px 0;
  cursor: pointer;
`

export const PokemonsSidebar = () => {
  const pokemons = useSelector(({ pokemons }) => pokemons.data)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(asyncGetAllPokemons())
  }, [dispatch])
  return (
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
  )
}
