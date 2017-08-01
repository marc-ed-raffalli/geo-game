import React from 'react';

import QuestionItem from './QuestionItem';
import './_questionList.css';

export default (props) => (
  <ul className="list-group h-100 gg-scroll">
    {props.questions.map((question, index) => (
      <QuestionItem
        isImg={props.isImg}
        key={question.display}
        current={index === props.answers.length}
        correct={index < props.answers.length ? question.display === props.answers[index] : undefined}
        value={question.display}/>
    ))}
  </ul>
);
