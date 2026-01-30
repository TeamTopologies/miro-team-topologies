import { describe, it, expect } from 'vitest';
import { TeamType } from './team-type';
import { TEAM_ENUM } from './team-static';
import ShapeType from '../helpers/ShapeTypes';

describe('TeamType', () => {
  describe('team types', () => {
    describe('StreamAligned', () => {
      const team = new TeamType(TEAM_ENUM.StreamAligned);

      it('returns correct shape', () => {
        expect(team.getShape()).toBe(ShapeType.RoundRectangle);
      });

      it('returns correct name', () => {
        expect(team.getName()).toBe('Stream-aligned team');
      });

      it('returns correct size', () => {
        expect(team.getShapeSize()).toEqual({ width: 450, height: 65 });
      });

      it('returns correct style', () => {
        expect(team.getStyle()).toEqual({
          borderStyle: 'normal',
          borderColor: '#FFD966',
          fillColor: '#FFEDB8',
          textAlign: 'center',
          textAlignVertical: 'middle',
          fontSize: 17
        });
      });

      it('returns correct class name', () => {
        expect(team.getClassName()).toBe('stream-aligned-btn');
      });

      it('returns zero rotation', () => {
        expect(team.getRotation()).toBe(0);
      });
    });

    describe('Enabling', () => {
      const team = new TeamType(TEAM_ENUM.Enabling);

      it('returns correct shape', () => {
        expect(team.getShape()).toBe(ShapeType.RoundRectangle);
      });

      it('returns correct name', () => {
        expect(team.getName()).toBe('Enabling team');
      });

      it('returns correct size', () => {
        expect(team.getShapeSize()).toEqual({ width: 95, height: 120 });
      });

      it('returns correct style', () => {
        expect(team.getStyle()).toEqual({
          borderStyle: 'normal',
          borderColor: '#D09CB7',
          fillColor: '#DFBDCF',
          textAlign: 'center',
          textAlignVertical: 'middle',
          fontSize: 17
        });
      });

      it('returns correct class name', () => {
        expect(team.getClassName()).toBe('enabling-btn');
      });
    });

    describe('ComplicatedSubsystem', () => {
      const team = new TeamType(TEAM_ENUM.ComplicatedSubsystem);

      it('returns correct shape', () => {
        expect(team.getShape()).toBe(ShapeType.Octagon);
      });

      it('returns correct name', () => {
        expect(team.getName()).toBe('Complicated Subsystem team');
      });

      it('returns correct size', () => {
        expect(team.getShapeSize()).toEqual({ width: 200, height: 120 });
      });

      it('returns correct style', () => {
        expect(team.getStyle()).toEqual({
          borderStyle: 'normal',
          borderColor: '#E88814',
          fillColor: '#FFC08B',
          textAlign: 'center',
          textAlignVertical: 'middle',
          fontSize: 17
        });
      });

      it('returns correct class name', () => {
        expect(team.getClassName()).toBe('complicated-subsystem-btn');
      });
    });

    describe('Platform', () => {
      const team = new TeamType(TEAM_ENUM.Platform);

      it('returns correct shape', () => {
        expect(team.getShape()).toBe(ShapeType.Rectangle);
      });

      it('returns correct name', () => {
        expect(team.getName()).toBe('Platform Grouping');
      });

      it('returns correct size', () => {
        expect(team.getShapeSize()).toEqual({ width: 450, height: 65 });
      });

      it('returns correct style with dotted border', () => {
        expect(team.getStyle()).toEqual({
          borderStyle: 'dotted',
          borderColor: '#6D9EEB',
          fillColor: '#B7CDF1',
          textAlign: 'left',
          textAlignVertical: 'top',
          fontSize: 17
        });
      });

      it('returns correct class name', () => {
        expect(team.getClassName()).toBe('platform-btn');
      });
    });

    describe('UndefinedTeam', () => {
      const team = new TeamType(TEAM_ENUM.UndefinedTeam);

      it('returns correct shape', () => {
        expect(team.getShape()).toBe(ShapeType.RoundRectangle);
      });

      it('returns correct name', () => {
        expect(team.getName()).toBe('Undefined team type');
      });

      it('returns correct size', () => {
        expect(team.getShapeSize()).toEqual({ width: 450, height: 65 });
      });

      it('returns correct style with dashed border', () => {
        expect(team.getStyle()).toEqual({
          borderStyle: 'dashed',
          borderColor: '#9B99AF',
          fillColor: '#EBEBEF',
          textAlign: 'center',
          textAlignVertical: 'middle',
          fontSize: 17
        });
      });

      it('returns correct class name', () => {
        expect(team.getClassName()).toBe('undefined-team-btn');
      });
    });
  });

  describe('groupings', () => {
    describe('ValueStreamGroup', () => {
      const team = new TeamType(TEAM_ENUM.ValueStreamGroup);

      it('returns correct shape', () => {
        expect(team.getShape()).toBe(ShapeType.Rectangle);
      });

      it('returns correct name', () => {
        expect(team.getName()).toBe('Value Stream Grouping');
      });

      it('returns correct size', () => {
        expect(team.getShapeSize()).toEqual({ width: 450, height: 350 });
      });

      it('returns correct style with dotted border and fill opacity', () => {
        expect(team.getStyle()).toEqual({
          borderStyle: 'dotted',
          borderColor: '#FFD966',
          fillColor: '#FFEDB8',
          textAlign: 'left',
          textAlignVertical: 'top',
          fontSize: 17,
          fillOpacity: 0.5
        });
      });

      it('returns correct class name', () => {
        expect(team.getClassName()).toBe('value-stream-group-btn');
      });
    });

    describe('PlatformGroup', () => {
      const team = new TeamType(TEAM_ENUM.PlatformGroup);

      it('returns correct shape', () => {
        expect(team.getShape()).toBe(ShapeType.Rectangle);
      });

      it('returns correct name', () => {
        expect(team.getName()).toBe('Platform Grouping');
      });

      it('returns correct size', () => {
        expect(team.getShapeSize()).toEqual({ width: 450, height: 350 });
      });

      it('returns correct style with dotted border', () => {
        expect(team.getStyle()).toEqual({
          borderStyle: 'dotted',
          borderColor: '#6D9EEB',
          fillColor: '#B7CDF1',
          textAlign: 'left',
          textAlignVertical: 'top',
          fontSize: 17
        });
      });

      it('returns correct class name', () => {
        expect(team.getClassName()).toBe('platform-group-btn');
      });
    });

    describe('UndefinedGroup', () => {
      const team = new TeamType(TEAM_ENUM.UndefinedGroup);

      it('returns correct shape', () => {
        expect(team.getShape()).toBe(ShapeType.Rectangle);
      });

      it('returns correct name', () => {
        expect(team.getName()).toBe('Undefined Grouping');
      });

      it('returns correct size', () => {
        expect(team.getShapeSize()).toEqual({ width: 450, height: 350 });
      });

      it('returns correct style with dotted border', () => {
        expect(team.getStyle()).toEqual({
          borderStyle: 'dotted',
          borderColor: '#9B99AF',
          fillColor: '#EBEBEF',
          textAlign: 'left',
          textAlignVertical: 'top',
          fontSize: 17
        });
      });

      it('returns correct class name', () => {
        expect(team.getClassName()).toBe('undefined-group-btn');
      });
    });
  });

  describe('static enums', () => {
    it('TeamEnums contains all team types', () => {
      expect(TeamType.TeamEnums).toEqual([
        TEAM_ENUM.StreamAligned,
        TEAM_ENUM.Enabling,
        TEAM_ENUM.ComplicatedSubsystem,
        TEAM_ENUM.Platform,
        TEAM_ENUM.UndefinedTeam
      ]);
    });

    it('GroupingEnums contains all groupings', () => {
      expect(TeamType.GroupingEnums).toEqual([
        TEAM_ENUM.ValueStreamGroup,
        TEAM_ENUM.PlatformGroup,
        TEAM_ENUM.UndefinedGroup
      ]);
    });
  });
});
