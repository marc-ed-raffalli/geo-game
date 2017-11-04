import React, {Component} from 'react';
import {connect} from 'react-redux';

import {getMapConfigFromAreaId} from '../services/countriesService';
import {answerCurrentQuestion} from '../actions/gameActions';
import {showPopup, hidePopup} from '../actions/mapActions';

import InteractiveMap from '../components/maps/interactive-map/InteractiveMap';
import CountryInfoPopup from '../components/maps/country-info-popup/CountryInfoPopup';

import {mapConfig, gameStatus} from '../constants';

class GameMap extends Component {

  constructor(props) {
    super(props);

    this.state = {
      feedbackDisplayed: undefined,
      mapServiceUrl: mapConfig.serviceUrl,
      scrollWheelZoom: true,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.isGameStarted) {
      return;
    }

    if (this.clearFeedbackTimeout) {
      clearTimeout(this.clearFeedbackTimeout);
    }

    const lastQuestionCorrect = nextProps.lastQuestion !== undefined
      ? nextProps.lastQuestion === nextProps.lastAnswer
      : undefined;

    this.setState({feedbackDisplayed: lastQuestionCorrect});

    if (lastQuestionCorrect === undefined) {
      return;
    }

    this.clearFeedbackTimeout = setTimeout(function () {
      this.setState({feedbackDisplayed: undefined});
      delete this.clearFeedbackTimeout;
    }.bind(this), 250);
  }

  componentWillUpdate(nextProps) {
    this.forceMapUpdate = this.props.isGameStarted !== nextProps.isGameStarted;
  }

  render() {
    const state = this.state,
      props = this.props,
      maxBounds = [
        [90, -180],
        [-90, 180]
      ];

    const config = getMapConfigFromAreaId(props.areaId);
    return (
      <InteractiveMap
        feedback={this.state.feedbackDisplayed}
        mapServiceUrl={state.mapServiceUrl}
        center={config.center}
        zoom={config.zoom.value}
        minZoom={config.zoom.min}
        maxZoom={config.zoom.max}
        maxBounds={maxBounds}
        scrollWheelZoom={state.scrollWheelZoom}
        attributions={mapConfig.attributions}
        geoJson={props.displayedData}
        geoJsonUpdated={this.forceMapUpdate !== false}
        markers={props.markers}
        onFeatureClick={this.onFeatureClick.bind(this)}
        popup={props.popup}
        onPopupClose={props.hidePopup}
        PopupBody={CountryInfoPopup}
      />
    );
  }

  onFeatureClick(feature) {
    const props = this.props;

    if (props.isGameStarted) {
      return props.giveLocation(feature);
    }

    props.showPopup(feature.properties.id);
  }
}

const mapStateToProps = state => {
  const answers = state.game.answers,
    questions = state.game.questions;

  return {
    isGameStarted: state.game.status === gameStatus.started,
    displayedData: state.map.displayedData,
    markers: state.map.markers,
    areaId: state.map.areaId,
    popup: state.map.popup,
    lastQuestion: answers.length !== 0 ? questions[answers.length - 1].display : undefined,
    lastAnswer: answers.length !== 0 ? answers[answers.length - 1] : undefined
  };
};

const mapDispatchToProps = dispatch => ({
  giveLocation: location => dispatch(answerCurrentQuestion(location)),
  showPopup: location => dispatch(showPopup(location)),
  hidePopup: location => dispatch(hidePopup())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameMap);
