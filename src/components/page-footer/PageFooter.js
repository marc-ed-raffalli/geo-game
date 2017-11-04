import React from 'react';

import SocialNetworks from '../social/SocialNetworks';

export default props => (
  <footer className="gg-pageFooter pb-2 d-flex justify-content-center flex-wrap no-gutters">
    <div className="col-12 col-lg-auto pb-1 pb-md-0"><SocialNetworks locale={props.locale}/></div>
    <div className="col-12 col-lg-auto offset-lg-1 small align-self-center text-center">
      {
        props.items.map(i => (i.url
          ? <a key={i.text} className="d-inline-block mx-2 text-nowrap" href={i.url}>{i.text}</a>
          : <span key={i.text} className="d-inline-block mx-2 text-nowrap">© 2017 - Marc Ed. Raffalli</span>))
      }
    </div>
  </footer>
);
