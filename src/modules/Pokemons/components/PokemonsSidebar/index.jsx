import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import {
  setSelectedPokemon
} from '../../reducers/pokemons-slice'
import { useGetAllPokemonsQuery } from '../../services/api'

const PokemonItem = styled.ol`
  margin: 4px 0;
  cursor: pointer;
`

export const PokemonsSidebar = () => {
  const dispatch = useDispatch()
  const { data: pokemons, isError, isLoading } = useGetAllPokemonsQuery(151)
  return (
    <ul>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        pokemons.map((pokemon) => (
          <PokemonItem
            key={pokemon.name}
            onClick={() => {
              dispatch(setSelectedPokemon(pokemon))
            }}
          >
            {pokemon.name}
          </PokemonItem>
        ))
      )}
    </ul>
  )
}
