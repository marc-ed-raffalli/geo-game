import React from 'react';

import Facebook from './facebook/Facebook';
import GooglePlus from './google-plus/GooglePlus';
import Tweeter from './tweeter/Tweeter';

import './_socialNetworks.css';

export default props => {
  return (
    <div className="gg-socialNetworks">
      <div className="gg-socialNetworks-item h-100">
        <Facebook url={window.location.href}
                  locale={props.locale}
                  share={true}
                  show_faces={true}
                  layout={'button_count'}/>
      </div>
      <div className="gg-socialNetworks-item h-100">
        <GooglePlus locale={props.locale}/>
      </div>
      <div className="gg-socialNetworks-item h-100">
        <Tweeter/>
      </div>
    </div>
  );
};

