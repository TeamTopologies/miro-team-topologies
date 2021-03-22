import {ShapeType, FontFamily, BorderStyle} from 'const/styling'

const CollaborationIcon = require('images/ti/collaboration.svg')
const FacilitatingIcon = require('images/ti/facilitating.svg')
const XaasIcon = require('images/ti/xaas.svg')

export const TeamInteractionPreview = {
  CollaborationIcon,
  FacilitatingIcon,
  XaasIcon,
}

export enum TEAM_INTERACTIONS {
  Collaboration = 0,
  Facilitating,
  Xaas,
}
export const AllTeamInteractions = [
  TEAM_INTERACTIONS.Collaboration,
  TEAM_INTERACTIONS.Facilitating,
  TEAM_INTERACTIONS.Xaas,
]

export function getTeamInteractionStyle(
  teamInteraction?: TEAM_INTERACTIONS,
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
    case TEAM_INTERACTIONS.Collaboration:
      return {
        shapeType: ShapeType.PARALL,
        backgroundColor: '#E0DBED',
        backgroundOpacity: 0.5,
        borderColor: '#967ee2',
        borderWidth: 3,
        borderOpacity: 1,
        borderStyle: BorderStyle.DASHED,
        fontFamily: FontFamily.OPEN_SANS,
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
    case TEAM_INTERACTIONS.Facilitating:
      return {
        shapeType: ShapeType.CIRCLE,
        backgroundColor: '#E3EFDE',
        backgroundOpacity: 0.5,
        borderColor: '#78996b',
        borderWidth: 3,
        borderOpacity: 1,
        borderStyle: BorderStyle.DASHED,
        fontFamily: FontFamily.OPEN_SANS,
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
    case TEAM_INTERACTIONS.Xaas:
    default:
      return {
        shapeType: ShapeType.TRIANGLE,
        backgroundColor: '#DBDBDB',
        backgroundOpacity: 0.5,
        borderColor: '#999696',
        borderWidth: 3,
        borderOpacity: 1,
        borderStyle: BorderStyle.DASHED,
        fontFamily: FontFamily.OPEN_SANS,
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

export function getTeamInteractionName(teamInteraction?: TEAM_INTERACTIONS): string {
  switch (teamInteraction) {
    case TEAM_INTERACTIONS.Collaboration:
      return 'Collaboration'
    case TEAM_INTERACTIONS.Facilitating:
      return 'Facilitating'
    case TEAM_INTERACTIONS.Xaas:
      return 'Xaas'
    default:
      return 'none'
  }
}

export function getTeamInteractionShapeSize(teamInteraction?: TEAM_INTERACTIONS): {height: number; width: number} {
  let width = 150
  let height = 150
  switch (teamInteraction) {
    case TEAM_INTERACTIONS.Collaboration:
      width = 300
      height = 100
      break
    case TEAM_INTERACTIONS.Facilitating:
      width = 130
      height = 130
      break
    case TEAM_INTERACTIONS.Xaas:
      width = 100
      height = 100
      break
  }
  return {width, height}
}

export function getTeamInteractionDnDPreview(teamInteraction?: TEAM_INTERACTIONS): string {
  const imgPrefix = 'data:image/svg+xml,'
  switch (teamInteraction) {
    case TEAM_INTERACTIONS.Collaboration:
      return imgPrefix + CollaborationIcon
    case TEAM_INTERACTIONS.Facilitating:
      return imgPrefix + FacilitatingIcon
    case TEAM_INTERACTIONS.Xaas:
    default:
      return imgPrefix + XaasIcon
  }
}

export function getTeamInteractionFromClassList(classList: DOMTokenList): TEAM_INTERACTIONS {
  let teamInteraction = TEAM_INTERACTIONS.Collaboration
  if (classList.contains('collaboration-btn')) teamInteraction = TEAM_INTERACTIONS.Collaboration
  else if (classList.contains('facilitating-btn')) teamInteraction = TEAM_INTERACTIONS.Facilitating
  else if (classList.contains('xaas-btn')) teamInteraction = TEAM_INTERACTIONS.Xaas

  return teamInteraction
}
