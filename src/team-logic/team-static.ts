export enum TEAM_ENUM {
  StreamAligned = 0,
  Platform = 1,
  Enabling = 2,
  UndefinedTeam = 3,
  ComplicatedSubsystem = 4,
  Collaboration = 5,
  Facilitating = 6,
  Xaas = 7,
  FlowOfChange = 8,
}
export interface TeamElementStyle {
  shapeType: number
  backgroundColor: string
  backgroundOpacity: number
  borderColor: string
  borderWidth: number
  borderOpacity: number
  borderStyle: number
  fontFamily: number
  textColor: string
  textAlign: string
  textAlignVertical: string
  fontSize: number
  bold: number
  italic: number
  underline: number
  strike: number
  highlighting: string
}
export interface TeamElement {
  getTeamEnum(): TEAM_ENUM
  getStyle(): TeamElementStyle
  getName(): string
  getShapeSize(): {height: number; width: number}
  getPreview(): string
  getIcon(): string
  getClassName(): string
  getShapeType(): string
}
