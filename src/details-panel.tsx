import * as React from 'react'
import {CLIENT_ID} from 'config'
import ReactMarkdown from 'react-markdown'

import teamInfo from './text/team-info'
import genericText from './text/generic'

import {TEAM_TYPES} from 'const/team-types'
import {TEAM_INTERACTIONS} from 'const/team-interactions'

require('./details-styles.css')
type IState = {
  description: string
  attentionPoints: string[]
}
export default class DetailsPanel extends React.Component {
  state: IState = {
    description: '',
    attentionPoints: [],
  }
  // TODO: Get widget meta-data to init state.
  // eslint-disable-next-line
  async componentWillMount() {
    const savedState = await miro.__getRuntimeState()

    if (savedState.teamWidgetId) {
      this.setState({description: teamInfo[TEAM_TYPES.StreamAligned]})
    } else {
      this.setState({description: genericText.PleaseSelectWidget})
    }

    // Enable refresh panel data when selection change or current widget being moved
    miro.addListener('WIDGETS_TRANSFORMATION_UPDATED', this.onWidgetTransformed)
    miro.addListener('SELECTION_UPDATED', this.onWidgetTransformed)
  }
  // componentDidMount(): void {

  // }

  private getTeamEnumFromName(name: string): TEAM_TYPES | TEAM_INTERACTIONS | undefined {
    const team_type: TEAM_TYPES = TEAM_TYPES[name as keyof typeof TEAM_TYPES]
    if (team_type !== undefined) return team_type
    const team_int: TEAM_INTERACTIONS = TEAM_INTERACTIONS[name as keyof typeof TEAM_INTERACTIONS]
    return team_int
  }
  private onWidgetTransformed = (e: SDK.Event) => {
    const eventData = e.data[0]

    // Only handle Team Topologies signed shapes
    if (eventData == undefined || eventData.metadata[CLIENT_ID] == undefined) return

    const metadata = eventData.metadata[CLIENT_ID]

    const teamEnum = this.getTeamEnumFromName(metadata.teamName)
    console.log('Name: ' + metadata.teamName)
    console.log('Team enum: ' + teamEnum)
    if (teamEnum == undefined) return

    this.setState({
      description: teamInfo[teamEnum],
    })
    console.log(`Widget is the ${metadata.teamName} Team ${metadata.teamCategory}`)
    // miro.board.widgets.get({id: eventData.id}).then((widgets: SDK.IWidget[]) => {
    //   if (!widgets || widgets.length == 0) return
    //   const widget = widgets[0]
    //   // Todo: Open bottom panel with controls based on widget

    //   // Identify connected widgets & raised info/questions matching context
    //   // Todo: Can be done after user click on "info" button from bottom panel
    //   miro.board.widgets.__getIntersectedObjects(widget.bounds).then((intersectWidgets: SDK.IWidget[]) => {
    //     console.log('Intersections:')
    //     console.log(intersectWidgets)
    //     // Give a blink to confirm all related widgets
    //     widgets.map((wiwi) => {
    //       if (wiwi.metadata[CLIENT_ID] != undefined) {
    //         // Todo: need to find a better interaction :P
    //         miro.board.widgets.__blinkWidget({id: wiwi.id})
    //       }
    //     })
    //   })
    //   return
    // })
  }

  render(): JSX.Element {
    let detailArea, attentionArea
    if (this.state.description.length > 0) {
      detailArea = (
        <div className="team-details">
          <h3 className="sub-title">{genericText.DetailsAreaTitle}</h3>
          <ReactMarkdown>{this.state.description}</ReactMarkdown>
        </div>
      )
    } else {
      detailArea = <i>{genericText.Loading}</i>
    }
    if (this.state.attentionPoints.length > 0) {
      attentionArea = (
        <div>
          <h3>{genericText.PointOfAttentionTitle}</h3>
          {this.state.attentionPoints.map((ap) => {
            ;<p>ICON and {ap}</p>
          })}
        </div>
      )
    }

    return (
      <div>
        {detailArea}
        {attentionArea}
        <div className="learn-more-link">
          <i>
            <a
              href="https://teamtopologies.com/"
              target="_blank"
              rel="noreferrer"
              title="Learn more from the official Website!"
            >
              Learn more at teamtopologies.com
            </a>
          </i>
        </div>
      </div>
    )
  }
}
