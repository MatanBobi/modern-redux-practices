import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { getPokemonDetails } from '../../reducers/pokemons-slice'

const PokemonCard = styled.div`
  padding: 15px;
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
      dispatch(getPokemonDetails(selectedPokemonId.url))
    }
  }, [selectedPokemonId, dispatch])

  return (
    <div>
      <PokemonCard>
        {selectedPokemon && (
          <SmallImage
            src={`https://pokeres.bastionbot.org/images/pokemon/${selectedPokemon.id}.png`}
            alt={selectedPokemon.name}
          />
        )}
        <div>{selectedPokemon?.name}</div>
      </PokemonCard>
    </div>
  )
}
