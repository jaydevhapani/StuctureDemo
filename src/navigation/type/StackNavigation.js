import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StackNav} from '../NavigationKeys';
import {StackRoute} from '../NavigationRoutes';

export default function MainStack() {
  const Stack = createNativeStackNavigator();


  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={StackNav.Splash}>
      <Stack.Screen name={StackNav.Splash} component={StackRoute.Splash} />
    </Stack.Navigator>
  );
}
