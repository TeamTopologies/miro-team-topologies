import * as React from 'react'
import * as ReactDOM from 'react-dom'

require('./details-styles.css')

class Root extends React.Component {
  private containerRef: any = React.createRef()

  // TODO: Get widget meta-data to init state.
  // eslint-disable-next-line
  // async componentWillMount() {
  //   const savedState = await miro.__getRuntimeState()

  //   if (savedState.enterPrototypingMode) {
  //     miro.__setRuntimeState({enterPrototypingMode: false})
  //   } else if (savedState.prototypingMode) {
  //     this.setState({viewMode: 'play'})
  //   } else {
  //     this.setState({viewMode: 'edit'})
  //   }
  // }
  // componentDidMount(): void {

  // }

  render() {
    return (
      <div className="details-panel">
        <i>Show here details about team types/interractions. Raise questions to help user consider context.</i>
      </div>
    )
  }
}

miro.onReady(() => {
  ReactDOM.render(<Root />, document.getElementById('details-panel-react-app'))
})
