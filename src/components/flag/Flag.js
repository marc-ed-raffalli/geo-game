import React from 'react';

import './_flag.css';

export default props => {
  const classNames = ['gg-flag'];

  if (props.className) {
    classNames.push(props.className)
  }
  return (
    <img className={'gg-flag'}
         src={props.path}/>
  );
};
