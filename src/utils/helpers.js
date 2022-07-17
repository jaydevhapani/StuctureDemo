import {Alert, Platform} from 'react-native';
import i18n from '../i18n/i18n';

// Check App Platform
const checkPlatform = () => {
  if (Platform.OS === 'android') {
    return 'android';
  } else {
    return 'ios';
  }
};

//Show Popup Alert
const showPopupWithOk = (title, message, okClicked) => {
  Alert.alert(title ? title : i18n.health_e, message ? message : '', [
    {text: i18n.ok.toUpperCase(), onPress: () => okClicked && okClicked()},
  ]);
};

//Show Popup with ok and cancel
const showPopupWithOkAndCancel = (title, message, okClicked, cancelClicked) => {
  Alert.alert(title ? title : i18n.health_e, message ? message : '', [
    {
      text: i18n.cancel,
      onPress: () => cancelClicked && cancelClicked(),
      style: 'cancel',
    },
    {
      text: i18n.ok,
      onPress: () => okClicked && okClicked(),
    },
  ]);
};

export {checkPlatform, showPopupWithOk, showPopupWithOkAndCancel};
