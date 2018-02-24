import { Action } from 'redux'

export enum AppActionNames {
  INCREMENT = 'app/increment',
  DECREMENT = 'app/decrement',
  PLUS = 'app/plus'
}

interface IncrementAction extends Action {
  type: AppActionNames.INCREMENT
}

interface DecrementAction extends Action {
  type: AppActionNames.DECREMENT
}

interface PlusAction extends Action {
  type: AppActionNames.PLUS,
  payload: number
}

export const incrementAction = (): IncrementAction => ({
  type: AppActionNames.INCREMENT
})

export const decrementAction = (): DecrementAction => ({
  type: AppActionNames.DECREMENT
})

export const plusAction = (count: number): PlusAction => ({
  type: AppActionNames.PLUS,
  payload: count
})

export type AppActions =
  | IncrementAction
  | DecrementAction
  | PlusAction

export interface AppState {
  count: number
}

const initialState: AppState = {
  count: 10
}

export default function reducer(state: AppState = initialState, action: AppActions): AppState {
  switch (action.type) {
    case AppActionNames.INCREMENT:
      return { ...state, count: state.count + 1 }
    case AppActionNames.DECREMENT:
      return { ...state, count: state.count - 1 }
    case AppActionNames.PLUS:
      return { ...state, count: state.count + action.payload }
    default:
      return state
  }
}
