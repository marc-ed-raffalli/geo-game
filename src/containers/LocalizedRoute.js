import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect, Route} from 'react-router-dom';
import {addTranslationForLanguage, initialize, setActiveLanguage} from 'react-localize-redux';

import StartScreen from './StartScreen';
import GameScreen from './GameScreen';
import Loader from '../components/common/Loader';

import {isAreaIdValid} from '../services/countriesService';
import {
  getBestMatchingLocale,
  getTranslation,
  isLocaleSupported,
  supportedGameLocales
} from '../services/localizationService';

import {gameModes} from '../constants';
import {load as loadProfile} from '../actions/profileActions';

class LocalizedRoute extends Component {

  constructor(props) {
    super();

    props.initializeLocalization();

    this.state = {
      currentLocale: undefined
    };
  }

  componentDidMount() {
    this.props.loadProfile('unknown');
  }

  componentWillReceiveProps(nextProps) {
    this.setLocale(nextProps.match.params.locale);
  }

  setLocale(locale) {
    if (locale && locale !== this.state.currentLocale && isLocaleSupported(locale)) {
      this.setState(() => ({currentLocale: locale}));
      this.props.setLocale(locale);
    }
  }

  render() {
    const {match, profile} = this.props,
      locale = match.params.locale;

    if (!locale || !isLocaleSupported(locale)) {
      return <Redirect to={`/${getBestMatchingLocale()}`}/>;
    }

    if (this.state.currentLocale === undefined) {
      return <Loader/>;
    }

    return (
      <div className="h-100">
        <Route path={`${match.url}/:area/:mode`}
               render={({match, ...args}) => {
                 const areaId = match.params.area,
                   mode = match.params.mode;

                 return isAreaIdValid(areaId) && gameModes[mode] !== undefined
                   ? (<GameScreen area={areaId} profile={profile} gameMode={mode} {...args}/>)
                   : (<Redirect to={match.url}/>);
               }}/>
        <Route exact
               path={match.url}
               render={() => <StartScreen selectedLocale={locale}/>}/>
      </div>
    );
  }

}

const mapStateToProps = state => ({
  profile: state.profile
});

const mapDispatchToProps = dispatch => ({
  loadProfile: id => dispatch(loadProfile(id)),
  initializeLocalization: () => {
    dispatch(initialize(supportedGameLocales));
  },
  setLocale: (locale) => {
    dispatch(addTranslationForLanguage(getTranslation(locale), locale));
    dispatch(setActiveLanguage(locale));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LocalizedRoute);
