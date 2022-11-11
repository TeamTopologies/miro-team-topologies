import React from 'react';

import { TeamElementInterface } from '../../team-logic/team-static';
import SVG from 'react-inlinesvg';

type TeamElementProps = { teamElement: TeamElementInterface; createTeamShape: Function; setDetailText: Function };

const TeamElement = ({ teamElement, createTeamShape, setDetailText }: TeamElementProps): JSX.Element => {
  return (
    <div
      className={'miro-draggable draggable-item draggable-team ' + teamElement.getClassName()}
      key={teamElement.getTeamEnum()}
      draggable={false}
      title={teamElement.getName()}
      onClick={() => createTeamShape(teamElement)}
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

export default TeamElement;
