import { TEAM_ENUM } from '../team-logic/team-static';

const teamText: string[] = [];
teamText[TEAM_ENUM.StreamAligned] =
  '**Stream-aligned team:** aligned to a flow of work from (usually) a segment of the business domain';
teamText[TEAM_ENUM.Enabling] =
  '**Enabling team:** helps a other teams to overcome obstacles and detects missing capabilities.';
teamText[TEAM_ENUM.ComplicatedSubsystem] =
  '**Complicated Subsystem team:** where significant mathematics / calculation / technical expertise is needed.';
teamText[TEAM_ENUM.UndefinedTeam] =
  'The **Undefined team type** shape can be used to represent a team that does not exhibit the behaviours expected by the fundamental team types.';
teamText[TEAM_ENUM.Platform] =
  '**Platform grouping:** a grouping of other team types that provide a compelling internal product to accelerate delivery by Stream-aligned teams';
teamText[TEAM_ENUM.Collaboration] =
  '**Collaboration:** working together for a defined period of time to discover new things (APIs, practices, technologies, etc.)';
teamText[TEAM_ENUM.Xaas] = '**X-as-a-Service:** one team provides and one team consumes something “as a Service”';
teamText[TEAM_ENUM.Facilitating] = '**Facilitation:** one team helps and mentors another team';
teamText[TEAM_ENUM.FlowOfValue] =
  '**Flow of value:** \n There is always an implied **flow of value from left to right** in the diagram (with apologies to people more familiar with a right-to-left flow!).';
teamText[TEAM_ENUM.UndefinedInterction] = '**Undefined Interaction:** Use this to represent an interaction between teams that does not fit the Team Topologies core interaction modes.';
teamText[TEAM_ENUM.TemporalCoupling] = '**Temporal Coupling:** Use this to indicate when teams are coupled in time. They cannot deliver value without waiting for another team to complete their work first.';
teamText[TEAM_ENUM.Handover] = '**Handover:** Use this make handovers between teams more visible.';
teamText[TEAM_ENUM.ValueStreamGroup] = '**Value Stream Group:** a grouping of value stream activities, typically where teams are expected to work more closely together.';
teamText[TEAM_ENUM.PlatformGroup] = '**Platform Grouping:** a grouping of other team types that provide a compelling internal product to accelerate delivery by Stream-aligned teams.';
teamText[TEAM_ENUM.UndefinedGroup] = '**Undefined Group:** a grouping of teams that is neither a well-defined value stream group or a platform group.';
export default teamText;
