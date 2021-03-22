import {CLIENT_ID} from 'config'
import {TEAM_TYPES, getTeamStyle, getTeamName, getTeamShapeSize} from './const/team-types'

export function findStartHotspot(shapes: SDK.IWidget[]): SDK.IWidget | undefined {
  return shapes.find((shape) => shape.metadata[CLIENT_ID] && shape.metadata[CLIENT_ID].startHotspot)
}

export async function createTeam(teamType: TEAM_TYPES, pos?: {x: number; y: number}) {
  const teamShapeSize = getTeamShapeSize(teamType)
  if (!pos) {
    const viewport = await miro.board.viewport.getViewport()
    pos = {
      x: viewport.x + viewport.width / 2 - teamShapeSize.width / 2,
      y: viewport.y + viewport.height / 2 - teamShapeSize.height / 2,
    }
  }

  await miro.board.widgets.create({
    metadata: {
      [CLIENT_ID]: {
        teamType: teamType,
      },
    },
    type: 'SHAPE',
    x: pos.x,
    y: pos.y,
    style: getTeamStyle(teamType),
    createdUserId: '',
    lastModifiedUserId: '',
    width: teamShapeSize.width,
    height: teamShapeSize.height,
    rotation: 0,
    text: getTeamName(teamType),
  } as any)
}
