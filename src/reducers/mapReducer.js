import {mapActionToReducer} from './_utils';
import {Map} from '../actionTypes';

const defaultGameState = {
    locale: undefined,
    areaId: undefined,
    countriesData: undefined,
    displayedData: undefined,
    markers: undefined,
    loading: false,
    error: undefined
  },

  //<editor-fold desc="Fetch">
  fetch = (state, action) => ({
    ...state,
    ...defaultGameState,
    areaId: action.payload.id,
    loading: true
  }),
  fetchFulfilled = (state, action) => ({
    ...state,
    loading: false,
    countriesData: action.payload,
    displayedData: action.payload,
    dataById: action.payload.features.reduce((res, d) => {
      res[d.properties.id] = d;
      return res;
    }, {})
  }),
  fetchRejected = (state, action) => ({
    ...state,
    loading: false,
    error: action.payload
  }),
  //</editor-fold>

  showMarkers = (state, action) => ({
    ...state,
    markers: action.payload
  }),
  showMarkersAllCountries = (state) => ({
    ...state,
    markers: Object.entries(state.dataById)
      .map(([id, data]) => ({
        id,
        type: 'country-location',
        properties: data.properties
      }))
  }),
  reset = state => ({
    ...state,
    markers: undefined,
    displayedData: state.countriesData,
    popup: undefined
  }),
  clearData = () => defaultGameState,
  showPopup = (state, action) => ({
    ...state,
    popup: state.dataById[action.payload]
  }),
  hidePopup = state => ({
    ...state,
    popup: undefined
  }),
  highlightFeatures = (state, action) => ({
    ...state,
    displayedData: {
      ...state.countriesData,
      features: state.countriesData.features.map(f => ({
        ...f,
        properties: {
          ...f.properties,
          fillColor: action.payload[f.properties.id]
        }
      }))
    }
  })
;

export default mapActionToReducer({
  [Map.FETCH_DATA]: fetch,
  [Map.FETCH_DATA_FULFILLED]: fetchFulfilled,
  [Map.FETCH_DATA_REJECTED]: fetchRejected,
  [Map.SHOW_MARKERS]: showMarkers,
  [Map.SHOW_MARKERS_ALL_COUNTRIES]: showMarkersAllCountries,
  [Map.SHOW_POPUP]: showPopup,
  [Map.HIDE_POPUP]: hidePopup,
  [Map.HIGHLIGHT_FEATURES]: highlightFeatures,
  [Map.RESET]: reset,
  [Map.CLEAR_DATA]: clearData
}, defaultGameState);
