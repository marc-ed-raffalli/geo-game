import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as gameActions from '../actions/gameActions';

import GameHeader from '../components/game-header/GameHeader';
import QuestionList from '../components/question-list/QuestionList';
import Loader from '../components/common/Loader';

import GameMap from './GameMap';
import SocialNetworks from '../components/social/SocialNetworks';

import {colors, gameConfig, gameModes, locale} from '../constants';


class GameScreen extends Component {

  componentDidMount() {
    const {area, gameMode, loadGame} = this.props;
    loadGame(area, gameMode, gameConfig.rounds, gameConfig.timeout);
  }

  componentWillUnmount() {
    this.props.stopGame();
  }

  render() {
    const {
        status, questions, answers, mode,
        countriesData, loading,
        restartGame,
        duration, timeout
      } = this.props,
      redirectToHomeScreen = () => {
        this.props.stopGame();
        this.props.history.push('/');
      };

    // TODO add error handling
    if (loading || !countriesData) {
      return <Loader/>;
    }

    const question = questions[answers.length] || {};

    return (
      <div className="container-fluid h-100">
        <div className="row h-100 no-gutters">

          <div className="col-md-2 h-100 pt-3 pb-3 pr-3 hidden-sm-down">
            <QuestionList questions={questions}
                          answers={answers}
                          isImg={mode === gameModes.flag}/>
          </div>

          <div className="col-md-10 h-100 pt-3 pb-2">
            <header className="gg-main-header pb-2">
              <GameHeader status={status}
                          question={question.display}
                          timerColor={timeout < duration * 0.25 ? colors.redError : colors.greenOk}
                          animateTimer={timeout <= 3 || timeout === duration}
                          flagMode={mode === gameModes.flag}
                          restartGame={restartGame}
                          returnHomeScreen={redirectToHomeScreen}/>
            </header>
            <div className="gg-main-body pb-2"><GameMap/></div>
            <footer><SocialNetworks locale={locale}/></footer>
          </div>

        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const
    {status, questions, answers, mode} = state.game,
    {countriesData, loading, error} = state.map,
    {duration, timeout} = state.timer;

  return {
    status, questions, answers, mode,
    countriesData, loading, error,
    duration, timeout
  };
};

const mapDispatchToProps = (dispatch) => ({
  loadGame: (areaId, gameMode, questionCount, timeout) => {
    dispatch(gameActions.loadGame(areaId, gameMode, questionCount, timeout));
  },
  restartGame: () => {
    dispatch(gameActions.restartGame());
  },
  stopGame: () => {
    dispatch(gameActions.stopGame());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameScreen);
