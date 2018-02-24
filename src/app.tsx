import * as React from 'react'
import { connect, MapStateToPropsParam } from 'react-redux'
import { ReduxState, Dispatch } from './store'
import { incrementAction, decrementAction, plusAction } from './reducer'
import Counter from './counter'
import Plus from './plus'

type PropsFromDispatch = {
  dispatch: Dispatch
}

type PropsFromState = {
  count: number
}

type Props = PropsFromState & PropsFromDispatch

class App extends React.Component<Props, {}> {
  handleIncrementClick() {
    this.props.dispatch(incrementAction())
  }
  handleDecrementClick() {
    this.props.dispatch(decrementAction())
  }
  handlePlusSubmit(count: number) {
    this.props.dispatch(plusAction(count))
  }


  render() {
    return <>
      <Counter count={this.props.count} />
      <button onClick={this.handleIncrementClick.bind(this)}>Increment</button>
      <button onClick={this.handleDecrementClick.bind(this)}>Decrement</button>
      <Plus onSubmit={ (count) => this.handlePlusSubmit(count) } />
    </>
  }
}

const select: MapStateToPropsParam<PropsFromState, {}, {}> =
  (state: ReduxState) => ({ count: state.app.count })

export default connect(select)(App)
