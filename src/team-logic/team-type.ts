import { TEAM_ENUM, TeamElement, TeamElementStyle } from './team-static';

import PlatformPreview from '../assets/images/tt/platform.svg';
import EnablingPreview from '../assets/images/tt/enabling.svg';
import StreamAlignedPreview from '../assets/images/tt/stream-aligned.svg';
import ComplicatedSubsystemPreview from '../assets/images/tt/complicated-subsystem.svg';

import StreamAlignedIcon from '../assets/images/tt/icon-stream-aligned.svg';
import PlatformIcon from '../assets/images/tt/icon-platform.svg';
import EnablingIcon from '../assets/images/tt/icon-enabling.svg';
import ComplicatedSubsystemIcon from '../assets/images/tt/icon-complicated-subsystem.svg';
import ShapeType from '../helpers/ShapeTypes';

export class TeamType implements TeamElement {
  static TeamEnums = [TEAM_ENUM.StreamAligned, TEAM_ENUM.Platform, TEAM_ENUM.Enabling, TEAM_ENUM.ComplicatedSubsystem];
  private teamEnum: TEAM_ENUM;

  constructor(teamEnum: TEAM_ENUM) {
    this.teamEnum = teamEnum;
  }
  getTeamEnum(): TEAM_ENUM {
    return this.teamEnum;
  }

  getStyle(): TeamElementStyle {
    switch (this.teamEnum) {
      case TEAM_ENUM.StreamAligned:
        return {
          shapeType: ShapeType.RoundRectangle,
          fillColor: '#FFEDB8',
          textAlign: 'center',
          textAlignVertical: 'middle',
          fontSize: 17
        };
      case TEAM_ENUM.Enabling:
        return {
          shapeType: ShapeType.RoundRectangle,
          fillColor: '#DFBDCF',
          textAlign: 'center',
          textAlignVertical: 'middle',
          fontSize: 17
        };

      case TEAM_ENUM.Platform:
        return {
          shapeType: ShapeType.Rectangle,
          fillColor: '#B7CDF1',
          textAlign: 'center',
          textAlignVertical: 'middle',
          fontSize: 17
        };

      case TEAM_ENUM.ComplicatedSubsystem:
      default:
        return {
          shapeType: ShapeType.Octagon,
          fillColor: '#FFC08B',
          textAlign: 'center',
          textAlignVertical: 'middle',
          fontSize: 17
        };
    }
  }

  getName(): string {
    switch (this.teamEnum) {
      case TEAM_ENUM.StreamAligned:
        return 'Stream-aligned team';
      case TEAM_ENUM.Platform:
        return 'Platform team';
      case TEAM_ENUM.Enabling:
        return 'Enabling team';
      case TEAM_ENUM.ComplicatedSubsystem:
        return 'Complicated Subsystem team';
      default:
        return 'none';
    }
  }

  getShapeSize(): { height: number; width: number } {
    let width = 150;
    let height = 150;
    switch (this.teamEnum) {
      case TEAM_ENUM.StreamAligned:
      case TEAM_ENUM.Platform:
        width = 450;
        height = 65;
        break;
      case TEAM_ENUM.Enabling:
        width = 95;
        height = 120;
        break;
      case TEAM_ENUM.ComplicatedSubsystem:
        width = 200;
        height = 120;
        break;
    }
    return { width, height };
  }

  getPreview(): string {
    const imgPrefix = 'data:image/svg+xml,';
    return imgPrefix + this.getPreviewSvg();
  }

  getIcon(): string {
    switch (this.teamEnum) {
      case TEAM_ENUM.StreamAligned:
        return StreamAlignedIcon;
      case TEAM_ENUM.Enabling:
        return EnablingIcon;
      case TEAM_ENUM.Platform:
        return PlatformIcon;
      case TEAM_ENUM.ComplicatedSubsystem:
      default:
        return ComplicatedSubsystemIcon;
    }
  }

  getClassName(): string {
    switch (this.teamEnum) {
      case TEAM_ENUM.StreamAligned:
        return 'stream-aligned-btn';
      case TEAM_ENUM.Enabling:
        return 'enabling-btn';
      case TEAM_ENUM.Platform:
        return 'platform-btn';
      default:
        return 'complicated-subsystem-btn';
    }
  }

  private getPreviewSvg(): string {
    switch (this.teamEnum) {
      case TEAM_ENUM.StreamAligned:
        return StreamAlignedPreview;
      case TEAM_ENUM.Enabling:
        return EnablingPreview;
      case TEAM_ENUM.Platform:
        return PlatformPreview;
      case TEAM_ENUM.ComplicatedSubsystem:
      default:
        return ComplicatedSubsystemPreview;
    }
  }
}
