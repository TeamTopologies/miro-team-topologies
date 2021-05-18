import * as React from 'react'
import * as ReactDOM from 'react-dom'

import SVG from 'react-inlinesvg'

import {CLIENT_ID, PLUGIN_TITLE} from 'config'
import {TEAM_ENUM, TeamElement} from './team-logic/team-static'
import {TeamFactory} from './team-logic/team-factory'

import {TeamType} from './team-logic/team-type'
import {TeamInteraction} from './team-logic/team-interaction'
import {TeamOther} from './team-logic/team-other'

import DetailsPanel from 'details-panel'

require('./styles.css')

class Root extends React.Component {
  private containerRef: any = React.createRef()
  private viewportScale = 1
  private teamFactory: TeamFactory

  constructor(props: any) {
    super(props)
    this.teamFactory = new TeamFactory()
  }

  // Needed to get scale before previewing drag&drop. As D&D callback is not async.
  updateCurrentScale = () => {
    miro.board.viewport.getScale().then((scale) => {
      this.viewportScale = scale
    })
  }

  componentDidMount(): void {
    // Add drag-and-drop for hotspot
    const dndOption = {
      dragDirection: 'vertical',
      draggableItemSelector: '.draggable-team',
      getDraggableItemPreview: (targetElement: HTMLElement) => {
        const teamSize = this.teamFactory.getTeamElementFromClassList(targetElement.classList).getShapeSize()
        const url = this.teamFactory.getTeamElementFromClassList(targetElement.classList).getPreview()

        return {
          width: 1.3 * this.viewportScale * teamSize.width,
          height: 1.3 * this.viewportScale * teamSize.height,
          url: url,
        }
      },
      onDrop: (canvasX: number, canvasY: number, targetHtml: HTMLElement) => {
        const teamElement = this.teamFactory.getTeamElementFromClassList(targetHtml.classList)
        this.createTeamWidget(teamElement, {x: canvasX, y: canvasY})
      },
    }
    miro.board.ui.initDraggableItemsContainer(this.containerRef.current, dndOption)
  }

  private createTeamWidget = async (teamElement: TeamElement, pos?: {x: number; y: number}) => {
    const teamShapeSize = teamElement.getShapeSize()
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
          teamEnum: TEAM_ENUM[teamElement.getTeamEnum()],
        },
      },
      type: 'SHAPE',
      x: pos.x,
      y: pos.y,
      style: teamElement.getStyle(),
      createdUserId: '',
      lastModifiedUserId: '',
      width: teamShapeSize.width,
      height: teamShapeSize.height,
      rotation: 0,
      text: teamElement.getName(),
    })
  }

  renderTeamElement(teamElement: TeamElement) {
    return (
      <div
        key={teamElement.getTeamEnum()}
        className={'draggable-team ' + teamElement.getClassName()}
        title={teamElement.getName()}
        onClick={() => this.createTeamWidget(teamElement)}
        onMouseEnter={() => {
          if (this.setDetailText != undefined) this.setDetailText(teamElement.getTeamEnum())
        }}
      >
        <SVG className="icon" src={teamElement.getIcon()} />
      </div>
    )
  }

  render() {
    const teamContent = (
      <div className="tt_main_container" onMouseEnter={this.updateCurrentScale}>
        <h3 className="sub-title">Team types:</h3>
        <div className="team-types">
          {TeamType.TeamEnums.map((teamEnum) => {
            return this.renderTeamElement(this.teamFactory.getTeamElement(teamEnum))
          })}
        </div>
        <h3 className="sub-title">Team interactions:</h3>
        <div className="team-interactions">
          {TeamInteraction.TeamEnums.map((teamEnum) => {
            return this.renderTeamElement(this.teamFactory.getTeamElement(teamEnum))
          })}
        </div>
        <div className="team-other">
          <h3 className="sub-title">Flow of change:</h3>
          {TeamOther.TeamEnums.map((teamEnum) => {
            return this.renderTeamElement(this.teamFactory.getTeamElement(teamEnum))
          })}
        </div>
        <DetailsPanel setOnHover={this.setOnHover} />
      </div>
    )
    return <div ref={this.containerRef}>{teamContent}</div>
  }
  private setOnHover = (callBack: (teamEnum: TEAM_ENUM) => void) => {
    this.setDetailText = callBack
  }
  private setDetailText: ((teamEnum: TEAM_ENUM) => void) | undefined = undefined
}

miro.onReady(() => {
  ReactDOM.render(<Root />, document.getElementById('content-panel-react-app'))
})
