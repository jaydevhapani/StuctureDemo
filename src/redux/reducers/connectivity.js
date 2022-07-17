import {INTERNET_CONNECTED, INTERNET_DISCONNECTED} from '../types';

// Initial State
const INITIAL_STATE = {isInternetConnected: false};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INTERNET_CONNECTED:
      return {isInternetConnected: true};
    case INTERNET_DISCONNECTED:
      return {isInternetConnected: false};
    default:
      return state;
  }
};
