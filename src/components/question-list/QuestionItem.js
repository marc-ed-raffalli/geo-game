import React from 'react';

import Flag from '../flag/Flag';

export default (props) => {
  const itemClasses = ['list-group-item', 'gg-questionItem'];

  if (props.current) {
    itemClasses.push('active');
  }

  if (props.correct === false) {
    itemClasses.push('list-group-item-danger');
  }

  if (props.isImg) {
    itemClasses.push('text-center');
  }

  return (
    <li className={itemClasses.join(' ')}>
      {
        props.isImg
          ? <Flag path={props.value} className={'w-100'}/>
          : <span className="small">{props.value}</span>
      }
    </li>
  );
};
