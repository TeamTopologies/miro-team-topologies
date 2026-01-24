import { TEAM_ENUM, TeamElementStyleInterface, TeamElementInterface } from './team-static';

import ShapeType from '../helpers/ShapeTypes';

import FlowOfValueIcon from '../assets/images/tt/flowofvalue.svg';

export class TeamOther implements TeamElementInterface {
  static TeamEnums = [TEAM_ENUM.FlowOfValue];
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

  getStyle(): TeamElementStyleInterface {
    return {
      borderStyle: 'dashed',
      borderColor: '#000000',
      fillColor: '#FFFFFF',
      textAlign: 'center',
      textAlignVertical: 'middle',
      fontSize: 17
    };
  }

  getName(): string {
    return 'Flow of value: {Scenario}';
  }

  getRotation(): number {
    return 0;
  }

  getShapeSize(): { height: number; width: number } {
    const width = 450;
    const height = 150;
    return { width, height };
  }

  getIcon(): string {
    return FlowOfValueIcon;
  }

  getClassName(): string {
    return 'flowofvalue-btn';
  }
}
