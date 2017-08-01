import React from 'react';

import _BaseSocialNetworkComponent from '../_BaseSocialNetworkComponent';
import './_facebook.css';

export default class Facebook extends _BaseSocialNetworkComponent {

  getScriptSrcUrl() {
    const locale = this.props.locale || 'en-US';
    return `//connect.facebook.net/${locale}/sdk.js#xfbml=1&version=v2.10`;
  }

  render() {
    const props = this.props;

    return (
      <div className="gg-facebook">
        <div className="fb-like p-1"
             data-href={props.url}
             data-layout={props.layout}
             data-action="like"
             data-show-faces={props.show_faces}>
        </div>
        <div className="fb-share-button p-1"
             data-href={props.url}
             data-layout={props.layout}>
        </div>
      </div>
    );
  }

};
