import { TEAM_ENUM, TeamElement, TeamElementStyle } from './team-static';

import FlowOfChangePreview from '../assets/images/tt/flowofchange.svg';
import ShapeType from '../helpers/ShapeTypes';

export { FlowOfChangePreview };

export class TeamOther implements TeamElement {
  static TeamEnums = [TEAM_ENUM.FlowOfChange];
  private teamEnum: TEAM_ENUM;

  constructor(teamEnum: TEAM_ENUM) {
    this.teamEnum = teamEnum;
  }

  getTeamEnum(): TEAM_ENUM {
    return this.teamEnum;
  }

  getShape(): ShapeType {
    return ShapeType.RightArrow;
  }

  getStyle(): TeamElementStyle {
    return {
      fillColor: '#FFFFFF',
      textAlign: 'center',
      textAlignVertical: 'middle',
      fontSize: 17
    };
  }

  getName(): string {
    return 'Flow of change';
  }

  getShapeSize(): { height: number; width: number } {
    const width = 450;
    const height = 150;
    return { width, height };
  }

  getPreview(): string {
    const imgPrefix = 'data:image/svg+xml,';
    return imgPrefix + FlowOfChangePreview;
  }
  getIcon(): string {
    return this.getPreview();
  }
  getClassName(): string {
    return 'flowofchange-btn';
  }
}
