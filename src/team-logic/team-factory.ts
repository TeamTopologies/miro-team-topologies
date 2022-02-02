import {TEAM_ENUM, TeamElement} from './team-static'
import {TeamType} from './team-type'
import {TeamInteraction} from './team-interaction'
import {TeamOther} from './team-other'
import { TeamSupplementary } from './team-supplementary'

export class TeamFactory {
  private static TeamElements: TeamElement[]

  constructor() {
    this.initTeamElements()
  }

  // Return an array with ALL TeamElement object instatiated.
  getTeamElements(): TeamElement[] {
    return TeamFactory.TeamElements
  }

  // Return a specific instance matching the TEAM_ELEMENTS
  getTeamElement(teamEnum: TEAM_ENUM): TeamElement {
    return (
      TeamFactory.TeamElements.find((elt) => {
        return elt.getTeamEnum() == teamEnum
      }) ?? TeamFactory.TeamElements[0]
    )
  }

  getTeamElementFromClassList(classList: DOMTokenList): TeamElement {
    let teamElement = TEAM_ENUM.ComplicatedSubsystem
    if (classList.contains('stream-aligned-btn')) teamElement = TEAM_ENUM.StreamAligned
    else if (classList.contains('platform-btn')) teamElement = TEAM_ENUM.Platform
    else if (classList.contains('enabling-btn')) teamElement = TEAM_ENUM.Enabling
    else if (classList.contains('undefined-btn')) teamElement = TEAM_ENUM.UndefinedTeam
    else if (classList.contains('collaboration-btn')) teamElement = TEAM_ENUM.Collaboration
    else if (classList.contains('facilitating-btn')) teamElement = TEAM_ENUM.Facilitating
    else if (classList.contains('xaas-btn')) teamElement = TEAM_ENUM.Xaas
    else if (classList.contains('flowofchange-btn')) teamElement = TEAM_ENUM.FlowOfChange

    return this.getTeamElement(teamElement)
  }

  private initTeamElements() {
    TeamFactory.TeamElements = TeamType.TeamEnums.map((elt) => {
      return new TeamType(elt)
    })

    TeamFactory.TeamElements = TeamFactory.TeamElements.concat(
      TeamSupplementary.TeamEnums.map((elt) => {
        return new TeamSupplementary(elt)
      }),
    )

    TeamFactory.TeamElements = TeamFactory.TeamElements.concat(
      TeamInteraction.TeamEnums.map((elt) => {
        return new TeamInteraction(elt)
      }),
    )

    TeamFactory.TeamElements = TeamFactory.TeamElements.concat(
      TeamOther.TeamEnums.map((elt) => {
        return new TeamOther(elt)
      }),
    )
  }
}
