import { useEffect } from 'react'
import styled from 'styled-components'

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

export const PokemonView = ({
  selectedPokemonId,
  asyncGetPokemonDetails,
  selectedPokemon
}) => {
  useEffect(() => {
    if (selectedPokemonId) {
      asyncGetPokemonDetails(selectedPokemonId.url)
    }
  }, [selectedPokemonId, asyncGetPokemonDetails])
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
