export enum TEAM_ELEMENTS {
  StreamAligned = 0,
  Platform = 1,
  Enabling = 2,
  ComplicatedSubsystem,
  Collaboration,
  Facilitating,
  Xaas,
}

export enum TEAM_CAT {
  Type = 0,
  Interaction = 1,
}

export function getTeamElementFromClassList(classList: DOMTokenList): TEAM_ELEMENTS {
  let teamElement = TEAM_ELEMENTS.ComplicatedSubsystem
  if (classList.contains('stream-aligned-btn')) teamElement = TEAM_ELEMENTS.StreamAligned
  else if (classList.contains('platform-btn')) teamElement = TEAM_ELEMENTS.Platform
  else if (classList.contains('enabling-btn')) teamElement = TEAM_ELEMENTS.Enabling
  else if (classList.contains('collaboration-btn')) teamElement = TEAM_ELEMENTS.Collaboration
  else if (classList.contains('facilitating-btn')) teamElement = TEAM_ELEMENTS.Facilitating
  else if (classList.contains('xaas-btn')) teamElement = TEAM_ELEMENTS.Xaas

  return teamElement
}
export function getTeamCat(teamElement: TEAM_ELEMENTS): TEAM_CAT {
  switch (teamElement) {
    case TEAM_ELEMENTS.Collaboration:
    case TEAM_ELEMENTS.Facilitating:
    case TEAM_ELEMENTS.Xaas:
      return TEAM_CAT.Interaction
    default:
      return TEAM_CAT.Type
  }
}
