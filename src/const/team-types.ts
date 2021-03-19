export enum TEAM_TYPES {
  StreamAligned = 1,
  Platform,
  Enabling,
  ComplicatedSubsystem,
}

export function getTeamStyle(teamType: TEAM_TYPES) {
  switch (teamType) {
    case TEAM_TYPES.StreamAligned:
      return {
        shapeType: 7, // ROUNDER
        backgroundColor: '#FFEDB8',
        backgroundOpacity: 1,
        borderColor: '#FFD966',
        borderWidth: 3,
        borderOpacity: 1,
        borderStyle: 2,
        fontFamily: 10,
        textColor: 'black',
        textAlign: 'c',
        textAlignVertical: 'm',
        fontSize: 17,
        bold: 0,
        italic: 0,
        underline: 0,
        strike: 0,
        highlighting: '',
      }
    case TEAM_TYPES.Enabling:
      return {
        shapeType: 7, // ROUNDER
        backgroundColor: '#DFBDCF',
        backgroundOpacity: 1,
        borderColor: '#D09CB7',
        borderWidth: 3,
        borderOpacity: 1,
        borderStyle: 2,
        fontFamily: 10,
        textColor: 'black',
        textAlign: 'c',
        textAlignVertical: 'm',
        fontSize: 17,
        bold: 0,
        italic: 0,
        underline: 0,
        strike: 0,
        highlighting: '',
      }

    case TEAM_TYPES.Platform:
      return {
        shapeType: 3, // RECTANGLE
        backgroundColor: '#B7CDF1',
        backgroundOpacity: 1,
        borderColor: '#6D9EEB',
        borderWidth: 3,
        borderOpacity: 1,
        borderStyle: 2,
        fontFamily: 10,
        textColor: 'black',
        textAlign: 'c',
        textAlignVertical: 'm',
        fontSize: 17,
        bold: 0,
        italic: 0,
        underline: 0,
        strike: 0,
        highlighting: '',
      }

    case TEAM_TYPES.ComplicatedSubsystem:
      return {
        shapeType: 18, // OCTAGONE
        backgroundColor: '#FFC08B',
        backgroundOpacity: 1,
        borderColor: '#E88814',
        borderWidth: 3,
        borderOpacity: 1,
        borderStyle: 2,
        fontFamily: 10,
        textColor: 'black',
        textAlign: 'c',
        textAlignVertical: 'm',
        fontSize: 17,
        bold: 0,
        italic: 0,
        underline: 0,
        strike: 0,
        highlighting: '',
      }
    default:
      return {}
  }
}

export function getTeamName(teamType: TEAM_TYPES) {
  switch (teamType) {
    case TEAM_TYPES.StreamAligned:
      return 'Stream-aligned team'
    case TEAM_TYPES.Platform:
      return 'Platform team'
    case TEAM_TYPES.Enabling:
      return 'Enabling team'
    case TEAM_TYPES.ComplicatedSubsystem:
      return 'Complicated Subsystem team'
    default:
      return 'none'
  }
}

export function getTeamShapeSize(teamType: TEAM_TYPES) {
  let height = 300
  let width = 300
  switch (teamType) {
    case TEAM_TYPES.StreamAligned:
    case TEAM_TYPES.Platform:
      height = 133
      width = 906
      break
    case TEAM_TYPES.Enabling:
      height = 244
      width = 19
      break
    case TEAM_TYPES.ComplicatedSubsystem:
      height = 194
      width = 323
      break
  }
  return {width, height}
}
