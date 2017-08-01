import React from 'react';

import _BaseSocialNetworkComponent from '../_BaseSocialNetworkComponent';

import './_googlePlus.css';

export default class GooglePlus extends _BaseSocialNetworkComponent {

  getScriptSrcUrl() {
    return 'https://apis.google.com/js/platform.js';
  }

  render() {
    return (
      <div className="p-1 gg-googlePlus">
        <div className="g-plusone" data-size="medium"></div>
      </div>
    );
  }

};
