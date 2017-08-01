export const mapActionToReducer = (actionToReducerMap, defaultState) => (state = defaultState, action) => {
  return actionToReducerMap[action.type] !== undefined
    ? actionToReducerMap[action.type](state, action)
    : state;
};
