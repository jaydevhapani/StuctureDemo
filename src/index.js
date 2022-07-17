import React, {useEffect} from 'react';
import AppNavigator from './navigation';
import NetInfo from '@react-native-community/netinfo';
import {
  internetConnectedNow,
  internetDisconnectedNow,
} from './redux/actions/connectivityaction';
import {useDispatch} from 'react-redux';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    //Check internet connection
    const _subscription = NetInfo.addEventListener(state => {
      if (state.isConnected) {
        dispatch(internetConnectedNow());
      } else {
        dispatch(internetDisconnectedNow());
      }
    });
    _subscription();
  }, []);

  return <AppNavigator />;
}
