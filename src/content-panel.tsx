import * as React from 'react'
import * as ReactDOM from 'react-dom'

import SVG from 'react-inlinesvg'

import {CLIENT_ID} from 'config'
import {
  TEAM_TYPES,
  getTeamTypeDnDPreview,
  getTeamTypeName,
  getTeamTypeFromClassList,
  getTeamTypeStyle,
  getTeamTypeShapeSize,
  TeamTypeIcons,
} from './const/team-types'

import {
  TEAM_INTERACTIONS,
  getTeamInteractionName,
  getTeamInteractionFromClassList,
  getTeamInteractionStyle,
  getTeamInteractionDnDPreview,
  getTeamInteractionShapeSize,
  TeamInteractionPreview,
} from './const/team-interactions'
import DetailsPanel from 'details-panel'

require('./styles.css')

type IState = {
  viewMode: string
  selectStartScreenMode: boolean
  screens: SDK.IWidget[]
  screenIndex: number
}

class Root extends React.Component {
  private containerRef: any = React.createRef()
  private viewportScale = 1

  state: IState = {
    viewMode: 'loading', //edit, play, select-start-screen
    selectStartScreenMode: false,
    screens: [],
    screenIndex: 0,
  }

  // Needed to get scale before previewing drag&drop. As D&D callback is not async.
  updateCurrentScale = () => {
    miro.board.viewport.getScale().then((scale) => {
      this.viewportScale = scale
    })
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

  // return true (TeamType) or false (TeamInteraction)
  private isTargetElementType = (targetElement: HTMLElement): boolean => {
    return targetElement.parentElement?.classList.contains('team-types') ?? false
  }

  componentDidMount(): void {
    // Add drag-and-drop for hotspot
    const dndOption = {
      dragDirection: 'vertical',
      draggableItemSelector: '.draggable-team',
      getDraggableItemPreview: (targetElement: HTMLElement) => {
        const isType = this.isTargetElementType(targetElement)
        let teamSize: {width: number; height: number}
        let url: string
        if (isType) {
          const teamType = getTeamTypeFromClassList(targetElement.classList)
          teamSize = getTeamTypeShapeSize(teamType)
          url = getTeamTypeDnDPreview(teamType)
        } else {
          const teamInteraction = getTeamInteractionFromClassList(targetElement.classList)
          teamSize = getTeamInteractionShapeSize(teamInteraction)
          url = getTeamInteractionDnDPreview(teamInteraction)
        }

        return {
          width: 1.3 * this.viewportScale * teamSize.width,
          height: 1.3 * this.viewportScale * teamSize.height,
          url: url,
        }
      },
      onDrop: (canvasX: number, canvasY: number, targetElement: HTMLElement) => {
        this.isTargetElementType(targetElement)
          ? this.createTeamTypeWidget(getTeamTypeFromClassList(targetElement.classList), {x: canvasX, y: canvasY})
          : this.createTeamInteractionWidget(getTeamInteractionFromClassList(targetElement.classList), {
              x: canvasX,
              y: canvasY,
            })
      },
    }
    miro.board.ui.initDraggableItemsContainer(this.containerRef.current, dndOption)
  }

  private createTeamTypeWidget = async (teamType: TEAM_TYPES, pos?: {x: number; y: number}) => {
    this.createTeamWidget(teamType, undefined, pos)
  }

  private createTeamInteractionWidget = async (teamInteraction: TEAM_INTERACTIONS, pos?: {x: number; y: number}) => {
    this.createTeamWidget(undefined, teamInteraction, pos)
  }

  private createTeamWidget = async (
    teamType?: TEAM_TYPES,
    teamInteraction?: TEAM_INTERACTIONS,
    pos?: {x: number; y: number},
  ) => {
    if (teamType == undefined && teamInteraction == undefined) {
      throw new Error('Missing team Type or Interaction to create widget.')
    }

    const isType = teamType !== undefined

    const teamShapeSize = isType ? getTeamTypeShapeSize(teamType) : getTeamInteractionShapeSize(teamInteraction)
    if (!pos) {
      const viewport = await miro.board.viewport.getViewport()
      pos = {
        x: viewport.x + viewport.width / 2 - teamShapeSize.width / 2,
        y: viewport.y + viewport.height / 2 - teamShapeSize.height / 2,
      }
    }
    await miro.board.widgets.create({
      metadata: {
        [CLIENT_ID]: {
          teamtopology: true,
          teamCategory: teamType ? 'type' : 'interaction',
          teamName:
            teamType != undefined
              ? TEAM_TYPES[teamType]
              : teamInteraction != undefined
              ? TEAM_INTERACTIONS[teamInteraction]
              : 'none',
        },
      },
      type: 'SHAPE',
      x: pos.x,
      y: pos.y,
      style: isType ? getTeamTypeStyle(teamType) : getTeamInteractionStyle(teamInteraction),
      createdUserId: '',
      lastModifiedUserId: '',
      width: teamShapeSize.width,
      height: teamShapeSize.height,
      rotation: 0,
      text: isType ? getTeamTypeName(teamType) : getTeamInteractionName(teamInteraction),
    } as any)
  }

  render() {
    const editMode = (
      <div>
        <h3 className="sub-title">Team types:</h3>
        <div className="team-types" onMouseEnter={this.updateCurrentScale}>
          <div
            className="draggable-team stream-aligned-btn"
            title={getTeamTypeName(TEAM_TYPES.StreamAligned)}
            onClick={() => this.createTeamTypeWidget(TEAM_TYPES.StreamAligned)}
          >
            <SVG className="icon" src={TeamTypeIcons.StreamAlignedIcon} />
          </div>
          <div
            className="draggable-team platform-btn"
            title={getTeamTypeName(TEAM_TYPES.Platform)}
            onClick={() => this.createTeamTypeWidget(TEAM_TYPES.Platform)}
          >
            <SVG className="icon" src={TeamTypeIcons.PlatformIcon} />
          </div>
          <div
            className="draggable-team enabling-btn"
            title={getTeamTypeName(TEAM_TYPES.Enabling)}
            onClick={() => this.createTeamTypeWidget(TEAM_TYPES.Enabling)}
          >
            <SVG className="icon" src={TeamTypeIcons.EnablingIcon} />
          </div>
          <div
            className="draggable-team complicated-subsystem-btn"
            title={getTeamTypeName(TEAM_TYPES.ComplicatedSubsystem)}
            onClick={() => this.createTeamTypeWidget(TEAM_TYPES.ComplicatedSubsystem)}
          >
            <SVG className="icon" src={TeamTypeIcons.ComplicatedSubsystemIcon} />
          </div>
        </div>
        <h3 className="sub-title">Team interactions:</h3>
        <div className="team-interactions" onMouseEnter={this.updateCurrentScale}>
          <div
            className="draggable-team collaboration-btn"
            title={getTeamInteractionName(TEAM_INTERACTIONS.Collaboration)}
            onClick={() => this.createTeamInteractionWidget(TEAM_INTERACTIONS.Collaboration)}
          >
            <SVG className="icon" src={TeamInteractionPreview.CollaborationIcon} />
          </div>
          <div
            className="draggable-team facilitating-btn"
            title={getTeamInteractionName(TEAM_INTERACTIONS.Facilitating)}
            onClick={() => this.createTeamInteractionWidget(TEAM_INTERACTIONS.Facilitating)}
          >
            <SVG className="icon" src={TeamInteractionPreview.FacilitatingIcon} />
          </div>
          <div
            className="draggable-team xaas-btn"
            title={getTeamInteractionName(TEAM_INTERACTIONS.Xaas)}
            onClick={() => this.createTeamInteractionWidget(TEAM_INTERACTIONS.Xaas)}
          >
            <SVG className="icon" src={TeamInteractionPreview.XaasIcon} />
          </div>
        </div>
        <hr />
        <h3 className="sub-title">Details:</h3>
        <DetailsPanel />
        <div className="team-details"></div>
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
  ReactDOM.render(<Root />, document.getElementById('content-panel-react-app'))
})
