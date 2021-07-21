import { useEffect } from 'react'
import styled from 'styled-components'

const PokemonCard = styled.div`
  padding: 15px;
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
