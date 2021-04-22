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

import {
  getTeamOtherName,
  getTeamOtherStyle,
  getTeamOtherDnDPreview,
  getTeamOtherShapeSize,
  FlowOfChangePreview,
} from './team-logic/team-other'
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
        } else if (teamCat == TEAM_CAT.Interaction) {
          teamSize = getTeamInteractionShapeSize(teamElement)
          url = getTeamInteractionDnDPreview(teamElement)
        } else {
          teamSize = getTeamOtherShapeSize(teamElement)
          url = getTeamOtherDnDPreview(teamElement)
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
        this.createTeamWidget(teamElement, {x: canvasX, y: canvasY})
      },
    }
    miro.board.ui.initDraggableItemsContainer(this.containerRef.current, dndOption)
  }

  private createTeamWidget = async (teamElement: TEAM_ELEMENTS, pos?: {x: number; y: number}) => {
    const teamCat = getTeamCat(teamElement)
    const teamShapeSize =
      teamCat == TEAM_CAT.Type
        ? getTeamTypeShapeSize(teamElement)
        : teamCat == TEAM_CAT.Interaction
        ? getTeamInteractionShapeSize(teamElement)
        : getTeamOtherShapeSize(teamElement)
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
      style:
        teamCat == TEAM_CAT.Type
          ? getTeamTypeStyle(teamElement)
          : teamCat == TEAM_CAT.Interaction
          ? getTeamInteractionStyle(teamElement)
          : getTeamOtherStyle(teamElement),
      createdUserId: '',
      lastModifiedUserId: '',
      width: teamShapeSize.width,
      height: teamShapeSize.height,
      rotation: 0,
      text:
        teamCat == TEAM_CAT.Type
          ? getTeamTypeName(teamElement)
          : teamCat == TEAM_CAT.Interaction
          ? getTeamInteractionName(teamElement)
          : getTeamOtherName(teamElement),
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
            onClick={() => this.createTeamWidget(TEAM_ELEMENTS.StreamAligned)}
            onMouseEnter={() => {
              if (this.setDetailText != undefined) this.setDetailText(TEAM_ELEMENTS.StreamAligned)
            }}
          >
            <SVG className="icon" src={TeamTypeIcons.StreamAlignedIcon} />
          </div>
          <div
            className="draggable-team platform-btn"
            title={getTeamTypeName(TEAM_ELEMENTS.Platform)}
            onClick={() => this.createTeamWidget(TEAM_ELEMENTS.Platform)}
            onMouseEnter={() => {
              if (this.setDetailText != undefined) this.setDetailText(TEAM_ELEMENTS.Platform)
            }}
          >
            <SVG className="icon" src={TeamTypeIcons.PlatformIcon} />
          </div>
          <div
            className="draggable-team enabling-btn"
            title={getTeamTypeName(TEAM_ELEMENTS.Enabling)}
            onClick={() => this.createTeamWidget(TEAM_ELEMENTS.Enabling)}
            onMouseEnter={() => {
              if (this.setDetailText != undefined) this.setDetailText(TEAM_ELEMENTS.Enabling)
            }}
          >
            <SVG className="icon" src={TeamTypeIcons.EnablingIcon} />
          </div>
          <div
            className="draggable-team complicated-subsystem-btn"
            title={getTeamTypeName(TEAM_ELEMENTS.ComplicatedSubsystem)}
            onClick={() => this.createTeamWidget(TEAM_ELEMENTS.ComplicatedSubsystem)}
            onMouseEnter={() => {
              if (this.setDetailText != undefined) this.setDetailText(TEAM_ELEMENTS.ComplicatedSubsystem)
            }}
          >
            <SVG className="icon" src={TeamTypeIcons.ComplicatedSubsystemIcon} />
          </div>
        </div>
        <h3 className="sub-title">Team interactions:</h3>
        <div className="team-interactions" onMouseEnter={this.updateCurrentScale}>
          <div
            className="draggable-team collaboration-btn"
            title={getTeamInteractionName(TEAM_ELEMENTS.Collaboration)}
            onClick={() => this.createTeamWidget(TEAM_ELEMENTS.Collaboration)}
            onMouseEnter={() => {
              if (this.setDetailText != undefined) this.setDetailText(TEAM_ELEMENTS.Collaboration)
            }}
          >
            <SVG className="icon" src={TeamInteractionPreview.CollaborationIcon} />
          </div>
          <div
            className="draggable-team facilitating-btn"
            title={getTeamInteractionName(TEAM_ELEMENTS.Facilitating)}
            onClick={() => this.createTeamWidget(TEAM_ELEMENTS.Facilitating)}
            onMouseEnter={() => {
              if (this.setDetailText != undefined) this.setDetailText(TEAM_ELEMENTS.Facilitating)
            }}
          >
            <SVG className="icon" src={TeamInteractionPreview.FacilitatingIcon} />
          </div>
          <div
            className="draggable-team xaas-btn"
            title={getTeamInteractionName(TEAM_ELEMENTS.Xaas)}
            onClick={() => this.createTeamWidget(TEAM_ELEMENTS.Xaas)}
            onMouseEnter={() => {
              if (this.setDetailText != undefined) this.setDetailText(TEAM_ELEMENTS.Xaas)
            }}
          >
            <SVG className="icon" src={TeamInteractionPreview.XaasIcon} />
          </div>
        </div>
        <div className="team-other" onMouseEnter={this.updateCurrentScale}>
          <h3 className="sub-title">Flow of change:</h3>
          <div
            className="draggable-team flowofchange-btn"
            title={getTeamOtherName(TEAM_ELEMENTS.FlowOfChange)}
            onClick={() => this.createTeamWidget(TEAM_ELEMENTS.FlowOfChange)}
            onMouseEnter={() => {
              if (this.setDetailText != undefined) this.setDetailText(TEAM_ELEMENTS.FlowOfChange)
            }}
          >
            <SVG className="icon" src={FlowOfChangePreview} />
          </div>
        </div>
        <DetailsPanel setOnHover={this.setOnHover} />
      </div>
    )
    return <div ref={this.containerRef}>{teamContent}</div>
  }
  private setOnHover = (callBack: (teamEnum: TEAM_ELEMENTS) => void) => {
    this.setDetailText = callBack
  }
  private setDetailText: ((teamEnum: TEAM_ELEMENTS) => void) | undefined = undefined
}

miro.onReady(() => {
  ReactDOM.render(<Root />, document.getElementById('content-panel-react-app'))
})
