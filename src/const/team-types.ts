const PlatformIcon = require('images/platform.svg')

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

export function getTeamDnDPreview(teamType: TEAM_TYPES) {
  switch (teamType) {
    case TEAM_TYPES.StreamAligned:
      return `data:image/svg+xml,%3Csvg width='152' height='66' xmlns='http://www.w3.org/2000/svg'%3E%3Cg%3E%3Crect stroke='null' x='0' y='0' fill-opacity='0.5' fill='%232d9bf0' height='140' width='140'/%3E%3C/g%3E%3C/svg%3E`
    case TEAM_TYPES.Enabling:
      return PlatformIcon
    case TEAM_TYPES.Platform:
      return `data:image/svg+xml,` + PlatformIcon
    case TEAM_TYPES.ComplicatedSubsystem:
      return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'  fill-opacity='0.5' %3E
        %3Cpath fill='%23FFC08B' stroke='%23E88814' stroke-width='2' d='M3,6 L3,18 L6,21 L18,21 L21,18 L21,6 L18,3 L6,3 Z' /%3E
        %3C/svg%3E`
  }
}
