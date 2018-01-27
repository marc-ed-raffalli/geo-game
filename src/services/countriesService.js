/* globals fetch */

import {fetchData as fetchLocalizedData} from './localizationService';

export const areas = [
  'africa',
  'asia',
  'europe',
  'north-america',
  'oceania',
  'south-america'
];

const defaultMapZoom = {
    value: 3,
    min: 3,
    max: 14
  },
  mapConfigByAreaId = {
    africa: {
      center: [0, 20],
      zoom: defaultMapZoom
    },
    asia: {
      center: [25, 90],
      zoom: defaultMapZoom
    },
    europe: {
      center: [50, 0],
      zoom: defaultMapZoom
    },
    'north-america': {
      center: [40, -100],
      zoom: defaultMapZoom
    },
    oceania: {
      center: [-25, 150],
      zoom: defaultMapZoom
    },
    'south-america': {
      center: [-30, -60],
      zoom: {
        value: 4,
        ...defaultMapZoom
      }
    },
  };

export const isAreaIdValid = id => areas.indexOf(id) !== -1;

export const fetchData = (locale, id) => {
  if (!isAreaIdValid(id)) {
    return Promise.reject('Invalid area id');
  }

  return Promise.all([
    fetch(`geo-json/${id}.json`).then(r => r.json()),
    fetchLocalizedData(locale, id)
  ])
    .then(response => {
      const geoJson = response[0],
        localizedData = response[1];

      return {
        ...geoJson,
        features: geoJson.features.map(f => ({
          ...f,
          properties: {
            ...f.properties,
            ...localizedData[f.properties.iso_a2],
            id: f.properties.iso_a2
          }
        }))
      };
    })
    .catch(function (ex) {
      console.error('parsing failed', ex);
    });
};

export const getMapConfigFromAreaId = id => {
  if (!mapConfigByAreaId[id]) {
    throw new Error('Invalid area id');
  }

  return mapConfigByAreaId[id];
};
