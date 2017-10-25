import {Component} from 'react';
import {connect} from 'react-redux';

import {withRouter} from 'react-router-dom';
import ReactGA from 'react-ga';

import {gaTrackingId, NODE_ENV_PRODUCTION} from '../constants';

if (NODE_ENV_PRODUCTION) {
  ReactGA.initialize(gaTrackingId);
}


class GoogleAnalytics extends Component {

  static onRouteChange() {
    const location = window.location,
      page = location.pathname + location.hash;

    if (!NODE_ENV_PRODUCTION) {
      console.log('ReactGA', {page: page});
      return;
    }

    ReactGA.set({page: page});
    ReactGA.pageview(page);
  }

  componentDidMount() {
    this.stopListening = this.props.history.listen(GoogleAnalytics.onRouteChange);
    GoogleAnalytics.onRouteChange();
  }

  componentWillUnmount() {
    this.stopListening();
  }

  render() {
    return null;
  }
}

export default withRouter(connect()(GoogleAnalytics));
