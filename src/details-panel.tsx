import * as React from 'react'
import {CLIENT_ID} from 'config'

import teamTypesText from './text/teamtypes'
import genericText from './text/generic'

require('./details-styles.css')
type IState = {
  description: string
}
export default class DetailsPanel extends React.Component {
  private containerRef: any = React.createRef()

  state: IState = {
    description: genericText.Loading,
  }
  // TODO: Get widget meta-data to init state.
  // eslint-disable-next-line
  async componentWillMount() {
    const savedState = await miro.__getRuntimeState()

    if (savedState.teamWidgetId) {
      this.setState({description: teamTypesText['StreamAligned']})
    } else {
      this.setState({description: genericText.PleaseSelectWidget})
    }

    // Enable refresh panel data when selection change or current widget being moved
    miro.addListener('WIDGETS_TRANSFORMATION_UPDATED', this.onWidgetTransformed)
    miro.addListener('SELECTION_UPDATED', this.onWidgetTransformed)
  }
  // componentDidMount(): void {

  // }

  private onWidgetTransformed = (e: SDK.Event) => {
    const eventData = e.data[0]

    // Only handle Team Topologies signed shapes
    if (eventData == undefined || eventData.metadata[CLIENT_ID] == undefined) return

    const metadata = eventData.metadata[CLIENT_ID]
    console.log(`Widget is the ${metadata.teamName} Team ${metadata.teamCategory}`)
    miro.board.widgets.get({id: eventData.id}).then((widgets: SDK.IWidget[]) => {
      if (!widgets || widgets.length == 0) return
      const widget = widgets[0]
      // Todo: Open bottom panel with controls based on widget
      miro.__setRuntimeState({currentTeamWidget: widget}) // WARNING, need check current state if changed or not.
      this.setState({
        description: teamTypesText[widget.metadata[CLIENT_ID].teamName],
      })

      // Identify connected widgets & raised info/questions matching context
      // Todo: Can be done after user click on "info" button from bottom panel
      miro.board.widgets.__getIntersectedObjects(widget.bounds).then((intersectWidgets: SDK.IWidget[]) => {
        console.log('Intersections:')
        console.log(intersectWidgets)
        // Give a blink to confirm all related widgets
        widgets.map((wiwi) => {
          if (wiwi.metadata[CLIENT_ID] != undefined) {
            // Todo: need to find a better interaction :P
            miro.board.widgets.__blinkWidget({id: wiwi.id})
          }
        })
      })
      return
    })
  }

  render() {
    return (
      <div className="details-panel">
        <p>{this.state.description}</p>
      </div>
    )
  }
}
