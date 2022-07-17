import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import NoInternet from '../containers/nointernet/NoInternet';
import StackNavigation from './type/StackNavigation';

export default function AppNavigator() {
  const isConnect = useSelector(
    state => state.connectivity.isInternetConnected,
  );

  // If Internet is not connected
  if (!isConnect) {
    return <NoInternet />;
  }

  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
}
