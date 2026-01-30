import { describe, it, expect } from 'vitest';
import { TeamFactory } from './team-factory';
import { TEAM_ENUM } from './team-static';

function createMockClassList(className: string): DOMTokenList {
  const classes = new Set([className]);
  return {
    contains: (name: string) => classes.has(name),
    length: classes.size,
  } as DOMTokenList;
}

describe('TeamFactory', () => {
  describe('getTeamElements', () => {
    it('returns all team elements', () => {
      const factory = new TeamFactory();
      const elements = factory.getTeamElements();

      expect(elements).toHaveLength(Object.keys(TEAM_ENUM).length / 2);
    });

    it('includes all team types', () => {
      const factory = new TeamFactory();
      const elements = factory.getTeamElements();
      const enums = elements.map((e) => e.getTeamEnum());

      expect(enums).toContain(TEAM_ENUM.StreamAligned);
      expect(enums).toContain(TEAM_ENUM.Platform);
      expect(enums).toContain(TEAM_ENUM.Enabling);
      expect(enums).toContain(TEAM_ENUM.ComplicatedSubsystem);
      expect(enums).toContain(TEAM_ENUM.UndefinedTeam);
    });

    it('includes all groupings', () => {
      const factory = new TeamFactory();
      const elements = factory.getTeamElements();
      const enums = elements.map((e) => e.getTeamEnum());

      expect(enums).toContain(TEAM_ENUM.ValueStreamGroup);
      expect(enums).toContain(TEAM_ENUM.PlatformGroup);
      expect(enums).toContain(TEAM_ENUM.UndefinedGroup);
    });

    it('includes all interactions', () => {
      const factory = new TeamFactory();
      const elements = factory.getTeamElements();
      const enums = elements.map((e) => e.getTeamEnum());

      expect(enums).toContain(TEAM_ENUM.Collaboration);
      expect(enums).toContain(TEAM_ENUM.Facilitating);
      expect(enums).toContain(TEAM_ENUM.Xaas);
      expect(enums).toContain(TEAM_ENUM.UndefinedInterction);
      expect(enums).toContain(TEAM_ENUM.TemporalCoupling);
      expect(enums).toContain(TEAM_ENUM.Handover);
    });

    it('includes FlowOfValue', () => {
      const factory = new TeamFactory();
      const elements = factory.getTeamElements();
      const enums = elements.map((e) => e.getTeamEnum());

      expect(enums).toContain(TEAM_ENUM.FlowOfValue);
    });
  });

  describe('getTeamElement', () => {
    it('returns correct element for each enum', () => {
      const factory = new TeamFactory();

      const allEnums = [
        TEAM_ENUM.StreamAligned,
        TEAM_ENUM.Platform,
        TEAM_ENUM.Enabling,
        TEAM_ENUM.ComplicatedSubsystem,
        TEAM_ENUM.UndefinedTeam,
        TEAM_ENUM.ValueStreamGroup,
        TEAM_ENUM.PlatformGroup,
        TEAM_ENUM.UndefinedGroup,
        TEAM_ENUM.Collaboration,
        TEAM_ENUM.Facilitating,
        TEAM_ENUM.Xaas,
        TEAM_ENUM.UndefinedInterction,
        TEAM_ENUM.TemporalCoupling,
        TEAM_ENUM.Handover,
        TEAM_ENUM.FlowOfValue
      ];

      for (const enumValue of allEnums) {
        const element = factory.getTeamElement(enumValue);
        expect(element.getTeamEnum()).toBe(enumValue);
      }
    });

    it('returns first element for unknown enum', () => {
      const factory = new TeamFactory();
      const element = factory.getTeamElement(999 as TEAM_ENUM);

      expect(element).toBeDefined();
      expect(element.getTeamEnum()).toBe(TEAM_ENUM.StreamAligned);
    });
  });

  describe('getTeamElementFromClassList', () => {
    it('maps all team element class names correctly', () => {
      const factory = new TeamFactory();
      const allElements = factory.getTeamElements();

      for (const element of allElements) {
        const className = element.getClassName();
        const classList = createMockClassList(className);
        const result = factory.getTeamElementFromClassList(classList);

        expect(result.getTeamEnum()).toBe(element.getTeamEnum());
      }
    });

    it('returns ComplicatedSubsystem for unknown class', () => {
      const factory = new TeamFactory();
      const classList = createMockClassList('unknown-btn');
      const result = factory.getTeamElementFromClassList(classList);

      expect(result.getTeamEnum()).toBe(TEAM_ENUM.ComplicatedSubsystem);
    });
  });
});
