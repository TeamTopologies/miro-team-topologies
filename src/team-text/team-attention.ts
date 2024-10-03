enum TEAM_ATTENTIONS {
  SingleCollaboration = 0,
  ManyCollaboration = 1,
  ComplicatedSubsystem,
}
// INFO: This is SAMPLE data that needs to be developed AND refined according to official TT content.
const teamAttention: string[] = []
teamAttention[TEAM_ATTENTIONS.SingleCollaboration] =
  'While collaboration enable faster innovation, it also blurry the scope of each teams. Consider using collaboration for fixed durations only.'
teamAttention[TEAM_ATTENTIONS.ManyCollaboration] =
  'Collaboration increase cognitive load: try avoiding multiple collaborations at a given time.'
teamAttention[TEAM_ATTENTIONS.ComplicatedSubsystem] =
  'Complicated Sub-system teams are for very specific situations. Carefully cross-check if your context does not suit other team types before applying a Complicated Sub-system.'

export default teamAttention
