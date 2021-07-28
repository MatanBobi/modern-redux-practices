import PokemonsPage from './screens/PokemonPage'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import pokemonsSlice from './reducers/pokemons-slice'

const reducer = {
  pokemons: pokemonsSlice
}

const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== 'production'
})

export const PokemonRoot = () => {
  return (
    <Provider store={store}>
      <PokemonsPage />
    </Provider>
  )
}
