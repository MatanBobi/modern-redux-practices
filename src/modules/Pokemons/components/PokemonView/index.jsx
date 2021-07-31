import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { asyncGetPokemonDetails } from '../../actions/pokemons'

const PokemonCard = styled.div`
  padding: 15px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`

const SmallImage = styled.img`
  width: 200px;
  height: 200px;
`

export const PokemonView = () => {
  const selectedPokemonId = useSelector(
    ({ pokemons }) => pokemons.selectedPokemonId
  )
  const selectedPokemon = useSelector(
    ({ pokemons }) => pokemons.selectedPokemonData
  )
  const dispatch = useDispatch()

  useEffect(() => {
    if (selectedPokemonId) {
      dispatch(asyncGetPokemonDetails(selectedPokemonId.url))
    }
  }, [selectedPokemonId, dispatch])

  return (
    <PokemonCard>
      {selectedPokemon && (
        <SmallImage
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${selectedPokemon.id}.png`}
          alt={selectedPokemon.name}
        />
      )}
      <div>{selectedPokemon?.name}</div>
    </PokemonCard>
  )
}
