import {TEAM_ELEMENTS} from './team-static'
const CollaborationIcon = require('images/ti/collaboration.svg')
const FacilitatingIcon = require('images/ti/facilitating.svg')
const XaasIcon = require('images/ti/xaas.svg')

export const TeamInteractionPreview = {
  CollaborationIcon,
  FacilitatingIcon,
  XaasIcon,
}

export const AllTeamInteractions = [TEAM_ELEMENTS.Collaboration, TEAM_ELEMENTS.Facilitating, TEAM_ELEMENTS.Xaas]

export function getTeamInteractionStyle(
  teamInteraction?: TEAM_ELEMENTS,
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
  switch (teamInteraction) {
    case TEAM_ELEMENTS.Collaboration:
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
    case TEAM_ELEMENTS.Facilitating:
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
    case TEAM_ELEMENTS.Xaas:
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

export function getTeamInteractionName(teamInteraction?: TEAM_ELEMENTS): string {
  switch (teamInteraction) {
    case TEAM_ELEMENTS.Collaboration:
      return 'Collaboration'
    case TEAM_ELEMENTS.Facilitating:
      return 'Facilitating'
    case TEAM_ELEMENTS.Xaas:
      return 'Xaas'
    default:
      return 'none'
  }
}

export function getTeamInteractionShapeSize(teamInteraction?: TEAM_ELEMENTS): {height: number; width: number} {
  let width = 150
  let height = 150
  switch (teamInteraction) {
    case TEAM_ELEMENTS.Collaboration:
      width = 300
      height = 100
      break
    case TEAM_ELEMENTS.Facilitating:
      width = 130
      height = 130
      break
    case TEAM_ELEMENTS.Xaas:
      width = 100
      height = 100
      break
  }
  return {width, height}
}

export function getTeamInteractionDnDPreview(teamInteraction?: TEAM_ELEMENTS): string {
  const imgPrefix = 'data:image/svg+xml,'
  switch (teamInteraction) {
    case TEAM_ELEMENTS.Collaboration:
      return imgPrefix + CollaborationIcon
    case TEAM_ELEMENTS.Facilitating:
      return imgPrefix + FacilitatingIcon
    case TEAM_ELEMENTS.Xaas:
    default:
      return imgPrefix + XaasIcon
  }
}
