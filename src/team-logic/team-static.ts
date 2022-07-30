import { FontFamily, TextAlign, TextAlignVertical, ShapeType } from '@mirohq/websdk-types';

export enum TEAM_ENUM {
  StreamAligned = 0,
  Platform = 1,
  Enabling = 2,
  UndefinedTeam = 3,
  ComplicatedSubsystem = 4,
  Collaboration = 5,
  Facilitating = 6,
  Xaas = 7,
  FlowOfChange = 8
}
export interface TeamElementStyle {
  fillColor?: string | undefined;
  fontFamily?: FontFamily | undefined;
  fontSize?: number | undefined;
  textAlign?: TextAlign | undefined;
  textAlignVertical?: TextAlignVertical | undefined;
  shapeType: ShapeType;
}

export interface TeamElement {
  getTeamEnum(): TEAM_ENUM;
  getStyle(): TeamElementStyle;
  getName(): string;
  getShapeSize(): { height: number; width: number };
  getPreview(): string;
  getIcon(): string;
  getClassName(): string;
}
