import {TEAM_ENUM} from '../team-logic/team-static'

const teamText: string[] = []
teamText[TEAM_ENUM.StreamAligned] =
  '**Stream-aligned team:** aligned to a flow of work from (usually) a segment of the business domain'
teamText[TEAM_ENUM.Enabling] =
  '**Enabling team:** helps a Stream-aligned team to overcome obstacles. Also detects missing capabilities.'
teamText[TEAM_ENUM.ComplicatedSubsystem] =
  '**Complicated Subsystem team:** where significant mathematics/calculation/technical expertise is needed.'
teamText[TEAM_ENUM.UndefinedTeam] =
  'The **Undefined team type** shape can be used to represent a team that currently has no fundamental team type determined.'
teamText[TEAM_ENUM.Platform] =
  '**Platform team:** a grouping of other team types that provide a compelling internal product to accelerate delivery by Stream-aligned teams'
teamText[TEAM_ENUM.Collaboration] =
  '**Collaboration:** working together for a defined period of time to discover new things (APIs, practices, technologies, etc.)'
teamText[TEAM_ENUM.Xaas] = '**X-as-a-Service:** one team provides and one team consumes something “as a Service”'
teamText[TEAM_ENUM.Facilitating] = '**Facilitation:** one team helps and mentors another team'
teamText[TEAM_ENUM.FlowOfChange] =
  '**Flow of change:** \n There is always an implied **flow of change from left to right** in the diagram (with apologies to people more familiar with a right-to-left flow!).'
export default teamText
