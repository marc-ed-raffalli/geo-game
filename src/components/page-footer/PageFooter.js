import React from 'react';

import SocialNetworks from '../social/SocialNetworks';

export default props => (
  <footer className="pb-2 d-flex justify-content-center">
    <div className="col-auto"><SocialNetworks locale={props.locale}/></div>
    <div className="col-auto offset-1 small align-self-center">
      <span>© 2017 - Marc Ed. Raffalli - </span><a href="./credits">Credits</a>
    </div>
  </footer>
);
