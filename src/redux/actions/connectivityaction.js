import {INTERNET_CONNECTED, INTERNET_DISCONNECTED} from '../types';

export function internetConnectedNow() {
  return dispatch => {
    dispatch({type: INTERNET_CONNECTED});
  };
}

export function internetDisconnectedNow() {
  return dispatch => {
    dispatch({type: INTERNET_DISCONNECTED});
  };
}
