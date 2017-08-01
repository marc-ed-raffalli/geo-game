import React from 'react';

import _BaseSocialNetworkComponent from '../_BaseSocialNetworkComponent';
import './_tweeter.css';

export default class Tweeter extends _BaseSocialNetworkComponent {

  getScriptSrcUrl() {
    return 'https://platform.twitter.com/widgets.js';
  }

  render() {
    return (
      <div className="gg-tweeter p-1">
        <a className="twitter-share-button" href="https://twitter.com/share">Tweet</a>
      </div>
    );
  }

};
