import React, {Component} from 'react';

export default class _BaseSocialNetworkComponent extends Component {

  componentDidMount() {
    if (this.scriptLoaded) {
      return;
    }

    const srcElt = document.createElement('script');
    srcElt.lang = this.props.locale;
    srcElt.src = this.getScriptSrcUrl();
    document.body.appendChild(srcElt);
    this.scriptLoaded = true;
  }

  getScriptSrcUrl() {
    throw Error('Should be implemented');
  }

};
