/* globals fetch */

export const areas = [
  'africa',
  'asia',
  'europe',
  'north-america',
  'oceania',
  'south-america',
];

export const isAreaIdValid = (id) => areas.indexOf(id) !== -1;

export const fetchData = (id) => {
  if (!isAreaIdValid(id)) {
    return Promise.reject('Invalid area id');
  }

  return fetch(`geo-json/${id}.json`)
    .then(function (response) {
      return response.json();
    })
    .catch(function (ex) {
      console.error('parsing failed', ex);
    });
};

export const getMapConfigFromAreaId = id => {
  const defaultMapZoom = {
    value: 3,
    min: 3,
    max: 14
  };

  switch (id) {
    case areas[0]:
      return {
        center: [0, 20],
        zoom: defaultMapZoom
      };
    case areas[1]:
      return {
        center: [25, 90],
        zoom: defaultMapZoom
      };
    case areas[2]:
      return {
        center: [50, 0],
        zoom: defaultMapZoom
      };
    case areas[3]:
      return {
        center: [40, -100],
        zoom: defaultMapZoom
      };
    case areas[4]:
      return {
        center: [-25, 150],
        zoom: defaultMapZoom
      };
    case areas[5]:
      return {
        center: [-30, -60],
        zoom: {
          value: 4,
          ...defaultMapZoom
        }
      };
    default:
      throw new Error('Invalid area id');
  }
};
