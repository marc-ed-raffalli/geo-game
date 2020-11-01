import {Map} from '../actionTypes';
import {fetchData} from '../services/countriesService';

export const load = (locale, id) => dispatch => {
  dispatch({type: Map.FETCH_DATA, payload: {locale, id}});

  return fetchData(locale, id)
    .then(data => {
      dispatch({type: Map.FETCH_DATA_FULFILLED, payload: data});
      return data;
    })
    .catch(err => dispatch({type: Map.FETCH_DATA_REJECTED, payload: err}));
};

export const showMarkers = markers => ({type: Map.SHOW_MARKERS, payload: markers});
export const showMarkersAllCountries = () => ({type: Map.SHOW_MARKERS_ALL_COUNTRIES});
export const highlightFeatures = colorsById => ({type: Map.HIGHLIGHT_FEATURES, payload: colorsById});

export const showPopup = id => ({type: Map.SHOW_POPUP, payload: id});
export const hidePopup = () => ({type: Map.HIDE_POPUP});

export const reset = () => ({type: Map.RESET});
export const clearData = () => ({type: Map.CLEAR_DATA});
