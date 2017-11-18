import React from 'react';
import Ionicon from 'react-ionicons';

import './_gettingStartedHelp.css';

export default () => (
  <div className="gg-gettingStarted">
    <p>Find the country by the name, capital city or flag given on the top of the page.</p>

    <img className="my-2 p-2" src="images/getting-started-header.png" alt="Game header"/>
    <p>During the game, you can find the following information on the top of the page:</p>
    <ul>
      <li><span className="small">(left)</span> The current question number and the total number of questions</li>
      <li><span className="small">(left)</span> The remaining time <Ionicon icon="ion-android-stopwatch"/></li>
      <li><span className="small">(middle)</span> The country name, capital city or flag of the country to find</li>
      <li><span className="small">(right)</span> Close, to quit the current game</li>
      <li><span className="small">(right)</span> The score of the current game</li>
    </ul>
  </div>
);
