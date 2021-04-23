import {TEAM_ENUM, TeamElement, TeamElementStyle} from './team-static'

export const FlowOfChangePreview = require('images/tt/flowofchange.svg')

export class TeamOther implements TeamElement {
  static TeamEnums = [TEAM_ENUM.FlowOfChange]
  private teamEnum: TEAM_ENUM

  constructor(teamEnum: TEAM_ENUM) {
    this.teamEnum = teamEnum
  }
  getTeamEnum(): TEAM_ENUM {
    return this.teamEnum
  }
  getStyle(): TeamElementStyle {
    return {
      shapeType: miro.enums.shapeType.ARROW_RIGHT,
      backgroundColor: '#FFFFFF',
      backgroundOpacity: 0,
      borderColor: '#595959',
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

  getName(): string {
    return 'Flow of change'
  }
  getShapeSize(): {height: number; width: number} {
    const width = 450
    const height = 150
    return {width, height}
  }

  getPreview(): string {
    const imgPrefix = 'data:image/svg+xml,'
    return imgPrefix + FlowOfChangePreview
  }
  getIcon(): string {
    return this.getPreview()
  }
  getClassName(): string {
    return 'flowofchange-btn'
  }
}
