import {TEAM_TYPES} from '../const/team-types'

const teamText: string[] = []
teamText[TEAM_TYPES.StreamAligned] =
  '**Stream-aligned team:** aligned to a flow of work from (usually) a segment of the business domain'
teamText[TEAM_TYPES.Enabling] =
  '**Enabling team:** helps a Stream-aligned team to overcome obstacles. Also detects missing capabilities.'
teamText[TEAM_TYPES.ComplicatedSubsystem] =
  '**Complicated Subsystem team:** where significant mathematics/calculation/technical expertise is needed.'
teamText[TEAM_TYPES.Platform] =
  '**Platform team:** a grouping of other team types that provide a compelling internal product to accelerate delivery by Stream-aligned teams'

export default teamText
