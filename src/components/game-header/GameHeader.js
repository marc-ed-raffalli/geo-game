import React, {Component} from 'react';
import Ionicon from 'react-ionicons';

import Timer from '../../containers/Timer';
import Rounds from '../../containers/Rounds';
import ScoreCorrect from '../../containers/ScoreCorrect';
import ScoreError from '../../containers/ScoreError';
import Restart from '../../containers/Restart';

import SimpleText from '../common/SimpleText';
import Flag from '../flag/Flag';

import {gameStatus} from '../../constants';

import './_gameHeader.css';

export default class GameHeader extends Component {

  constructor(props) {
    super(props);

    this.state = {
      timerAnimation: 'none'
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.animateTimer) {
      this.setTimerAnimation();
    }
  }

  render() {
    if (this.props.status !== gameStatus.started) {
      return this.renderBottom();
    }

    let timerStyles = {
      opacity: 1,
      fontSize: '12.5rem',
      color: this.props.timerColor
    };

    switch (this.state.timerAnimation) {
      case 'evaluate':
        timerStyles = {
          ...timerStyles,
          opacity: 0
        };
        break;
      case 'forward':
        const labelRect = this.timerElt.getBoundingClientRect();
        timerStyles = {
          ...timerStyles,
          top: `${(window.innerHeight - labelRect.height) / 2 - labelRect.top}px`,
          left: `${(this.headerElt.offsetWidth - labelRect.width) / 2}px`,
          opacity: 0.7
        };
        break;
      default:
        timerStyles = {
          ...timerStyles,
          fontSize: undefined,
          top: 0,
          left: 24 + 'px'
        };
    }

    return (
      <div className="d-flex pb-1 no-gutters"
           ref={elt => {
             this.headerElt = elt;
           }}>
        <div className="col-2 col-sm-1">
          <div className="text-nowrap"><Rounds/></div>
          <div className="gg-gameHeader-timer">
            <Ionicon color={timerStyles.color} icon="ion-android-stopwatch"/>
            <div className="gg-gameHeader-timerLabel"
                 data-animate={this.state.timerAnimation === 'back'}
                 ref={elt => {
                   this.timerElt = elt;
                 }}
                 style={timerStyles}>
              <Timer/></div>
          </div>
        </div>
        <div className="col-8 col-sm-10">
          {this.renderQuestion()}
        </div>
        <div className="col-2 col-sm-1 text-right">
          <div className="small align-self-center">
            {this.renderCloseLink()}
          </div>
          <div className="text-nowrap">
            <span className="ml-1 badge badge-success"><ScoreCorrect/></span>
            <span className="ml-1 badge badge-danger"><ScoreError/></span>
          </div>
        </div>
      </div>
    );
  }

  renderQuestion() {
    const props = this.props;

    if (!props.question) {
      return;
    }

    return props.flagMode
      ? (<div className="gg-gameHeader-flag"><Flag path={props.question}/></div>)
      : (
        <div className="gg-gameHeader-question h2 m-0 text-center gg-text-no-overflow">
          <SimpleText text={props.question}/>
        </div>
      );
  }

  renderBottom() {
    return (
      <div className="d-flex no-gutters">
        <div className="col">
          {this.renderLeft()}
        </div>
        <div className="col text-center lead"><Timer/></div>
        <div className="col text-right text-nowrap">
          <span className="ml-1 badge badge-success"><ScoreCorrect/></span>
          <span className="ml-1 badge badge-danger"><ScoreError/></span>
        </div>
      </div>
    );
  }

  renderLeft() {
    return this.props.status === gameStatus.started
      ? <Rounds/>
      : (
        <div>
          <Restart label={this.props.translations.restart}/>
          {this.renderCloseLink()}
        </div>
      );
  }

  renderCloseLink() {
    const {returnHomeScreen, translations} = this.props;
    return <span className="pl-2 align-middle gg-gameHeader-menu"
                 onClick={returnHomeScreen}>{translations.close}</span>;
  }

  setTimerAnimation() {
    this.setState({timerAnimation: 'evaluate'});

    requestAnimationFrame(() => {
      this.setState({timerAnimation: 'forward'});

      setTimeout(function () {
        this.setState({timerAnimation: 'back'});
      }.bind(this), 500);
    });
  }

};
