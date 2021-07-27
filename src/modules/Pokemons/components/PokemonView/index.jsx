import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { useGetPokemonByNameQuery } from '../../services/api'

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

  const {
    data: selectedPokemon,
    isError,
    isLoading
  } = useGetPokemonByNameQuery(selectedPokemonId.name, {
    skip: !selectedPokemonId.name
  })

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
