import { TEAM_ENUM, TeamElementStyleInterface, TeamElementInterface } from './team-static';
import ShapeType from '../helpers/ShapeTypes';

import CollaborationIcon from '../assets/images/ti/collaboration.svg';
import FacilitatingIcon from '../assets/images/ti/facilitating.svg';
import XaasIcon from '../assets/images/ti/xaas.svg';

export class TeamInteraction implements TeamElementInterface {
  static TeamEnums = [TEAM_ENUM.Collaboration, TEAM_ENUM.Facilitating, TEAM_ENUM.Xaas];
  private teamEnum: TEAM_ENUM;

  constructor(teamEnum: TEAM_ENUM) {
    this.teamEnum = teamEnum;
  }

  getTeamEnum(): TEAM_ENUM {
    return this.teamEnum;
  }

  getShape(): ShapeType {
    switch (this.teamEnum) {
      case TEAM_ENUM.Collaboration:
        return ShapeType.Parallelogram;
      case TEAM_ENUM.Facilitating:
        return ShapeType.Circle;
      case TEAM_ENUM.Xaas:
      default:
        return ShapeType.Triangle;
    }
  }

  getStyle(): TeamElementStyleInterface {
    switch (this.teamEnum) {
      case TEAM_ENUM.Collaboration:
        return {
          borderColor: '#967EE2',
          fillColor: '#E0DBED',
          textAlign: 'center',
          textAlignVertical: 'middle',
          fontSize: 17
        };
      case TEAM_ENUM.Facilitating:
        return {
          borderColor: '#78996B',
          fillColor: '#E3EFDE',
          textAlign: 'center',
          textAlignVertical: 'middle',
          fontSize: 17
        };
      case TEAM_ENUM.Xaas:
      default:
        return {
          borderColor: '#999696',
          fillColor: '#DBDBDB',
          textAlign: 'center',
          textAlignVertical: 'middle',
          fontSize: 17
        };
    }
  }

  getName(): string {
    switch (this.teamEnum) {
      case TEAM_ENUM.Collaboration:
        return 'Collaboration';
      case TEAM_ENUM.Facilitating:
        return 'Facilitating';
      case TEAM_ENUM.Xaas:
        return 'Xaas';
      default:
        return 'none';
    }
  }

  getShapeSize(): { height: number; width: number } {
    let width = 150;
    let height = 150;
    switch (this.teamEnum) {
      case TEAM_ENUM.Collaboration:
        width = 300;
        height = 100;
        break;
      case TEAM_ENUM.Facilitating:
        width = 130;
        height = 130;
        break;
      case TEAM_ENUM.Xaas:
        width = 100;
        height = 100;
        break;
    }
    return { width, height };
  }

  getIcon(): string {
    switch (this.teamEnum) {
      case TEAM_ENUM.Collaboration:
        return CollaborationIcon;
      case TEAM_ENUM.Facilitating:
        return FacilitatingIcon;
      case TEAM_ENUM.Xaas:
      default:
        return XaasIcon;
    }
  }

  getClassName(): string {
    switch (this.teamEnum) {
      case TEAM_ENUM.Collaboration:
        return 'collaboration-btn';
      case TEAM_ENUM.Facilitating:
        return 'facilitating-btn';
      case TEAM_ENUM.Xaas:
      default:
        return 'xaas-btn';
    }
  }
}
