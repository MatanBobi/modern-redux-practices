import { connect } from 'react-redux'
import styled from 'styled-components'
import { PokemonsSidebar } from '../../components/PokemonsSidebar'
import { PokemonView } from '../../components/PokemonView'
import {
  asyncGetAllPokemons,
  setSelectedPokemon,
  asyncGetPokemonDetails
} from '../../actions/pokemons'

const PokemonsPageWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, minmax(200px, 1fr));
  grid-gap: 10px;
  height: 100%;
`

export const PokemonsPage = ({
  asyncGetAllPokemons,
  asyncGetPokemonDetails,
  setSelectedPokemon,
  pokemons,
  selectedPokemonId,
  selectedPokemon
}) => {
  return (
    <PokemonsPageWrapper>
      <PokemonsSidebar
        asyncGetAllPokemons={asyncGetAllPokemons}
        pokemons={pokemons}
        setSelectedPokemon={setSelectedPokemon}
      />
      <PokemonView
        selectedPokemonId={selectedPokemonId}
        asyncGetPokemonDetails={asyncGetPokemonDetails}
        selectedPokemon={selectedPokemon}
      />
    </PokemonsPageWrapper>
  )
}

export default connect(
  ({ pokemons }) => ({
    pokemons: pokemons.data,
    selectedPokemonId: pokemons.selectedPokemonId,
    selectedPokemon: pokemons.selectedPokemonData
  }),
  {
    asyncGetAllPokemons,
    setSelectedPokemon,
    asyncGetPokemonDetails
  }
)(PokemonsPage)
