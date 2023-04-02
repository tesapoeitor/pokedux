import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from 'react-redux'
import { applyMiddleware, compose, legacy_createStore as createStore, StoreEnhancer } from 'redux'
import { pokemonsReducer } from './reducer/pokemons'
import { logger } from './middlewares'

// const composeEnhancers = compose(
//   (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
//   applyMiddleware(logger)
// )

const composeEnhancers: StoreEnhancer<unknown, unknown> = compose(
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(logger)
)

const store = createStore(
  pokemonsReducer,
  composeEnhancers
)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)