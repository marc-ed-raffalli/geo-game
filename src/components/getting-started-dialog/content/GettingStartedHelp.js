import React from 'react';
import Ionicon from 'react-ionicons';

import './_gettingStartedHelp.css';

export default props => (
  <div className="gg-gettingStarted">
    <p>{props.content.intro}</p>

    <img className="my-2 p-2" src="images/getting-started-header.png" alt="Game header"/>
    <p>{props.content.info}</p>
    <ul>
      {props.content.infoList.map((info, i) => (
        <li key={i}><span className="small">({info.where})</span> {info.text}
          {info.icon && <Ionicon icon={info.icon}/>}
        </li>
      ))}
    </ul>
  </div>
);
