import React from 'react';
import {connect} from 'react-redux';

import SimpleText from '../components/common/SimpleText';

const Rounds = (props) => (
  <div>
    <SimpleText text={props.round}/> / <SimpleText text={props.total}/>
  </div>
);

const mapStateToProps = ({game}) => {
  const questionCount = game.questions.length;
  const answersCount = game.answers.length;
  return {
    round: (answersCount === questionCount ? answersCount : answersCount + 1).toString(),
    total: questionCount.toString(),
  };
};

export default connect(mapStateToProps)(Rounds);
