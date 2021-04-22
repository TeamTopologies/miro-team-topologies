import {TEAM_ELEMENTS} from './team-static'

export const FlowOfChangePreview = require('images/tt/flowofchange.svg')
// const FlowOfChangeIcon = require('images/tt/icon-flowofchange.svg')

export function getTeamOtherStyle(
  teamType?: TEAM_ELEMENTS,
): {
  shapeType: number
  backgroundColor: string
  backgroundOpacity: number
  borderColor: string
  borderWidth: number
  borderOpacity: number
  borderStyle: number
  fontFamily: number
  textColor: string
  textAlign: string
  textAlignVertical: string
  fontSize: number
  bold: number
  italic: number
  underline: number
  strike: number
  highlighting: string
} {
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

export function getTeamOtherName(teamType?: TEAM_ELEMENTS): string {
  return 'Flow of change'
}

export function getTeamOtherShapeSize(teamType?: TEAM_ELEMENTS): {height: number; width: number} {
  const width = 450
  const height = 150
  return {width, height}
}

export function getTeamOtherDnDPreview(teamType?: TEAM_ELEMENTS): string {
  const imgPrefix = 'data:image/svg+xml,'
  return imgPrefix + FlowOfChangePreview
}
