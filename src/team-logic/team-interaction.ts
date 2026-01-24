import { TEAM_ENUM, TeamElementStyleInterface, TeamElementInterface } from './team-static';
import ShapeType from '../helpers/ShapeTypes';

import CollaborationIcon from '../assets/images/ti/collaboration.svg';
import FacilitatingIcon from '../assets/images/ti/facilitating.svg';
import UndefinedInteractionIcon from '../assets/images/ti/undefined-interaction.svg';
import TemporalCouplingIcon from '../assets/images/ti/temporal-coupling.svg';
import HandoverIcon from '../assets/images/ti/handover.svg';
import XaasIcon from '../assets/images/ti/xaas.svg';

export class TeamInteraction implements TeamElementInterface {
  static TeamEnums = [TEAM_ENUM.Collaboration, TEAM_ENUM.Facilitating, TEAM_ENUM.Xaas, TEAM_ENUM.UndefinedInterction, TEAM_ENUM.TemporalCoupling, TEAM_ENUM.Handover];
  private teamEnum: TEAM_ENUM;

  constructor(teamEnum: TEAM_ENUM) {
    this.teamEnum = teamEnum;
  }

  getTeamEnum(): TEAM_ENUM {
    return this.teamEnum;
  }

  getShape(): ShapeType {
    switch (this.teamEnum) {
      case TEAM_ENUM.UndefinedInterction:
        return ShapeType.Rectangle;
      case TEAM_ENUM.TemporalCoupling:
        return ShapeType.Trapezoid;
      case TEAM_ENUM.Handover:
        return ShapeType.Rhombus;
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
      case TEAM_ENUM.UndefinedInterction:
        return {
          borderStyle: 'dashed',
          borderColor: '#9B99AF',
          fillColor: '#EBEBEF',
          textAlign: 'center',
          textAlignVertical: 'middle',
          fontSize: 17,
          fillOpacity: 0.5
        };
      case TEAM_ENUM.TemporalCoupling:
        return {
          borderStyle: 'dashed',
          borderColor: '#9B99AF',
          fillColor: '#EBEBEF',
          textAlign: 'center',
          textAlignVertical: 'middle',
          fontSize: 17,
          fillOpacity: 0.5
        };
      case TEAM_ENUM.Handover:
        return {
          borderStyle: 'dashed',
          borderColor: '#9B99AF',
          fillColor: '#EBEBEF',
          textAlign: 'center',
          textAlignVertical: 'middle',
          fontSize: 17,
          fillOpacity: 0.5
        };
      case TEAM_ENUM.Collaboration:
        return {
          borderStyle: 'dashed',
          borderColor: '#967EE2',
          fillColor: '#E0DBED',
          textAlign: 'center',
          textAlignVertical: 'middle',
          fontSize: 17
        };
      case TEAM_ENUM.Facilitating:
        return {
          borderStyle: 'dashed',
          borderColor: '#78996B',
          fillColor: '#E3EFDE',
          textAlign: 'center',
          textAlignVertical: 'middle',
          fontSize: 17
        };
      case TEAM_ENUM.Xaas:
      default:
        return {
          borderStyle: 'dashed',
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
      case TEAM_ENUM.UndefinedInterction:
        return 'Undefined Interaction';
      case TEAM_ENUM.TemporalCoupling:
          return 'Temporal Coupling';
      case TEAM_ENUM.Handover:
        return 'Handover';
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

  getRotation(): number {
    switch (this.teamEnum) {
      case TEAM_ENUM.TemporalCoupling:
        return 180;
      default:
        return 0;
    }
  }

  getShapeSize(): { height: number; width: number } {
    let width = 150;
    let height = 150;
    switch (this.teamEnum) {
      case TEAM_ENUM.UndefinedInterction:
        width = 100;
        height = 100;
        break;
      case TEAM_ENUM.TemporalCoupling:
        width = 200;
        height = 100;
        break;
      case TEAM_ENUM.Handover:
        width = 100;
        height = 100;
        break;
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
      case TEAM_ENUM.UndefinedInterction:
        return UndefinedInteractionIcon;
      case TEAM_ENUM.TemporalCoupling:
        return TemporalCouplingIcon;
      case TEAM_ENUM.Handover:
        return HandoverIcon;
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
      case TEAM_ENUM.Handover:
        return 'handover-btn';
      case TEAM_ENUM.UndefinedInterction:
        return 'undefined-interaction-btn';
      case TEAM_ENUM.TemporalCoupling:
        return 'temporal-coupling-btn';
      case TEAM_ENUM.Xaas:
      default:
        return 'xaas-btn';
    }
  }
}
