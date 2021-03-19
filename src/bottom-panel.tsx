import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {createTeam} from 'bottom-panel-controller'
import SVG from 'react-inlinesvg'

import {TEAM_TYPES, getTeamName} from './const/team-types'

require('./styles.css')
const StreamAlignedIcon = require('images/stream-aligned.svg')
const PlatformIcon = require('images/platform.svg')
const EnablingIcon = require('images/enabling.svg')
const ComplicatedSubsystemIcon = require('images/complicated-subsystem.svg')

const HOTSPOT_PREVIEW = `data:image/svg+xml,%3Csvg width='152' height='66' xmlns='http://www.w3.org/2000/svg'%3E%3Cg%3E%3Crect stroke='null' x='0' y='0' fill-opacity='0.5' fill='%232d9bf0' height='140' width='140'/%3E%3C/g%3E%3C/svg%3E`

type IState = {
  viewMode: string
  selectStartScreenMode: boolean
  screens: SDK.IWidget[]
  screenIndex: number
}

class Root extends React.Component {
  private containerRef: any = React.createRef()

  state: IState = {
    viewMode: 'loading', //edit, play, select-start-screen
    selectStartScreenMode: false,
    screens: [],
    screenIndex: 0,
  }

  // TODO: TO BE UPDATED Set state based on miro-state before comp. mount.
  // eslint-disable-next-line
  async componentWillMount() {
    const savedState = await miro.__getRuntimeState()

    if (savedState.enterPrototypingMode) {
      miro.__setRuntimeState({enterPrototypingMode: false})
    } else if (savedState.prototypingMode) {
      this.setState({viewMode: 'play'})
    } else {
      this.setState({viewMode: 'edit'})
    }
  }

  componentDidMount(): void {
    // Add drag-and-drop for hotspot
    const options = {
      dragDirection: 'vertical',
      draggableItemSelector: '.stream-aligned-button',
      getDraggableItemPreview: () => {
        return {
          width: 152,
          height: 66,
          url: HOTSPOT_PREVIEW,
        }
      },
      onDrop: (canvasX: number, canvasY: number) => {
        createTeam(TEAM_TYPES.StreamAligned, {x: canvasX, y: canvasY})
      },
    }
    miro.board.ui.initDraggableItemsContainer(this.containerRef.current, options)
  }

  private createTeam = (teamType: TEAM_TYPES) => {
    createTeam(teamType)
  }

  render() {
    const editMode = (
      <div className="edit-mode">
        <div
          className="btn stream-aligned-button"
          title={getTeamName(TEAM_TYPES.StreamAligned)}
          onClick={() => this.createTeam(TEAM_TYPES.StreamAligned)}
        >
          <SVG className="icon" src={StreamAlignedIcon} />
        </div>
        <div
          className="btn platform-button"
          title={getTeamName(TEAM_TYPES.Platform)}
          onClick={() => this.createTeam(TEAM_TYPES.Platform)}
        >
          <SVG className="icon" src={PlatformIcon} />
        </div>
        <div
          className="btn enabling-button"
          title={getTeamName(TEAM_TYPES.Enabling)}
          onClick={() => this.createTeam(TEAM_TYPES.Enabling)}
        >
          <SVG className="icon" src={EnablingIcon} />
        </div>
        <div
          className="btn complicated-subsystem-button"
          title={getTeamName(TEAM_TYPES.ComplicatedSubsystem)}
          onClick={() => this.createTeam(TEAM_TYPES.ComplicatedSubsystem)}
        >
          <SVG className="icon" src={ComplicatedSubsystemIcon} />
        </div>
      </div>
    )

    const getView = () => {
      if (this.state.viewMode === 'edit') {
        return editMode
      } else {
        return null
      }
    }

    return <div ref={this.containerRef}>{getView()}</div>
  }
}

miro.onReady(() => {
  ReactDOM.render(<Root />, document.getElementById('react-app'))
})
