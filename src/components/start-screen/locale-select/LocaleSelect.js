import React from 'react';
import {Link} from 'react-router-dom';

import './_localeSelect.css';

function getLabel(name) {
  return <span className="mb-4 text-capitalize text-nowrap">{name}</span>;
}

export default props => (
  <div className="gg-localeSelect
        d-flex flex-row flex-wrap justify-content-between
        mt-2 mt-md-4">
    {props.locales.map(locale => (
      props.selectedLocale === locale.code
        ? (<div
          key={locale.code}
          className="col
          bg-primary text-white rounded
          p-2 m-2">
          {getLabel(locale.name)}
        </div>)
        : (
          <Link
            to={`/${locale.code}`}
            key={locale.code}
            className="col
          bg-light rounded
          p-2 m-2">
            {getLabel(locale.name)}
          </Link>)
    ))}
  </div>
);
