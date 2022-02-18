import { TEAM_ENUM, TeamElement, TeamElementStyle } from './team-static';

const UndefinedPreview = require('images/tt/undefined.svg');

const UndefinedIcon = require('images/tt/icon-undefined.svg');

export class TeamSupplementary implements TeamElement {
  static TeamEnums = [TEAM_ENUM.UndefinedTeam];
  private teamEnum: TEAM_ENUM;

  constructor(teamEnum: TEAM_ENUM) {
    this.teamEnum = teamEnum;
  }

  getTeamEnum(): TEAM_ENUM {
    return this.teamEnum;
  }

  getStyle(): TeamElementStyle {
    switch (this.teamEnum) {
      case TEAM_ENUM.UndefinedTeam:
      default:
        return {
          shapeType: miro.enums.shapeType.PILL,
          backgroundColor: '#EBEBEF',
          backgroundOpacity: 1,
          borderColor: '#9B99AF',
          borderWidth: 3,
          borderOpacity: 1,
          borderStyle: miro.enums.borderStyle.DASHED,
          fontFamily: miro.enums.fontFamily.OPEN_SANS,
          textColor: '#000',
          textAlign: 'c',
          textAlignVertical: 'm',
          fontSize: 17,
          bold: 0,
          italic: 0,
          underline: 0,
          strike: 0,
          highlighting: ''
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

  getPreview(): string {
    const imgPrefix = 'data:image/svg+xml,';
    return imgPrefix + this.getPreviewSvg();
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

  private getPreviewSvg(): string {
    switch (this.teamEnum) {
      case TEAM_ENUM.UndefinedTeam:
        default:
        return UndefinedPreview;
    }
  }
}
