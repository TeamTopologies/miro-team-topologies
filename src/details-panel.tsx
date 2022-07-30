import React from 'react';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

import { TEAM_ENUM } from './team-logic/team-static';
import teamInfo from './team-text/team-info';
import genericText from './team-text/generic';

type DetailsPanelProps = {
  setOnHover: (callBack: (teamEnum: TEAM_ENUM) => void) => void;
};

const DetailsPanel = ({ setOnHover }: DetailsPanelProps) => {
  const [description, setDescription] = useState<string>('');
  const [attentionPoints, _setAttentionPoints] = useState<string[]>([]);

  const setDetailText = (teamEnum: TEAM_ENUM): void => {
    setDescription(teamInfo[teamEnum]);
  };
  setOnHover(setDetailText);

  const detailArea = () => {
    if (description !== undefined) {
      return (
        <div className='team-details'>
          <ReactMarkdown>{description}</ReactMarkdown>
        </div>
      );
    } else {
      return <span className='label label-info'>{genericText.PleaseSelectWidget}</span>;
    }
  };

  return (
    <div>
      <h4 className='sub-title'>{genericText.DetailsAreaTitle}</h4>
      {detailArea()}
      {attentionPoints.length > 0 && (
        <div>
          <h4>{genericText.PointOfAttentionTitle}</h4>
          {attentionPoints.map((ap, i) => (
            <p key={i}>ICON and {ap}</p>
          ))}
        </div>
      )}
      <div className='learn-more-link'>
        <i>
          <a
            href='https://teamtopologies.com/'
            target='_blank'
            rel='noreferrer'
            title='Learn more from the official Website!'
          >
            Learn more at teamtopologies.com
          </a>
        </i>
      </div>
    </div>
  );
};

export default DetailsPanel;
