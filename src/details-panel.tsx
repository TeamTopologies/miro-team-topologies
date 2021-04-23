import * as React from 'react'
import PropTypes from 'prop-types'
import {CLIENT_ID} from 'config'
import ReactMarkdown from 'react-markdown'

import teamInfo from './team-text/team-info'
import genericText from './team-text/generic'

import {TEAM_ENUM} from 'team-logic/team-static'

require('./details-styles.css')

type IState = {
  description: string | undefined
  attentionPoints: string[] | undefined
}
type IProps = {
  setOnHover: (callBack: (teamEnum: TEAM_ENUM) => void) => void
}

export default class DetailsPanel extends React.Component<IProps, IState> {
  static propTypes = {
    setOnHover: PropTypes.func,
  }
  state: IState = {
    description: undefined,
    attentionPoints: undefined,
  }

  constructor(props: Readonly<IProps>) {
    super(props)
    this.setDetailText = this.setDetailText.bind(this)
  }
  // TODO: Get widget meta-data to init state.
  // eslint-disable-next-line
  async componentWillMount() {
    // Enable refresh panel data when selection change or current widget being moved
    miro.addListener('WIDGETS_TRANSFORMATION_UPDATED', this.onWidgetTransformed)
    miro.addListener('SELECTION_UPDATED', this.onWidgetTransformed)
    console.log(this.props)
    console.log(this.props.setOnHover)
    this.props.setOnHover(this.setDetailText)
  }
  //  componentDidMount(): void {

  //  }
  private setDetailText = (teamEnum: TEAM_ENUM): void => {
    this.setState({
      description: teamInfo[teamEnum],
    })
  }

  private getTeamEnumFromString(name: string): TEAM_ENUM | undefined {
    const team_elt: TEAM_ENUM = TEAM_ENUM[name as keyof typeof TEAM_ENUM]
    return team_elt
  }
  private onWidgetTransformed = (e: SDK.Event) => {
    const eventData = e.data[0]

    // Only handle Team Topologies signed shapes
    if (eventData == undefined || eventData.metadata[CLIENT_ID] == undefined) return

    const metadata = eventData.metadata[CLIENT_ID]

    const teamEnum = this.getTeamEnumFromString(metadata.teamName)
    if (teamEnum == undefined) return

    this.setDetailText(teamEnum)
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
    if (this.state.description !== undefined) {
      detailArea = (
        <div className="team-details">
          <ReactMarkdown>{this.state.description}</ReactMarkdown>
        </div>
      )
    } else {
      detailArea = <i className="small-tooltip">{genericText.PleaseSelectWidget}</i>
    }
    if (this.state.attentionPoints !== undefined) {
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
        <h3 className="sub-title">{genericText.DetailsAreaTitle}</h3>
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
