import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {createTeam} from 'bottom-panel-controller'
import SVG from 'react-inlinesvg'

import {
  TEAM_TYPES,
  getTeamDnDPreview,
  getTeamName,
  getTeamTypeFromClassList,
  getTeamShapeSize,
} from './const/team-types'

require('./styles.css')
const StreamAlignedIcon = require('images/tt/icon-stream-aligned.svg')
const PlatformIcon = require('images/tt/icon-platform.svg')
const EnablingIcon = require('images/tt/icon-enabling.svg')
const ComplicatedSubsystemIcon = require('images/tt/icon-complicated-subsystem.svg')

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
    const dndOption = {
      dragDirection: 'vertical',
      draggableItemSelector: '.btn-drag-team',
      getDraggableItemPreview: async (targetElement: HTMLElement) => {
        let viewportScale = 0
        console.log('On going...!!')

        return await miro.board.viewport.getScale().then((scale) => {
          viewportScale = scale
          console.log('RESULT: ' + viewportScale)
          const teamType = getTeamTypeFromClassList(targetElement.classList)
          const teamSize = getTeamShapeSize(teamType)
          return {
            width: viewportScale * teamSize.width,
            height: viewportScale * teamSize.height,
            url: getTeamDnDPreview(teamType),
          }
        })
      },
      onDrop: (canvasX: number, canvasY: number, targetElement: HTMLElement) => {
        createTeam(getTeamTypeFromClassList(targetElement.classList), {x: canvasX, y: canvasY})
      },
    }
    miro.board.ui.initDraggableItemsContainer(this.containerRef.current, dndOption)
  }

  private createTeam = (teamType: TEAM_TYPES) => {
    createTeam(teamType)
  }

  render() {
    const editMode = (
      <div className="edit-mode">
        <div
          className="btn btn-drag-team stream-aligned-btn"
          title={getTeamName(TEAM_TYPES.StreamAligned)}
          onClick={() => this.createTeam(TEAM_TYPES.StreamAligned)}
        >
          <SVG className="icon" src={StreamAlignedIcon} />
        </div>
        <div
          className="btn btn-drag-team platform-btn"
          title={getTeamName(TEAM_TYPES.Platform)}
          onClick={() => this.createTeam(TEAM_TYPES.Platform)}
        >
          <SVG className="icon" src={PlatformIcon} />
        </div>
        <div
          className="btn btn-drag-team enabling-btn"
          title={getTeamName(TEAM_TYPES.Enabling)}
          onClick={() => this.createTeam(TEAM_TYPES.Enabling)}
        >
          <SVG className="icon" src={EnablingIcon} />
        </div>
        <div
          className="btn btn-drag-team complicated-subsystem-btn"
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
  ReactDOM.render(<Root />, document.getElementById('bottom-react-app'))
})
