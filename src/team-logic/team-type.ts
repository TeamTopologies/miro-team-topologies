import {TEAM_ENUM, TeamElement, TeamElementStyle} from './team-static'

const PlatformPreview = require('images/tt/platform.svg')
const EnablingPreview = require('images/tt/enabling.svg')
const StreamAlignedPreview = require('images/tt/stream-aligned.svg')
const ComplicatedSubsystemPreview = require('images/tt/complicated-subsystem.svg')

const StreamAlignedIcon = require('images/tt/icon-stream-aligned.svg')
const PlatformIcon = require('images/tt/icon-platform.svg')
const EnablingIcon = require('images/tt/icon-enabling.svg')
const ComplicatedSubsystemIcon = require('images/tt/icon-complicated-subsystem.svg')

export class TeamType implements TeamElement {
  static TeamEnums = [TEAM_ENUM.StreamAligned, TEAM_ENUM.Platform, TEAM_ENUM.Enabling, TEAM_ENUM.ComplicatedSubsystem]
  private teamEnum: TEAM_ENUM

  constructor(teamEnum: TEAM_ENUM) {
    this.teamEnum = teamEnum
  }
  getTeamEnum(): TEAM_ENUM {
    return this.teamEnum
  }

  getStyle(): TeamElementStyle {
    switch (this.teamEnum) {
      case TEAM_ENUM.StreamAligned:
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
      case TEAM_ENUM.Enabling:
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

      case TEAM_ENUM.Platform:
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

      case TEAM_ENUM.ComplicatedSubsystem:
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

  getName(): string {
    switch (this.teamEnum) {
      case TEAM_ENUM.StreamAligned:
        return 'Stream-aligned team'
      case TEAM_ENUM.Platform:
        return 'Platform team'
      case TEAM_ENUM.Enabling:
        return 'Enabling team'
      case TEAM_ENUM.ComplicatedSubsystem:
        return 'Complicated Subsystem team'
      default:
        return 'none'
    }
  }

  getShapeSize(): {height: number; width: number} {
    let width = 150
    let height = 150
    switch (this.teamEnum) {
      case TEAM_ENUM.StreamAligned:
      case TEAM_ENUM.Platform:
        width = 450
        height = 65
        break
      case TEAM_ENUM.Enabling:
        width = 95
        height = 120
        break
      case TEAM_ENUM.ComplicatedSubsystem:
        width = 200
        height = 120
        break
    }
    return {width, height}
  }

  getPreview(): string {
    const imgPrefix = 'data:image/svg+xml,'
    return imgPrefix + this.getPreviewSvg()
  }

  getIcon(): string {
    switch (this.teamEnum) {
      case TEAM_ENUM.StreamAligned:
        return StreamAlignedIcon
      case TEAM_ENUM.Enabling:
        return EnablingIcon
      case TEAM_ENUM.Platform:
        return PlatformIcon
      case TEAM_ENUM.ComplicatedSubsystem:
      default:
        return ComplicatedSubsystemIcon
    }
  }

  getClassName(): string {
    switch (this.teamEnum) {
      case TEAM_ENUM.StreamAligned:
        return 'stream-aligned-btn'
      case TEAM_ENUM.Enabling:
        return 'enabling-btn'
      case TEAM_ENUM.Platform:
        return 'platform-btn'
      default:
        return 'complicated-subsystem-btn'
    }
  }

  getShapeType(): string {
    return miro.enums.shapeType[this.getStyle().shapeType].toLowerCase()
  }

  private getPreviewSvg(): string {
    switch (this.teamEnum) {
      case TEAM_ENUM.StreamAligned:
        return StreamAlignedPreview
      case TEAM_ENUM.Enabling:
        return EnablingPreview
      case TEAM_ENUM.Platform:
        return PlatformPreview
      case TEAM_ENUM.ComplicatedSubsystem:
      default:
        return ComplicatedSubsystemPreview
    }
  }
}
