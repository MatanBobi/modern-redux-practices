import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { useGetPokemonByNameQuery } from '../../services/api'

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

  const {
    data: selectedPokemon,
    isError,
    isLoading
  } = useGetPokemonByNameQuery(selectedPokemonId.name, {
    skip: !selectedPokemonId.name
  })

  return (
    <PokemonCard>
      {selectedPokemon && (
        <SmallImage
          src={`https://pokeres.bastionbot.org/images/pokemon/${selectedPokemon.id}.png`}
          alt={selectedPokemon.name}
        />
      )}
      <div>{selectedPokemon?.name}</div>
    </PokemonCard>
  )
}
