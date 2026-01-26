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
  FlowOfValue = 8,
  UndefinedInterction = 9,
  TemporalCoupling = 10,
  Handover = 11,
  ValueStreamGroup = 12,
  PlatformGroup = 13,
  UndefinedGroup = 14
}
export interface TeamElementStyleInterface {
  borderStyle: string | undefined;
  borderColor: string | undefined;
  fillColor?: string | undefined;
  fontFamily?: FontFamily | undefined;
  fontSize?: number | undefined;
  textAlign?: TextAlign | undefined;
  textAlignVertical?: TextAlignVertical | undefined;
  fillOpacity?: number | undefined;
}

export interface TeamElementInterface {
  getClassName(): string;
  getIcon(): string;
  getName(): string;
  getRotation(): number;
  getShape(): ShapeType;
  getShapeSize(): { height: number; width: number };
  getStyle(): TeamElementStyleInterface;
  getTeamEnum(): TEAM_ENUM;
}
