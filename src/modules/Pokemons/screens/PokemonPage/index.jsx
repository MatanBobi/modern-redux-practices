import styled from 'styled-components'
import { PokemonsSidebar } from '../../components/PokemonsSidebar'
import { PokemonView } from '../../components/PokemonView'
const PokemonsPageWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, minmax(200px, 1fr));
  grid-gap: 10px;
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
