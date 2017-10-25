export const NODE_ENV_PRODUCTION = process.env.NODE_ENV === 'production';
export const gaTrackingId = 'UA-97591265-1';

export const locale = 'en-US';

export const gameConfig = {
  timeout: 15,
  rounds: 20
};

export const gameStatus = {
  started: 'started',
  results: 'results',
  paused: 'paused',
  stopped: 'stopped'
};

export const gameModes = {
  countryName: 'name',
  flag: 'flag',
  capital: 'capital'
};

export const mapConfig = {
  attributions: '© <a href="https://www.mapbox.com/about/maps/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> <strong><a href="https://www.mapbox.com/map-feedback/" target="_blank">Improve this map</a></strong>',
  serviceUrl: 'https://{s}.tiles.mapbox.com/v3/raffalli.i3ip4bic/{z}/{x}/{y}.png'
};

export const colors = {
  'default': 'transparent',
  active: '#0275d8',
  greenOk: '#5cb85c',
  redError: '#d9534f'
};
