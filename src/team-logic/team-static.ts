import { FontFamily, TextAlign, TextAlignVertical } from '@mirohq/websdk-types';
import ShapeType from '../helpers/ShapeTypes';

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
export interface TeamElementStyleInterface {
  fillColor?: string | undefined;
  fontFamily?: FontFamily | undefined;
  fontSize?: number | undefined;
  textAlign?: TextAlign | undefined;
  textAlignVertical?: TextAlignVertical | undefined;
}

export interface TeamElementInterface {
  getClassName(): string;
  getIcon(): string;
  getName(): string;
  getShape(): ShapeType;
  getShapeSize(): { height: number; width: number };
  getStyle(): TeamElementStyleInterface;
  getTeamEnum(): TEAM_ENUM;
}
