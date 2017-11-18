import React, {Component} from 'react';
import {connect} from 'react-redux';
import {HashRouter as Router, Redirect, Route} from 'react-router-dom';

import {load as loadProfile} from '../actions/profileActions';

import GoogleAnalytics from './GoogleAnalytics';
import StartScreen from './StartScreen';
import GameScreen from './GameScreen';

import {isAreaIdValid} from '../services/countriesService';
import {gameModes} from '../constants';

class App extends Component {

  componentDidMount() {
    this.props.loadProfile('unknown');
  }

  render() {
    const props = this.props;

    return (
      <Router>
        <div className="App h-100">
          <GoogleAnalytics/>
          <Route exact path="/" component={StartScreen}/>
          <Route path="/:area/:mode" render={({match, ...args}) => {
            const areaId = match.params.area,
              mode = match.params.mode;

            return isAreaIdValid(areaId) && gameModes[mode] !== undefined
              ? (<GameScreen area={areaId} profile={props.profile} gameMode={mode} {...args}/>)
              : (<Redirect to="/"/>);
          }}/>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.profile
});

const mapDispatchToProps = dispatch => ({
  loadProfile: id => dispatch(loadProfile(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
