const PlatformPreview = require('images/tt/platform.svg')
const EnablingPreview = require('images/tt/enabling.svg')
const StreamAlignedPreview = require('images/tt/stream-aligned.svg')
const ComplicatedSubsystemPreview = require('images/tt/complicated-subsystem.svg')

export enum TEAM_TYPES {
  StreamAligned = 0,
  Platform,
  Enabling,
  ComplicatedSubsystem,
}
export const AllTeamTypes = [
  TEAM_TYPES.StreamAligned,
  TEAM_TYPES.Platform,
  TEAM_TYPES.Enabling,
  TEAM_TYPES.ComplicatedSubsystem,
]

export function getTeamStyle(
  teamType: TEAM_TYPES,
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
  switch (teamType) {
    case TEAM_TYPES.StreamAligned:
      return {
        shapeType: 7, // ROUNDER
        backgroundColor: '#FFEDB8',
        backgroundOpacity: 1,
        borderColor: '#FFD966',
        borderWidth: 3,
        borderOpacity: 1,
        borderStyle: 2,
        fontFamily: 10,
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
    case TEAM_TYPES.Enabling:
      return {
        shapeType: 7, // ROUNDER
        backgroundColor: '#DFBDCF',
        backgroundOpacity: 1,
        borderColor: '#D09CB7',
        borderWidth: 3,
        borderOpacity: 1,
        borderStyle: 2,
        fontFamily: 10,
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

    case TEAM_TYPES.Platform:
      return {
        shapeType: 3, // RECTANGLE
        backgroundColor: '#B7CDF1',
        backgroundOpacity: 1,
        borderColor: '#6D9EEB',
        borderWidth: 3,
        borderOpacity: 1,
        borderStyle: 2,
        fontFamily: 10,
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

    case TEAM_TYPES.ComplicatedSubsystem:
      return {
        shapeType: 18, // OCTAGONE
        backgroundColor: '#FFC08B',
        backgroundOpacity: 1,
        borderColor: '#E88814',
        borderWidth: 3,
        borderOpacity: 1,
        borderStyle: 2,
        fontFamily: 10,
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

export function getTeamName(teamType: TEAM_TYPES): string {
  switch (teamType) {
    case TEAM_TYPES.StreamAligned:
      return 'Stream-aligned team'
    case TEAM_TYPES.Platform:
      return 'Platform team'
    case TEAM_TYPES.Enabling:
      return 'Enabling team'
    case TEAM_TYPES.ComplicatedSubsystem:
      return 'Complicated Subsystem team'
    default:
      return 'none'
  }
}

export function getTeamShapeSize(teamType: TEAM_TYPES): {height: number; width: number} {
  let height = 150
  let width = 150
  switch (teamType) {
    case TEAM_TYPES.StreamAligned:
    case TEAM_TYPES.Platform:
      height = 65
      width = 450
      break
    case TEAM_TYPES.Enabling:
      height = 120
      width = 95
      break
    case TEAM_TYPES.ComplicatedSubsystem:
      height = 120
      width = 180
      break
  }
  return {width, height}
}

export function getTeamDnDPreview(teamType: TEAM_TYPES): string {
  const imgPrefix = 'data:image/svg+xml,'
  switch (teamType) {
    case TEAM_TYPES.StreamAligned:
      return imgPrefix + StreamAlignedPreview
    case TEAM_TYPES.Enabling:
      return imgPrefix + EnablingPreview
    case TEAM_TYPES.Platform:
      return imgPrefix + PlatformPreview
    case TEAM_TYPES.ComplicatedSubsystem:
      return imgPrefix + ComplicatedSubsystemPreview
  }
}

export function getTeamTypeFromClassList(classList: DOMTokenList): TEAM_TYPES {
  let teamType = TEAM_TYPES.ComplicatedSubsystem
  if (classList.contains('stream-aligned-btn')) teamType = TEAM_TYPES.StreamAligned
  else if (classList.contains('platform-btn')) teamType = TEAM_TYPES.Platform
  else if (classList.contains('enabling-btn')) teamType = TEAM_TYPES.Enabling

  return teamType
}
