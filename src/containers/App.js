import React, {Component} from 'react';
import {HashRouter as Router, Redirect, Route} from 'react-router-dom';

import GoogleAnalytics from './GoogleAnalytics';
import StartScreen from './StartScreen';
import GameScreen from './GameScreen';

import {isAreaIdValid} from '../services/countriesService';
import {gameModes} from '../constants';


export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App h-100">
          <GoogleAnalytics/>
          <Route exact path="/" component={StartScreen}/>
          <Route path="/:area/:mode" render={({match, ...args}) => {
            const areaId = match.params.area,
              mode = match.params.mode;

            return isAreaIdValid(areaId) && gameModes[mode] !== undefined
              ? (<GameScreen area={areaId} gameMode={mode} {...args}/>)
              : (<Redirect to="/"/>);
          }}/>
        </div>
      </Router>
    );
  }
}
