import * as React from 'react'

type PropsFromState = {
  onSubmit: (count: number) => any
}

type Props = PropsFromState

type State = {
  text: string
}

export default class Plus extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      text: ""
    }
  }

  handleKeyUp(e: React.SyntheticEvent<HTMLInputElement>) {
    console.log("event:" + e.currentTarget.value)
    this.setState({
      text: e.currentTarget.value
    })
  }


  handlePlusSubmit() {
    this.props.onSubmit(parseInt(this.state.text, 10))
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.text} name="plus" onChange={this.handleKeyUp.bind(this)} />
        <button onClick={this.handlePlusSubmit.bind(this)}>Plus</button>
      </div>
    )
  }
}