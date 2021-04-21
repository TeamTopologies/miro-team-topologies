import {TEAM_ELEMENTS} from '../team-logic/team-static'

const teamText: string[] = []
teamText[TEAM_ELEMENTS.StreamAligned] =
  '**Stream-aligned team:** aligned to a flow of work from (usually) a segment of the business domain'
teamText[TEAM_ELEMENTS.Enabling] =
  '**Enabling team:** helps a Stream-aligned team to overcome obstacles. Also detects missing capabilities.'
teamText[TEAM_ELEMENTS.ComplicatedSubsystem] =
  '**Complicated Subsystem team:** where significant mathematics/calculation/technical expertise is needed.'
teamText[TEAM_ELEMENTS.Platform] =
  '**Platform team:** a grouping of other team types that provide a compelling internal product to accelerate delivery by Stream-aligned teams'
teamText[TEAM_ELEMENTS.Collaboration] =
  '**Collaboration:** working together for a defined period of time to discover new things (APIs, practices, technologies, etc.)'
teamText[TEAM_ELEMENTS.Xaas] = '**X-as-a-Service:** one team provides and one team consumes something “as a Service”'
teamText[TEAM_ELEMENTS.Facilitating] = '**Facilitation:** one team helps and mentors another team'
teamText[TEAM_ELEMENTS.FlowOfChange] =
  '**Flow of change:** \n There is always an implied **flow of change from left to right** in the diagram (with apologies to people more familiar with a right-to-left flow!).'
export default teamText
