import { TEAM_ENUM, TeamElementInterface, TeamElementStyleInterface } from './team-static';
import ShapeType from '../helpers/ShapeTypes';

import UndefinedIcon from '../assets/images/tt/icon-undefined.svg';

export class TeamSupplementary implements TeamElementInterface {
  static TeamEnums = [TEAM_ENUM.UndefinedTeam];
  private teamEnum: TEAM_ENUM;

  constructor(teamEnum: TEAM_ENUM) {
    this.teamEnum = teamEnum;
  }

  getTeamEnum(): TEAM_ENUM {
    return this.teamEnum;
  }

  getShape(): ShapeType {
    switch (this.teamEnum) {
      case TEAM_ENUM.UndefinedTeam:
      default:
        return ShapeType.RoundRectangle;
    }
  }

  getStyle(): TeamElementStyleInterface {
    switch (this.teamEnum) {
      case TEAM_ENUM.UndefinedTeam:
      default:
        return {
          fillColor: '#EBEBEF',
          textAlign: 'center',
          textAlignVertical: 'middle',
          fontSize: 17
        };
    }
  }

  getName(): string {
    switch (this.teamEnum) {
      case TEAM_ENUM.UndefinedTeam:
        return 'Undefined team type';
      default:
        return 'none';
    }
  }

  getShapeSize(): { height: number; width: number } {
    let width = 150;
    let height = 150;
    switch (this.teamEnum) {
      case TEAM_ENUM.UndefinedTeam:
        width = 450;
        height = 65;
        break;
    }
    return { width, height };
  }

  getIcon(): string {
    switch (this.teamEnum) {
      case TEAM_ENUM.UndefinedTeam:
      default:
        return UndefinedIcon;
    }
  }

  getClassName(): string {
    switch (this.teamEnum) {
      case TEAM_ENUM.UndefinedTeam:
      default:
        return 'undefined-btn';
    }
  }
}
