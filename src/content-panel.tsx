import React from 'react';
import { useEffect } from 'react';
import * as ReactDOM from 'react-dom';

import SVG from 'react-inlinesvg';

import { TEAM_ENUM, TeamElement } from './team-logic/team-static';
import { TeamFactory } from './team-logic/team-factory';

import { TeamType } from './team-logic/team-type';
import { TeamSupplementary } from './team-logic/team-supplementary';
import { TeamInteraction } from './team-logic/team-interaction';
import { TeamOther } from './team-logic/team-other';

import DetailsPanel from './details-panel';
import { DropEvent } from '@mirohq/websdk-types';

const ContentPanel = () => {
  const teamFactory = new TeamFactory();

  useEffect(() => {
    miro.board.ui.on('drop', drop);
  });

  const drop = async (e: DropEvent) => {
    const { x, y, target } = e;
    const teamElement = teamFactory.getTeamElementFromClassList(target.classList);
    createTeamWidget(teamElement, { x, y });
  };

  const createTeamWidget = async (teamElement: TeamElement, pos?: { x: number; y: number }) => {
    const teamShapeSize = teamElement.getShapeSize();
    if (!pos) {
      const viewport = await miro.board.viewport.get();
      pos = {
        x: viewport.x + viewport.width / 2 - teamShapeSize.width / 2,
        y: viewport.y + viewport.height / 2 - teamShapeSize.height / 2
      };
    }

    await miro.board.createShape({
      x: pos.x,
      y: pos.y,
      style: teamElement.getStyle(),
      width: teamShapeSize.width,
      height: teamShapeSize.height,
      rotation: 0,
      content: teamElement.getName()
    });
  };

  let setDetailText: (teamEnum: TEAM_ENUM) => void = (_te) => {};

  const renderTeamElement = (teamElement: TeamElement) => {
    return (
      <div
        draggable={false}
        key={teamElement.getTeamEnum()}
        className={'miro-draggable draggable-item draggable-team ' + teamElement.getClassName()}
        title={teamElement.getName()}
        onClick={() => createTeamWidget(teamElement)}
        onMouseEnter={() => {
          if (setDetailText != undefined) {
            setDetailText(teamElement.getTeamEnum());
          }
        }}
      >
        <SVG className='icon' src={teamElement.getIcon()} />
      </div>
    );
  };

  const setOnHover = (callBack: (teamEnum: TEAM_ENUM) => void) => {
    setDetailText = callBack;
  };

  return (
    <div className='tt_main_container'>
      <h4 className='sub-title'>Team types:</h4>
      <h5 className='sub-title'>Fundamental:</h5>
      <div className='team-types'>
        {TeamType.TeamEnums.map((teamEnum) => {
          return renderTeamElement(teamFactory.getTeamElement(teamEnum));
        })}
      </div>
      <h5 className='sub-title'>Supplementary:</h5>
      <div className='team-supplementary'>
        {TeamSupplementary.TeamEnums.map((teamEnum) => {
          return renderTeamElement(teamFactory.getTeamElement(teamEnum));
        })}
      </div>
      <h4 className='sub-title'>Team interactions:</h4>
      <div className='team-interactions'>
        {TeamInteraction.TeamEnums.map((teamEnum) => {
          return renderTeamElement(teamFactory.getTeamElement(teamEnum));
        })}
      </div>
      <div className='team-other'>
        <h4 className='sub-title'>Flow of change:</h4>
        {TeamOther.TeamEnums.map((teamEnum) => {
          return renderTeamElement(teamFactory.getTeamElement(teamEnum));
        })}
      </div>
      <DetailsPanel setOnHover={setOnHover} />
    </div>
  );
};

// Render ContentPanel
ReactDOM.render(
  <React.StrictMode>
    <ContentPanel />
  </React.StrictMode>,
  document.getElementById('root')
);
