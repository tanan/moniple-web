import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import app, { AppActions, AppState } from './reducer'

const store = createStore(
  combineReducers({
    app
  }),
  compose(
    applyMiddleware(logger)
  )
)

export default store;

export interface ReduxState {
  app: AppState
}

export type ReduxAction =
  | AppActions

export interface Dispatch {
  (action: ReduxAction): any
}
