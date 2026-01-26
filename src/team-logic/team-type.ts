import { TEAM_ENUM, TeamElementInterface, TeamElementStyleInterface } from './team-static';
import ShapeType from '../helpers/ShapeTypes';

import ValueStreamGroupIcon from '../assets/images/tt/icon-value-stream-group.svg';
import PlatformGroupIcon from '../assets/images/tt/icon-platform-group.svg';
import UndefinedTeamIcon from '../assets/images/tt/icon-undefined.svg';
import UndefinedGroupIcon from '../assets/images/tt/icon-undefined-group.svg';
import StreamAlignedIcon from '../assets/images/tt/icon-stream-aligned.svg';
import PlatformIcon from '../assets/images/tt/icon-platform.svg';
import EnablingIcon from '../assets/images/tt/icon-enabling.svg';
import ComplicatedSubsystemIcon from '../assets/images/tt/icon-complicated-subsystem.svg';

export class TeamType implements TeamElementInterface {
  static GroupingEnums = [TEAM_ENUM.ValueStreamGroup, TEAM_ENUM.PlatformGroup, TEAM_ENUM.UndefinedGroup];
  static TeamEnums = [TEAM_ENUM.StreamAligned, TEAM_ENUM.Enabling, TEAM_ENUM.ComplicatedSubsystem, TEAM_ENUM.Platform, TEAM_ENUM.UndefinedTeam];
  
  private teamEnum: TEAM_ENUM;

  constructor(teamEnum: TEAM_ENUM) {
    this.teamEnum = teamEnum;
  }
  getTeamEnum(): TEAM_ENUM {
    return this.teamEnum;
  }

  getShape(): ShapeType {
    switch (this.teamEnum) {
      case TEAM_ENUM.ValueStreamGroup:
      case TEAM_ENUM.Platform:
      case TEAM_ENUM.PlatformGroup:
      case TEAM_ENUM.UndefinedGroup:
        return ShapeType.Rectangle;
      case TEAM_ENUM.StreamAligned:
      case TEAM_ENUM.Enabling:
      case TEAM_ENUM.UndefinedTeam:
        return ShapeType.RoundRectangle;
      case TEAM_ENUM.ComplicatedSubsystem:
      default:
        return ShapeType.Octagon;
    }
  }

  getStyle(): TeamElementStyleInterface {
    switch (this.teamEnum) {
      case TEAM_ENUM.ValueStreamGroup:
        return {
          borderStyle: 'dotted',
          borderColor: '#FFD966',
          fillColor: '#FFEDB8',
          textAlign: 'left',
          textAlignVertical: 'top',
          fontSize: 17,
          fillOpacity: 0.5
        };
      case TEAM_ENUM.PlatformGroup:
        return {
          borderStyle: 'dotted',
          borderColor: '#6D9EEB',
          fillColor: '#B7CDF1',
          textAlign: 'left',
          textAlignVertical: 'top',
          fontSize: 17
        };
      case TEAM_ENUM.UndefinedGroup:
        return {
          borderStyle: 'dotted',
          borderColor: '#9B99AF',
          fillColor: '#EBEBEF',
          textAlign: 'left',
          textAlignVertical: 'top',
          fontSize: 17
        };
      case TEAM_ENUM.StreamAligned:
        return {
          borderStyle: 'normal',
          borderColor: '#FFD966',
          fillColor: '#FFEDB8',
          textAlign: 'center',
          textAlignVertical: 'middle',
          fontSize: 17
        };
      case TEAM_ENUM.Enabling:
        return {
          borderStyle: 'normal',
          borderColor: '#D09CB7',
          fillColor: '#DFBDCF',
          textAlign: 'center',
          textAlignVertical: 'middle',
          fontSize: 17
        };

      case TEAM_ENUM.Platform:
        return {
          borderStyle: 'normal',
          borderColor: '#6D9EEB',
          fillColor: '#B7CDF1',
          textAlign: 'left',
          textAlignVertical: 'top',
          fontSize: 17
        };

      case TEAM_ENUM.ComplicatedSubsystem:
        return {
          borderStyle: 'normal',
          borderColor: '#E88814',
          fillColor: '#FFC08B',
          textAlign: 'center',
          textAlignVertical: 'middle',
          fontSize: 17
        };

      case TEAM_ENUM.UndefinedTeam:
      default:
        return {
          borderStyle: 'dashed',
          borderColor: '#9B99AF',
          fillColor: '#EBEBEF',
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
      case TEAM_ENUM.Enabling:
        return 'Enabling team';
      case TEAM_ENUM.ComplicatedSubsystem:
        return 'Complicated Subsystem team';
      case TEAM_ENUM.UndefinedTeam:
        return 'Undefined team type';
      case TEAM_ENUM.ValueStreamGroup:
        return 'Value Stream Grouping';
      case TEAM_ENUM.Platform:
      case TEAM_ENUM.PlatformGroup:
        return 'Platform Grouping';
      case TEAM_ENUM.UndefinedGroup:
        return 'Undefined Grouping';
      default:
        return 'none';
    }
  }

  getRotation(): number {
    return 0;
  }

  getShapeSize(): { height: number; width: number } {
    let width = 150;
    let height = 150;
    switch (this.teamEnum) {
      case TEAM_ENUM.ValueStreamGroup:
      case TEAM_ENUM.PlatformGroup:
      case TEAM_ENUM.UndefinedGroup:
        width = 450;
        height = 350;
        break;
      case TEAM_ENUM.StreamAligned:
      case TEAM_ENUM.Platform:
      case TEAM_ENUM.UndefinedTeam:
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

  getIcon(): string {
    switch (this.teamEnum) {
      case TEAM_ENUM.ValueStreamGroup:
        return ValueStreamGroupIcon;
      case TEAM_ENUM.PlatformGroup:
        return PlatformGroupIcon;
      case TEAM_ENUM.UndefinedGroup:
        return UndefinedGroupIcon;
      case TEAM_ENUM.StreamAligned:
        return StreamAlignedIcon;
      case TEAM_ENUM.Enabling:
        return EnablingIcon;
      case TEAM_ENUM.Platform:
        return PlatformIcon;
      case TEAM_ENUM.ComplicatedSubsystem:
        return ComplicatedSubsystemIcon;
      case TEAM_ENUM.UndefinedTeam:
      default:
        return UndefinedTeamIcon;
    }
  }

  getClassName(): string {
    switch (this.teamEnum) {
      case TEAM_ENUM.ValueStreamGroup:
        return 'value-stream-group-btn';
      case TEAM_ENUM.PlatformGroup:
        return 'platform-group-btn';
      case TEAM_ENUM.UndefinedGroup:
        return 'undefined-group-btn';
      case TEAM_ENUM.StreamAligned:
        return 'stream-aligned-btn';
      case TEAM_ENUM.Enabling:
        return 'enabling-btn';
      case TEAM_ENUM.Platform:
        return 'platform-btn';
      case TEAM_ENUM.ComplicatedSubsystem:
        return 'complicated-subsystem-btn';
      case TEAM_ENUM.UndefinedTeam:
      default:
        return 'undefined-team-btn';
    }
  }
}
