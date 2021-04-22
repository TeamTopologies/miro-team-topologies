import {TEAM_ELEMENTS} from './team-static'

const PlatformPreview = require('images/tt/platform.svg')
const EnablingPreview = require('images/tt/enabling.svg')
const StreamAlignedPreview = require('images/tt/stream-aligned.svg')
const ComplicatedSubsystemPreview = require('images/tt/complicated-subsystem.svg')

const StreamAlignedIcon = require('images/tt/icon-stream-aligned.svg')
const PlatformIcon = require('images/tt/icon-platform.svg')
const EnablingIcon = require('images/tt/icon-enabling.svg')
const ComplicatedSubsystemIcon = require('images/tt/icon-complicated-subsystem.svg')

export const TeamTypePreviews = {
  PlatformPreview,
  EnablingPreview,
  StreamAlignedPreview,
  ComplicatedSubsystemPreview,
}

export const TeamTypeIcons = {
  StreamAlignedIcon,
  PlatformIcon,
  EnablingIcon,
  ComplicatedSubsystemIcon,
}

export const AllTeamTypes = [
  TEAM_ELEMENTS.StreamAligned,
  TEAM_ELEMENTS.Platform,
  TEAM_ELEMENTS.Enabling,
  TEAM_ELEMENTS.ComplicatedSubsystem,
]

export function getTeamTypeStyle(
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
  switch (teamType) {
    case TEAM_ELEMENTS.StreamAligned:
      return {
        shapeType: miro.enums.shapeType.ROUNDER,
        backgroundColor: '#FFEDB8',
        backgroundOpacity: 1,
        borderColor: '#FFD966',
        borderWidth: 3,
        borderOpacity: 1,
        borderStyle: miro.enums.borderStyle.NORMAL,
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
    case TEAM_ELEMENTS.Enabling:
      return {
        shapeType: miro.enums.shapeType.ROUNDER,
        backgroundColor: '#DFBDCF',
        backgroundOpacity: 1,
        borderColor: '#D09CB7',
        borderWidth: 3,
        borderOpacity: 1,
        borderStyle: miro.enums.borderStyle.NORMAL,
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

    case TEAM_ELEMENTS.Platform:
      return {
        shapeType: miro.enums.shapeType.RECTANGLE,
        backgroundColor: '#B7CDF1',
        backgroundOpacity: 1,
        borderColor: '#6D9EEB',
        borderWidth: 3,
        borderOpacity: 1,
        borderStyle: miro.enums.borderStyle.NORMAL,
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

    case TEAM_ELEMENTS.ComplicatedSubsystem:
    default:
      return {
        shapeType: miro.enums.shapeType.OCTAGON,
        backgroundColor: '#FFC08B',
        backgroundOpacity: 1,
        borderColor: '#E88814',
        borderWidth: 3,
        borderOpacity: 1,
        borderStyle: 2,
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

export function getTeamTypeName(teamType?: TEAM_ELEMENTS): string {
  switch (teamType) {
    case TEAM_ELEMENTS.StreamAligned:
      return 'Stream-aligned team'
    case TEAM_ELEMENTS.Platform:
      return 'Platform team'
    case TEAM_ELEMENTS.Enabling:
      return 'Enabling team'
    case TEAM_ELEMENTS.ComplicatedSubsystem:
      return 'Complicated Subsystem team'
    default:
      return 'none'
  }
}

export function getTeamTypeShapeSize(teamType?: TEAM_ELEMENTS): {height: number; width: number} {
  let width = 150
  let height = 150
  switch (teamType) {
    case TEAM_ELEMENTS.StreamAligned:
    case TEAM_ELEMENTS.Platform:
      width = 450
      height = 65
      break
    case TEAM_ELEMENTS.Enabling:
      width = 95
      height = 120
      break
    case TEAM_ELEMENTS.ComplicatedSubsystem:
      width = 200
      height = 120
      break
  }
  return {width, height}
}

export function getTeamTypeDnDPreview(teamType?: TEAM_ELEMENTS): string {
  const imgPrefix = 'data:image/svg+xml,'
  switch (teamType) {
    case TEAM_ELEMENTS.StreamAligned:
      return imgPrefix + StreamAlignedPreview
    case TEAM_ELEMENTS.Enabling:
      return imgPrefix + EnablingPreview
    case TEAM_ELEMENTS.Platform:
      return imgPrefix + PlatformPreview
    case TEAM_ELEMENTS.ComplicatedSubsystem:
    default:
      return imgPrefix + ComplicatedSubsystemPreview
  }
}
