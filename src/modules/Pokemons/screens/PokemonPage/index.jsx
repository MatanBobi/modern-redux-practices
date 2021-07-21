import styled from 'styled-components'
import { PokemonsSidebar } from '../../components/PokemonsSidebar'
import { PokemonView } from '../../components/PokemonView'
const PokemonsPageWrapper = styled.div`
  display: grid;
  grid-template-areas:
    'sidebar main-view'
    'sidebar footer';
  height: 100%;
`

export const PokemonsPage = () => {
  return (
    <PokemonsPageWrapper>
      <PokemonsSidebar />
      <PokemonView />
    </PokemonsPageWrapper>
  )
}

export default PokemonsPage
