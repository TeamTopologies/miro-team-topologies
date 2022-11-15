import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

import genericText from '../../team-text/generic';

const DetailsSection = ({ description }: { description: string }) => {
  const detailArea = () => {
    if (description !== '') {
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
    <section>
      <h4 className='sub-title'>{genericText.DetailsAreaTitle}</h4>
      {detailArea()}
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
    </section>
  );
};

export default DetailsSection;
