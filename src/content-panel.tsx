import * as React from 'react'
import * as ReactDOM from 'react-dom'

import SVG from 'react-inlinesvg'

import {CLIENT_ID, PLUGIN_TITLE} from 'config'
import {TEAM_ELEMENTS, TEAM_CAT, getTeamElementFromClassList, getTeamCat} from './team-logic/team-static'
import {
  getTeamTypeDnDPreview,
  getTeamTypeName,
  getTeamTypeStyle,
  getTeamTypeShapeSize,
  TeamTypeIcons,
} from './team-logic/team-types'

import {
  getTeamInteractionName,
  getTeamInteractionStyle,
  getTeamInteractionDnDPreview,
  getTeamInteractionShapeSize,
  TeamInteractionPreview,
} from './team-logic/team-interactions'
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

  componentDidMount(): void {
    // Add drag-and-drop for hotspot
    const dndOption = {
      dragDirection: 'vertical',
      draggableItemSelector: '.draggable-team',
      getDraggableItemPreview: (targetElement: HTMLElement) => {
        const teamElement = getTeamElementFromClassList(targetElement.classList)
        const teamCat = getTeamCat(teamElement)
        let teamSize: {width: number; height: number}
        let url: string
        if (teamCat == TEAM_CAT.Type) {
          teamSize = getTeamTypeShapeSize(teamElement)
          url = getTeamTypeDnDPreview(teamElement)
        } else {
          teamSize = getTeamInteractionShapeSize(teamElement)
          url = getTeamInteractionDnDPreview(teamElement)
        }

        return {
          width: 1.3 * this.viewportScale * teamSize.width,
          height: 1.3 * this.viewportScale * teamSize.height,
          url: url,
        }
      },
      onDrop: (canvasX: number, canvasY: number, targetHtml: HTMLElement) => {
        const teamElement = getTeamElementFromClassList(targetHtml.classList)
        const teamCat = getTeamCat(teamElement)
        this.createTeamWidget(teamElement, teamCat, {x: canvasX, y: canvasY})
      },
    }
    miro.board.ui.initDraggableItemsContainer(this.containerRef.current, dndOption)
  }

  private createTeamWidget = async (teamElement: TEAM_ELEMENTS, teamCat: TEAM_CAT, pos?: {x: number; y: number}) => {
    const teamShapeSize =
      teamCat == TEAM_CAT.Type ? getTeamTypeShapeSize(teamElement) : getTeamInteractionShapeSize(teamElement)
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
          teamCategory: teamCat,
          teamName: TEAM_ELEMENTS[teamElement],
        },
      },
      type: 'SHAPE',
      x: pos.x,
      y: pos.y,
      style: teamCat == TEAM_CAT.Type ? getTeamTypeStyle(teamElement) : getTeamInteractionStyle(teamElement),
      createdUserId: '',
      lastModifiedUserId: '',
      width: teamShapeSize.width,
      height: teamShapeSize.height,
      rotation: 0,
      text: teamCat == TEAM_CAT.Type ? getTeamTypeName(teamElement) : getTeamInteractionName(teamElement),
    })
  }

  render() {
    const teamContent = (
      <div className="tt_main_container">
        <h2>{PLUGIN_TITLE}</h2>
        <h3 className="sub-title">Team types:</h3>
        <div className="team-types" onMouseEnter={this.updateCurrentScale}>
          <div
            className="draggable-team stream-aligned-btn"
            title={getTeamTypeName(TEAM_ELEMENTS.StreamAligned)}
            onClick={() => this.createTeamWidget(TEAM_ELEMENTS.StreamAligned, TEAM_CAT.Type)}
          >
            <SVG className="icon" src={TeamTypeIcons.StreamAlignedIcon} />
          </div>
          <div
            className="draggable-team platform-btn"
            title={getTeamTypeName(TEAM_ELEMENTS.Platform)}
            onClick={() => this.createTeamWidget(TEAM_ELEMENTS.Platform, TEAM_CAT.Type)}
          >
            <SVG className="icon" src={TeamTypeIcons.PlatformIcon} />
          </div>
          <div
            className="draggable-team enabling-btn"
            title={getTeamTypeName(TEAM_ELEMENTS.Enabling)}
            onClick={() => this.createTeamWidget(TEAM_ELEMENTS.Enabling, TEAM_CAT.Type)}
          >
            <SVG className="icon" src={TeamTypeIcons.EnablingIcon} />
          </div>
          <div
            className="draggable-team complicated-subsystem-btn"
            title={getTeamTypeName(TEAM_ELEMENTS.ComplicatedSubsystem)}
            onClick={() => this.createTeamWidget(TEAM_ELEMENTS.ComplicatedSubsystem, TEAM_CAT.Type)}
          >
            <SVG className="icon" src={TeamTypeIcons.ComplicatedSubsystemIcon} />
          </div>
        </div>
        <h3 className="sub-title">Team interactions:</h3>
        <div className="team-interactions" onMouseEnter={this.updateCurrentScale}>
          <div
            className="draggable-team collaboration-btn"
            title={getTeamInteractionName(TEAM_ELEMENTS.Collaboration)}
            onClick={() => this.createTeamWidget(TEAM_ELEMENTS.Collaboration, TEAM_CAT.Interaction)}
          >
            <SVG className="icon" src={TeamInteractionPreview.CollaborationIcon} />
          </div>
          <div
            className="draggable-team facilitating-btn"
            title={getTeamInteractionName(TEAM_ELEMENTS.Facilitating)}
            onClick={() => this.createTeamWidget(TEAM_ELEMENTS.Facilitating, TEAM_CAT.Interaction)}
          >
            <SVG className="icon" src={TeamInteractionPreview.FacilitatingIcon} />
          </div>
          <div
            className="draggable-team xaas-btn"
            title={getTeamInteractionName(TEAM_ELEMENTS.Xaas)}
            onClick={() => this.createTeamWidget(TEAM_ELEMENTS.Xaas, TEAM_CAT.Interaction)}
          >
            <SVG className="icon" src={TeamInteractionPreview.XaasIcon} />
          </div>
        </div>
        <hr />
        <DetailsPanel />
      </div>
    )
    return <div ref={this.containerRef}>{teamContent}</div>
  }
}

miro.onReady(() => {
  ReactDOM.render(<Root />, document.getElementById('content-panel-react-app'))
})
