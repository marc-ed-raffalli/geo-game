import {Map} from '../actionTypes';
import {fetchData} from '../services/countriesService';

export const load = id => dispatch => {
  dispatch({type: Map.FETCH_DATA, payload: id});

  return fetchData(id)
    .then(data => {
      dispatch({type: Map.FETCH_DATA_FULFILLED, payload: data});
      return data;
    })
    .catch(err => dispatch({type: Map.FETCH_DATA_REJECTED, payload: err}));
};

export const showMarkers = ids => ({type: Map.SHOW_MARKERS, payload: ids});
export const highlightFeatures = colorsById => ({type: Map.HIGHLIGHT_FEATURES, payload: colorsById});

export const showPopup = id => ({type: Map.SHOW_POPUP, payload: id});
export const hidePopup = () => ({type: Map.HIDE_POPUP});

export const reset = () => ({type: Map.RESET});
