import { describe, it, expect } from 'vitest';
import { TeamInteraction } from './team-interaction';
import { TEAM_ENUM } from './team-static';
import ShapeType from '../helpers/ShapeTypes';

describe('TeamInteraction', () => {
  describe('Collaboration', () => {
    const interaction = new TeamInteraction(TEAM_ENUM.Collaboration);

    it('returns correct shape', () => {
      expect(interaction.getShape()).toBe(ShapeType.Parallelogram);
    });

    it('returns correct name', () => {
      expect(interaction.getName()).toBe('Collaboration');
    });

    it('returns correct size', () => {
      expect(interaction.getShapeSize()).toEqual({ width: 300, height: 100 });
    });

    it('returns correct style with dashed border', () => {
      expect(interaction.getStyle()).toEqual({
        borderStyle: 'dashed',
        borderColor: '#967EE2',
        fillColor: '#E0DBED',
        textAlign: 'center',
        textAlignVertical: 'middle',
        fontSize: 17
      });
    });

    it('returns correct class name', () => {
      expect(interaction.getClassName()).toBe('collaboration-btn');
    });

    it('returns zero rotation', () => {
      expect(interaction.getRotation()).toBe(0);
    });
  });

  describe('Facilitating', () => {
    const interaction = new TeamInteraction(TEAM_ENUM.Facilitating);

    it('returns correct shape', () => {
      expect(interaction.getShape()).toBe(ShapeType.Circle);
    });

    it('returns correct name', () => {
      expect(interaction.getName()).toBe('Facilitating');
    });

    it('returns correct size', () => {
      expect(interaction.getShapeSize()).toEqual({ width: 130, height: 130 });
    });

    it('returns correct style with dashed border', () => {
      expect(interaction.getStyle()).toEqual({
        borderStyle: 'dashed',
        borderColor: '#78996B',
        fillColor: '#E3EFDE',
        textAlign: 'center',
        textAlignVertical: 'middle',
        fontSize: 17
      });
    });

    it('returns correct class name', () => {
      expect(interaction.getClassName()).toBe('facilitating-btn');
    });
  });

  describe('Xaas', () => {
    const interaction = new TeamInteraction(TEAM_ENUM.Xaas);

    it('returns correct shape', () => {
      expect(interaction.getShape()).toBe(ShapeType.Triangle);
    });

    it('returns correct name', () => {
      expect(interaction.getName()).toBe('Xaas');
    });

    it('returns correct size', () => {
      expect(interaction.getShapeSize()).toEqual({ width: 100, height: 100 });
    });

    it('returns correct style with dashed border', () => {
      expect(interaction.getStyle()).toEqual({
        borderStyle: 'dashed',
        borderColor: '#999696',
        fillColor: '#DBDBDB',
        textAlign: 'center',
        textAlignVertical: 'middle',
        fontSize: 17
      });
    });

    it('returns correct class name', () => {
      expect(interaction.getClassName()).toBe('xaas-btn');
    });
  });

  describe('UndefinedInteraction', () => {
    const interaction = new TeamInteraction(TEAM_ENUM.UndefinedInterction);

    it('returns correct shape', () => {
      expect(interaction.getShape()).toBe(ShapeType.Rectangle);
    });

    it('returns correct name', () => {
      expect(interaction.getName()).toBe('Undefined Interaction');
    });

    it('returns correct size', () => {
      expect(interaction.getShapeSize()).toEqual({ width: 100, height: 100 });
    });

    it('returns correct style with dashed border and fill opacity', () => {
      expect(interaction.getStyle()).toEqual({
        borderStyle: 'dashed',
        borderColor: '#9B99AF',
        fillColor: '#EBEBEF',
        textAlign: 'center',
        textAlignVertical: 'middle',
        fontSize: 17,
        fillOpacity: 0.5
      });
    });

    it('returns correct class name', () => {
      expect(interaction.getClassName()).toBe('undefined-interaction-btn');
    });
  });

  describe('TemporalCoupling', () => {
    const interaction = new TeamInteraction(TEAM_ENUM.TemporalCoupling);

    it('returns correct shape', () => {
      expect(interaction.getShape()).toBe(ShapeType.Trapezoid);
    });

    it('returns correct name', () => {
      expect(interaction.getName()).toBe('Temporal Coupling');
    });

    it('returns correct size', () => {
      expect(interaction.getShapeSize()).toEqual({ width: 200, height: 100 });
    });

    it('returns correct style with dashed border and fill opacity', () => {
      expect(interaction.getStyle()).toEqual({
        borderStyle: 'dashed',
        borderColor: '#9B99AF',
        fillColor: '#EBEBEF',
        textAlign: 'center',
        textAlignVertical: 'middle',
        fontSize: 17,
        fillOpacity: 0.5
      });
    });

    it('returns correct class name', () => {
      expect(interaction.getClassName()).toBe('temporal-coupling-btn');
    });

    it('returns 180 degree rotation', () => {
      expect(interaction.getRotation()).toBe(180);
    });
  });

  describe('Handover', () => {
    const interaction = new TeamInteraction(TEAM_ENUM.Handover);

    it('returns correct shape', () => {
      expect(interaction.getShape()).toBe(ShapeType.Rhombus);
    });

    it('returns correct name', () => {
      expect(interaction.getName()).toBe('Handover');
    });

    it('returns correct size', () => {
      expect(interaction.getShapeSize()).toEqual({ width: 100, height: 100 });
    });

    it('returns correct style with dashed border and fill opacity', () => {
      expect(interaction.getStyle()).toEqual({
        borderStyle: 'dashed',
        borderColor: '#9B99AF',
        fillColor: '#EBEBEF',
        textAlign: 'center',
        textAlignVertical: 'middle',
        fontSize: 17,
        fillOpacity: 0.5
      });
    });

    it('returns correct class name', () => {
      expect(interaction.getClassName()).toBe('handover-btn');
    });
  });

  describe('static enums', () => {
    it('TeamEnums contains all interaction types', () => {
      expect(TeamInteraction.TeamEnums).toEqual([
        TEAM_ENUM.Collaboration,
        TEAM_ENUM.Facilitating,
        TEAM_ENUM.Xaas,
        TEAM_ENUM.UndefinedInterction,
        TEAM_ENUM.TemporalCoupling,
        TEAM_ENUM.Handover
      ]);
    });
  });
});
