import React, {Component} from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';

import GoogleAnalytics from './GoogleAnalytics';
import LocalizedRoute from './LocalizedRoute';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App h-100">
          <GoogleAnalytics/>
          <Route path="/:locale?"
                 component={LocalizedRoute}/>
        </div>
      </Router>
    );
  }
}

export default App;
