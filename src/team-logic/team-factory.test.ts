import { describe, it, expect } from 'vitest';
import { TeamFactory } from './team-factory';

function createMockClassList(className: string): DOMTokenList {
  const classes = new Set([className]);
  return {
    contains: (name: string) => classes.has(name),
    length: classes.size,
  } as DOMTokenList;
}

describe('TeamFactory', () => {
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
  });
});
