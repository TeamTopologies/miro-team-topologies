import React, { useState, useEffect } from 'react';
import { DropEvent } from '@mirohq/websdk-types';
import { createRoot } from 'react-dom/client';

import { TeamFactory } from './team-logic/team-factory';

import { TeamType } from './team-logic/team-type';
import { TeamSupplementary } from './team-logic/team-supplementary';
import { TEAM_ENUM, TeamElementInterface } from './team-logic/team-static';
import { TeamInteraction } from './team-logic/team-interaction';
import { TeamOther } from './team-logic/team-other';

import teamInfo from './team-text/team-info';

import TeamElement from './components/TeamElement';
import DetailsSection from './components/DetailsSection';

const { board } = miro;

const App = (): JSX.Element => {
  const [dropRegistered, setDropRegistered] = useState(false);
  const [description, setDescription] = useState<string>('');
  const teamFactory = new TeamFactory();

  const drop = async (e: DropEvent) => {
    console.log('START DROP');
    const { x, y, target } = e;
    const teamElement = teamFactory.getTeamElementFromClassList(target.classList);

    await createTeamShape(teamElement, { x, y });
    console.log('END DROP');
  };

  useEffect(() => {
    if (!dropRegistered) {
      console.log('REGISTER DROP');
      setDropRegistered(true);
      board.ui.on('drop', drop);
    }
  }, [dropRegistered, setDropRegistered]);

  const createTeamShape = async (teamElement: TeamElementInterface, pos?: { x: number; y: number }) => {
    const teamShapeSize = teamElement.getShapeSize();
    if (!pos) {
      const viewport = await board.viewport.get();
      pos = {
        x: viewport.x + viewport.width / 2 - teamShapeSize.width / 2,
        y: viewport.y + viewport.height / 2 - teamShapeSize.height / 2
      };
    }

    await board.createShape({
      x: pos.x,
      y: pos.y,
      style: teamElement.getStyle(),
      shape: teamElement.getShape(),
      width: teamShapeSize.width,
      height: teamShapeSize.height,
      rotation: 0,
      content: teamElement.getName()
    });
  };

  const setDetailText = (teamEnum: TEAM_ENUM) => {
    console.log('setDetailText!');
    setDescription(teamInfo[teamEnum]);
  };

  return (
    <div className='tt_main_container'>
      <h4 className='sub-title'>Team types:</h4>
      <h5 className='sub-title'>Fundamental:</h5>
      <div className='team-types'>
        {TeamType.TeamEnums.map((teamEnum) => (
          <TeamElement
            teamElement={teamFactory.getTeamElement(teamEnum)}
            key={teamEnum}
            createTeamShape={createTeamShape}
            setDetailText={setDetailText}
          />
        ))}
      </div>
      <h5 className='sub-title'>Supplementary:</h5>
      <div className='team-supplementary'>
        {TeamSupplementary.TeamEnums.map((teamEnum) => (
          <TeamElement
            teamElement={teamFactory.getTeamElement(teamEnum)}
            key={teamEnum}
            createTeamShape={createTeamShape}
            setDetailText={setDetailText}
          />
        ))}
      </div>
      <h4 className='sub-title'>Team interactions:</h4>
      <div className='team-interactions'>
        {TeamInteraction.TeamEnums.map((teamEnum) => (
          <TeamElement
            teamElement={teamFactory.getTeamElement(teamEnum)}
            key={teamEnum}
            createTeamShape={createTeamShape}
            setDetailText={setDetailText}
          />
        ))}
      </div>
      <div className='team-other'>
        <h4 className='sub-title'>Flow of change:</h4>
        {TeamOther.TeamEnums.map((teamEnum) => (
          <TeamElement
            teamElement={teamFactory.getTeamElement(teamEnum)}
            key={teamEnum}
            createTeamShape={createTeamShape}
            setDetailText={setDetailText}
          />
        ))}
      </div>
      <DetailsSection description={description} />
    </div>
  );
};

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
