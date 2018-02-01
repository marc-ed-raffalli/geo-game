import React from 'react';

import ScoreCorrect from '../../containers/ScoreCorrect';
import ScoreError from '../../containers/ScoreError';

export default () => (
  <div className="d-flex text-nowrap">
    <span className="col py-2 badge badge-success"><ScoreCorrect/></span>
    <span className="col py-2 badge badge-danger ml-1"><ScoreError/></span>
  </div>
);
