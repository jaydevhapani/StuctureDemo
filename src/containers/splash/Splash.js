import React, {useEffect} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {StackNav} from '../../navigation/NavigationKeys';
import {colors, styles} from '../../themes';
import SplashScreen from 'react-native-splash-screen';

//Splash Screen
const Splash = ({navigation}) => {
  useEffect(() => {
    SplashScreen.hide();
    makeAsyncProcessing();
  }, []);

  const makeAsyncProcessing = () => {
    //You have to put login of api call here
    // navigation.replace(StackNav.Initial);
  };

  return (
    <View style={localStyles.container}>
      <ActivityIndicator size={'large'} />
    </View>
  );
};

const localStyles = StyleSheet.create({
  container: {
    ...styles.center,
    ...styles.flex,
    backgroundColor: colors.white,
  },
});

export default Splash;
