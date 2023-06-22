import ActionTypes from 'mirador/dist/es/src/state/actions/action-types';
import { PluginActionTypes } from './actions';

export const awesomeReducer = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.ADD_WINDOW:
      return {
        ...state,
        [action.window.id]: { confettiEnabled: false }
      };
    case PluginActionTypes.CONFETTI_SHOW:
      return {
        ...state,
        [action.windowId]: {
          ...state[action.windowId],
          confettiEnabled: true
        },
      };
    case PluginActionTypes.CONFETTI_HIDE:
      return {
        ...state,
        [action.windowId]: {
          ...state[action.windowId],
          confettiEnabled: false
        },
      };
    default:
      return state;
  }
};
