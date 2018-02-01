import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getActiveLanguage, getTranslate} from 'react-localize-redux';

import * as gameActions from '../actions/gameActions';
import {hideHelp, showHelp} from '../actions/profileActions';

import GameHeader from '../components/game/header/GameHeader';
import QuestionList from '../components/question-list/QuestionList';
import ScoresTable from '../components/game/ScoresTable';
import Loader from '../components/common/Loader';
import GettingStartedModal from '../components/getting-started-dialog/GettingStartedModal';

import GameMap from './GameMap';

import {colors, gameConfig, gameModes, gameStatus} from '../constants';

class GameScreen extends Component {

  componentDidMount() {
    const {area, gameMode, loadGame, currentLocale} = this.props;
    loadGame(currentLocale, area, gameMode, gameConfig.rounds);
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
        translate, currentLocale,
        status, questions, answers, mode,
        restartGame,
        duration, timeout
      } = this.props,
      redirectToHomeScreen = () => {
        this.stopGame();
        this.props.history.push(`/${currentLocale}`);
      };

    // TODO add error handling
    if (!this.isGameReady()) {
      return <Loader/>;
    }

    const question = questions[answers.length] || {},
      translations = {
        close: translate('actions.close'),
        restart: translate('actions.restart')
      };

    return (
      <div className="container-fluid h-100">
        {this.getGettingStartedModal()}

        <div className="row h-100 no-gutters">

          <aside className="col-md-2 h-100 pt-3 pb-3 pr-3 d-none d-md-block">
            <div className="gg-aside-content h-100">
              <div className="gg-aside-header mb-2">
                <ScoresTable/>
              </div>
              <div className="gg-aside-body">
                <QuestionList questions={questions}
                              answers={answers}
                              isImg={mode === gameModes.flag}/>
              </div>
            </div>
          </aside>

          <div className="col-md-10 h-100 pt-3 pb-2">
            <header className="gg-main-header mb-2 bg-light">
              <GameHeader status={status}
                          question={question.display}
                          timerColor={timeout < duration * 0.25 ? colors.redError : colors.greenOk}
                          animateTimer={timeout <= 3 || timeout === duration}
                          flagMode={mode === gameModes.flag}
                          restartGame={restartGame}
                          translations={translations}
                          returnHomeScreen={redirectToHomeScreen}/>
            </header>

            <div className="gg-main-body pb-2"><GameMap/></div>

            <footer className="gg-main-footer d-md-none">
              <ScoresTable/>
            </footer>
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

  getGettingStartedModal() {
    const {translate, profile} = this.props,
      listLen = parseInt(translate('gettingStarted.list.length'), 10),
      content = {
        title: translate('gettingStarted.title'),
        intro: translate('gettingStarted.intro'),
        info: translate('gettingStarted.info'),
        infoList: [],
        play: translate('actions.play'),
        doNotShowAgain: translate('gettingStarted.doNotShowAgain'),
      };

    // IMPR build localization lib instead of this hack
    for (let i = 0; i < listLen; i++) {
      const text = translate(`gettingStarted.list.items.${i}`).split(':');

      content.infoList.push({
        where: text[0],
        text: text[1],
        icon: text[2]
      });
    }

    return (<GettingStartedModal show={profile.showHelp}
                                 content={content}
                                 onPlayClick={this.onPlayClick.bind(this)}/>);
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
    translate: getTranslate(state.locale),
    currentLocale: getActiveLanguage(state.locale).code,
    status, questions, answers, mode,
    countriesData, mapLoading: loading, error,
    duration, timeout
  };
};

const mapDispatchToProps = dispatch => ({
  loadGame: (locale, areaId, gameMode, questionCount, timeout) => {
    dispatch(gameActions.loadGame(locale, areaId, gameMode, questionCount, timeout));
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
