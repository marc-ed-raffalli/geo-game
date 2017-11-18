import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as gameActions from '../actions/gameActions';
import {hideHelp, showHelp} from '../actions/profileActions';

import GameHeader from '../components/game-header/GameHeader';
import QuestionList from '../components/question-list/QuestionList';
import Loader from '../components/common/Loader';
import GettingStartedModal from '../components/getting-started-dialog/GettingStartedModal';
import GameMap from './GameMap';
import SocialNetworks from '../components/social/SocialNetworks';

import {colors, gameConfig, gameModes, gameStatus, locale} from '../constants';

class GameScreen extends Component {

  componentDidMount() {
    const {area, gameMode, loadGame} = this.props;
    loadGame(area, gameMode, gameConfig.rounds);
  }

  componentWillUnmount() {
    this.stopGame();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.status === gameStatus.stopped && !this.props.profile.showHelp && this.isGameReady()) {
      // start the game automatically if the user deactivated the help dialog
      this.props.startGame();
    }
  }

  render() {
    const {
        status, questions, answers, mode,
        profile,
        restartGame,
        duration, timeout
      } = this.props,
      redirectToHomeScreen = () => {
        this.stopGame();
        this.props.history.push('/');
      };

    // TODO add error handling
    if (!this.isGameReady()) {
      return <Loader/>;
    }

    const question = questions[answers.length] || {};

    return (
      <div className="container-fluid h-100">
        <GettingStartedModal show={profile.showHelp} onPlayClick={this.onPlayClick.bind(this)}/>

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

  isGameReady() {
    const props = this.props;
    return !props.mapLoading && !props.profile.loading && props.countriesData !== undefined;
  }

  stopGame() {
    this.props.stopGame();

    if (this.props.profile.persisted.config.showHelpOnGameStart) {
      this.props.showHelp();
    }
  }

  onPlayClick(showHelpOnGameStart) {
    this.props.hideHelp(showHelpOnGameStart);
    this.props.startGame();
  }
}

const mapStateToProps = state => {
  const
    {status, questions, answers, mode} = state.game,
    {countriesData, loading, error} = state.map,
    {duration, timeout} = state.timer;

  return {
    status, questions, answers, mode,
    countriesData, mapLoading: loading, error,
    duration, timeout
  };
};

const mapDispatchToProps = dispatch => ({
  loadGame: (areaId, gameMode, questionCount, timeout) => {
    dispatch(gameActions.loadGame(areaId, gameMode, questionCount, timeout));
  },
  startGame: () => {
    dispatch(gameActions.startGame(gameConfig.timeout));
  },
  restartGame: () => {
    dispatch(gameActions.restartGame());
  },
  stopGame: () => {
    dispatch(gameActions.stopGame());
  },
  showHelp: () => {
    dispatch(showHelp());
  },
  hideHelp: showHelpOnGameStart => {
    dispatch(hideHelp(showHelpOnGameStart));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameScreen);
