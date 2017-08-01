import React, {Component} from 'react';

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

  render() {
    const props = this.props,
      status = props.status;

    if (status !== gameStatus.started) {
      return this.renderBottom();
    }

    return (
      <div className="d-flex pb-1 no-gutters">
        <div className="col-2 col-sm-1">
          <div><Timer/></div>
          <div className="text-nowrap"><Rounds/></div>
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
        <div className="h2 m-0 text-center gg-text-no-overflow">
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
          <Restart/>
          {this.renderCloseLink()}
        </div>
      );
  }

  renderCloseLink() {
    return <span className="pl-2 align-middle gg-gameHeader-menu" onClick={this.props.returnHomeScreen}>Close</span>;
  }

};
