import PokemonsPage from './screens/PokemonPage'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import pokemonsSlice from './reducers/pokemons-slice'
import { api } from './services/api'

const reducer = {
  pokemons: pokemonsSlice,
  [api.reducerPath]: api.reducer
}

const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getMiddlewares) => getMiddlewares().concat(api.middleware)
})

export const PokemonRoot = () => {
  return (
    <Provider store={store}>
      <PokemonsPage />
    </Provider>
  )
}
