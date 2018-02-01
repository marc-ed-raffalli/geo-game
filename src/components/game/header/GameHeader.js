import React, {Component} from 'react';
import {MdAvTimer, MdClose, MdReplay} from 'react-icons/lib/md';

import Timer from '../../../containers/Timer';
import Rounds from '../../../containers/Rounds';
import Restart from '../../../containers/Restart';

import SimpleText from '../../common/SimpleText';

import {gameStatus} from '../../../constants';

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
    const {returnHomeScreen, translations, status} = this.props,
      isGameStarted = status === gameStatus.started;

    return (
      <div className={`d-flex no-gutters align-items-center py-1 ${isGameStarted ? '' : 'justify-content-end'}`}
           ref={elt => {
             this.headerElt = elt;
           }}>
        {isGameStarted ? this.renderGameHeader() : this.renderEndGameHeader()}
        <div className="col-auto gg-gameHeader-close pl-1 pr-2 pr-md-3"
             title={translations.close}
             onClick={returnHomeScreen}><MdClose/></div>
      </div>
    );
  }

  renderGameHeader() {
    if (this.props.flagMode) {
      return this.renderFlagModeHeader();
    }

    return (
      <div className="col">
        <div className="d-flex flex-column flex-sm-row align-items-sm-center no-gutters px-2">

          <div className="col-12 col-sm-auto order-1 order-sm-0">
            <div className="d-flex flex-row flex-sm-column no-gutters text-nowrap">
              <div className="col-auto col-sm-12 mr-2"><Rounds/></div>
              {this.renderTimer()}
            </div>
          </div>

          <div className="col-12 col-sm order-0 order-sm-1 ml-sm-2">{this.renderQuestion()}</div>

        </div>
      </div>
    );
  }

  renderFlagModeHeader() {
    return (
      <div className="col">
        <div className="d-flex flex-row align-items-center no-gutters px-2">

          <div className="col-auto">
            <div className="d-flex flex-column no-gutters text-nowrap">
              <div className="col-auto mr-2"><Rounds/></div>

              {this.renderTimer()}
            </div>
          </div>

          <div className="col ml-sm-2">
            {this.renderQuestion()}
          </div>

        </div>
      </div>
    );
  }

  renderTimer() {
    const flagMode = this.props.flagMode;
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
        const
          headerRect = this.headerElt.getBoundingClientRect(),
          labelRect = this.timerElt.getBoundingClientRect();

        timerStyles = {
          ...timerStyles,
          top: `${(window.innerHeight - labelRect.height) / 2 - labelRect.top}px`,
          left: `${(headerRect.width - labelRect.width - (labelRect.left - headerRect.left)) / 2}px`,
          opacity: 0.7
        };
        break;
      default:
        timerStyles = {
          ...timerStyles,
          fontSize: undefined,
          top: 0,
          left: 24 + 'px' // width of the icon beside
        };
    }

    return (
      <div className={`${flagMode ? 'col-auto' : 'col-sm-12'} gg-gameHeader-timer`}>
        <div className="gg-gameHeader-icon"
             style={{color: timerStyles.color}}><MdAvTimer/>
        </div>
        <div className="gg-gameHeader-timerLabel"
             data-animate={this.state.timerAnimation === 'back'}
             ref={elt => {
               this.timerElt = elt;
             }}
             style={timerStyles}>
          <Timer/></div>
      </div>
    );
  }

  renderQuestion() {
    const props = this.props;

    if (!props.question) {
      return;
    }

    return props.flagMode
      ? (<div className="gg-gameHeader-flag"
              style={{backgroundImage: `url(${props.question})`}}/>)
      : (
        <div className="gg-gameHeader-question h2 m-0 gg-text-no-overflow">
          <SimpleText text={props.question}/>
        </div>
      );
  }

  renderEndGameHeader() {
    return (
      <div className="col-auto gg-gameHeader-restart px-1">
        <Restart>
          <div title={this.props.translations.restart}><MdReplay/></div>
        </Restart>
      </div>
    );
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
