import { TEAM_ENUM, TeamElementStyle, TeamElement } from './team-static';
import CollaborationIcon from '../assets/images/ti/collaboration.svg';
import FacilitatingIcon from '../assets/images/ti/facilitating.svg';
import XaasIcon from '../assets/images/ti/xaas.svg';
import ShapeType from '../helpers/ShapeTypes';

export const TeamInteractionPreview = {
  CollaborationIcon,
  FacilitatingIcon,
  XaasIcon
};

export class TeamInteraction implements TeamElement {
  static TeamEnums = [TEAM_ENUM.Collaboration, TEAM_ENUM.Facilitating, TEAM_ENUM.Xaas];
  private teamEnum: TEAM_ENUM;

  constructor(teamEnum: TEAM_ENUM) {
    this.teamEnum = teamEnum;
  }
  getTeamEnum(): TEAM_ENUM {
    return this.teamEnum;
  }
  getStyle(): TeamElementStyle {
    switch (this.teamEnum) {
      case TEAM_ENUM.Collaboration:
        return {
          shapeType: ShapeType.Parallelogram,
          fillColor: '#E0DBED',
          textAlign: 'center',
          textAlignVertical: 'middle',
          fontSize: 17,
        };
      case TEAM_ENUM.Facilitating:
        return {
          shapeType: ShapeType.Circle,
          fillColor: '#E3EFDE',
          textAlign: 'center',
          textAlignVertical: 'middle',
          fontSize: 17,
        };
      case TEAM_ENUM.Xaas:
      default:
        return {
          shapeType: ShapeType.Triangle,
          fillColor: '#DBDBDB',
          textAlign: 'center',
          textAlignVertical: 'middle',
          fontSize: 17,
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

  getPreview(): string {
    const imgPrefix = 'data:image/svg+xml,';
    return imgPrefix + this.getPreviewSvg();
  }

  getIcon(): string {
    return this.getPreview();
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

  private getPreviewSvg(): string {
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
}
