import {mapActionToReducer} from './_utils';
import {Map} from '../actionTypes';

const defaultGameState = {
    areaId: undefined,
    countriesData: undefined,
    displayedData: undefined,
    markers: undefined,
    loading: false,
    error: undefined
  },

  fetch = (state, action) => ({
    ...state,
    areaId: action.payload,
    loading: true,
    countriesData: undefined
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
  showMarkers = (state, action) => ({
    ...state,
    markers: action.payload.map(id => state.dataById[id])
  }),
  reset = (state, action) => ({
    ...state,
    markers: undefined,
    displayedData: state.countriesData,
    popup: undefined
  }),
  showPopup = (state, action) => ({
    ...state,
    popup: state.dataById[action.payload]
  }),
  hidePopup = (state, action) => ({
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
  [Map.SHOW_POPUP]: showPopup,
  [Map.HIDE_POPUP]: hidePopup,
  [Map.HIGHLIGHT_FEATURES]: highlightFeatures,
  [Map.RESET]: reset
}, defaultGameState)
