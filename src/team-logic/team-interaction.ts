import {TEAM_ENUM, TeamElementStyle, TeamElement} from './team-static'
const CollaborationIcon = require('images/ti/collaboration.svg')
const FacilitatingIcon = require('images/ti/facilitating.svg')
const XaasIcon = require('images/ti/xaas.svg')

export const TeamInteractionPreview = {
  CollaborationIcon,
  FacilitatingIcon,
  XaasIcon,
}

export class TeamInteraction implements TeamElement {
  static TeamEnums = [TEAM_ENUM.Collaboration, TEAM_ENUM.Facilitating, TEAM_ENUM.Xaas]
  private teamEnum: TEAM_ENUM

  constructor(teamEnum: TEAM_ENUM) {
    this.teamEnum = teamEnum
  }
  getTeamEnum(): TEAM_ENUM {
    return this.teamEnum
  }
  getStyle(): TeamElementStyle {
    switch (this.teamEnum) {
      case TEAM_ENUM.Collaboration:
        return {
          shapeType: miro.enums.shapeType.PARALL,
          backgroundColor: '#E0DBED',
          backgroundOpacity: 0.5,
          borderColor: '#967ee2',
          borderWidth: 3,
          borderOpacity: 1,
          borderStyle: miro.enums.borderStyle.DASHED,
          fontFamily: miro.enums.fontFamily.OPEN_SANS,
          textColor: '#000',
          textAlign: 'c',
          textAlignVertical: 'm',
          fontSize: 17,
          bold: 0,
          italic: 0,
          underline: 0,
          strike: 0,
          highlighting: '',
        }
      case TEAM_ENUM.Facilitating:
        return {
          shapeType: miro.enums.shapeType.CIRCLE,
          backgroundColor: '#E3EFDE',
          backgroundOpacity: 0.5,
          borderColor: '#78996b',
          borderWidth: 3,
          borderOpacity: 1,
          borderStyle: miro.enums.borderStyle.DASHED,
          fontFamily: miro.enums.fontFamily.OPEN_SANS,
          textColor: '#000',
          textAlign: 'c',
          textAlignVertical: 'm',
          fontSize: 17,
          bold: 0,
          italic: 0,
          underline: 0,
          strike: 0,
          highlighting: '',
        }
      case TEAM_ENUM.Xaas:
      default:
        return {
          shapeType: miro.enums.shapeType.TRIANGLE,
          backgroundColor: '#DBDBDB',
          backgroundOpacity: 0.5,
          borderColor: '#999696',
          borderWidth: 3,
          borderOpacity: 1,
          borderStyle: miro.enums.borderStyle.DASHED,
          fontFamily: miro.enums.fontFamily.OPEN_SANS,
          textColor: '#000',
          textAlign: 'c',
          textAlignVertical: 'm',
          fontSize: 17,
          bold: 0,
          italic: 0,
          underline: 0,
          strike: 0,
          highlighting: '',
        }
    }
  }

  getName(): string {
    switch (this.teamEnum) {
      case TEAM_ENUM.Collaboration:
        return 'Collaboration'
      case TEAM_ENUM.Facilitating:
        return 'Facilitating'
      case TEAM_ENUM.Xaas:
        return 'Xaas'
      default:
        return 'none'
    }
  }

  getShapeSize(): {height: number; width: number} {
    let width = 150
    let height = 150
    switch (this.teamEnum) {
      case TEAM_ENUM.Collaboration:
        width = 300
        height = 100
        break
      case TEAM_ENUM.Facilitating:
        width = 130
        height = 130
        break
      case TEAM_ENUM.Xaas:
        width = 100
        height = 100
        break
    }
    return {width, height}
  }

  getPreview(): string {
    const imgPrefix = 'data:image/svg+xml,'
    return imgPrefix + this.getPreviewSvg()
  }

  getIcon(): string {
    return this.getPreview()
  }

  getClassName(): string {
    switch (this.teamEnum) {
      case TEAM_ENUM.Collaboration:
        return 'collaboration-btn'
      case TEAM_ENUM.Facilitating:
        return 'facilitating-btn'
      case TEAM_ENUM.Xaas:
      default:
        return 'xaas-btn'
    }
  }

  private getPreviewSvg(): string {
    switch (this.teamEnum) {
      case TEAM_ENUM.Collaboration:
        return CollaborationIcon
      case TEAM_ENUM.Facilitating:
        return FacilitatingIcon
      case TEAM_ENUM.Xaas:
      default:
        return XaasIcon
    }
  }
}
