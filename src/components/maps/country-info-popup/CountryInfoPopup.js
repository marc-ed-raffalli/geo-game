import React from 'react';
import {Popup} from 'react-leaflet';

import Flag from '../../flag/Flag';

import './_countryInfoPopup.css';

// TODO area number format

export default (props) => (
  <Popup position={props.properties.latlng} key={props.properties.name} onClose={props.onClose}>
    <div>
      <div className="font-weight-bold lead pb-1">{props.properties.name}</div>
      <div className="pb-1">{props.properties.capital}</div>
      <div className="pb-1 gg-countryInfoPopup-flag">
        <Flag path={props.properties.flag}/>
      </div>
      <div className="small">{props.properties.area} km²</div>
    </div>
  </Popup>
);
