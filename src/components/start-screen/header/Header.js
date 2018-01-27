import React from 'react';

import './_header.css';

export default props => (
  <div className="jumbotron">
    <h1 className="gg-header-title mb-3">{props.title}</h1>
    <p className="lead">{props.subTitle}</p>
    <hr className="my-2 my-md-4"/>
    <p>{props.description}</p>

    {props.children ? props.children : undefined}
  </div>
);
