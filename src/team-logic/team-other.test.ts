import { describe, it, expect } from 'vitest';
import { TeamOther } from './team-other';
import { TEAM_ENUM } from './team-static';
import ShapeType from '../helpers/ShapeTypes';

describe('TeamOther', () => {
  describe('FlowOfValue', () => {
    const element = new TeamOther(TEAM_ENUM.FlowOfValue);

    it('returns correct shape', () => {
      expect(element.getShape()).toBe(ShapeType.RightArrow);
    });

    it('returns correct name with placeholder', () => {
      expect(element.getName()).toBe('Flow of value: {Scenario}');
    });

    it('returns correct size', () => {
      expect(element.getShapeSize()).toEqual({ width: 450, height: 150 });
    });

    it('returns correct style with dashed border', () => {
      expect(element.getStyle()).toEqual({
        borderStyle: 'dashed',
        borderColor: '#000000',
        fillColor: '#FFFFFF',
        textAlign: 'center',
        textAlignVertical: 'middle',
        fontSize: 17
      });
    });

    it('returns correct class name', () => {
      expect(element.getClassName()).toBe('flowofvalue-btn');
    });

    it('returns zero rotation', () => {
      expect(element.getRotation()).toBe(0);
    });
  });

  describe('static enums', () => {
    it('TeamEnums contains FlowOfValue', () => {
      expect(TeamOther.TeamEnums).toEqual([TEAM_ENUM.FlowOfValue]);
    });
  });
});
