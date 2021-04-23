import * as React from 'react'
import PropTypes from 'prop-types'
import {CLIENT_ID} from 'config'
import ReactMarkdown from 'react-markdown'

import {TEAM_ENUM} from 'team-logic/team-static'
import teamInfo from './team-text/team-info'
import genericText from './team-text/generic'

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
    const teamEnum = this.getTeamEnumFromString(metadata.teamEnum)
    if (teamEnum == undefined) return

    this.setDetailText(teamEnum)
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
