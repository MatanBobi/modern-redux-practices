import PokemonsPage from './screens/PokemonPage'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const store = createStore(rootReducer, applyMiddleware(thunk))

export const PokemonRoot = () => {
  return (
    <Provider store={store}>
      <PokemonsPage />
    </Provider>
  )
}
