import React from 'react';
import {Link} from 'react-router-dom';

import Continents from '../../maps/continents/Continents';
import './_areaList.css';

export default props => (
  <div
    className="d-flex no-gutters
        flex-column align-items-stretch
        flex-sm-row flex-sm-wrap justify-content-sm-center align-items-sm-center
        pt-md-2 pb-md-2 align-content-md-start">
    {props.items.map(i => (
      <div className="col-12 col-lg-6" key={i.id}>
        <div className="bg-light
          p-3 p-sm-4
          mb-2 mb-sm-3 m-lg-3">
          <h3 className="mb-4">{i.label}</h3>
          <div className="d-flex no-gutters gg-area">
            <div className="col-6 col-sm-4 gg-area-buttons">
              {[
                'countryName',
                'capital',
                'flag',
              ].map(mode => (
                <div className="mt-1 mb-2" key={mode}>
                  <Link className="btn btn-outline-primary"
                        to={`/${props.selectedLocale}/${i.id}/${mode}`}>{props.modes[mode]}</Link>
                </div>
              ))}
            </div>
            <div className="col-sm-8 gg-area-icon">
              <Continents active={i.id}/>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
);
