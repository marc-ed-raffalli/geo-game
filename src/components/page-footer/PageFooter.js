import React from 'react';

import SocialNetworks from '../social/SocialNetworks';

export default props => (
  <footer className="pb-2 d-flex justify-content-center flex-wrap no-gutters">
    <div className="col-12 col-md-auto pb-1 pb-md-0"><SocialNetworks locale={props.locale}/></div>
    <div className="col-12 col-md-auto offset-md-1 small align-self-center text-center">
      <span>© 2017 - Marc Ed. Raffalli - </span><a href="./credits">Credits</a>
    </div>
  </footer>
);
