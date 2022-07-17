import React from 'react';
import {StyleSheet, Pressable} from 'react-native';
import {moderateScale} from '../../common/constants';
import {colors, styles} from '../../themes';
import HText from './HText';

const HButtonText = ({
  title,
  onPress,
  containerStyle,
  textStyle,
  rightIcon = null,
  leftIcon = null,
  type,
  ...props
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[localStyle.btnContainer, styles.rowCenter, containerStyle]}
      {...props}>
      {/* If Icon Added In Button Left Side */}
      {leftIcon && leftIcon}
      {/* Text In Button */}
      <HText
        type={type}
        align="center"
        style={{...localStyle.btnText, ...textStyle}}>
        {title}
      </HText>
      {/* If Icon Added In Button Right Side */}
      {rightIcon && rightIcon}
    </Pressable>
  );
};

const localStyle = StyleSheet.create({
  btnContainer: {
    backgroundColor: colors.primary,
    borderRadius: moderateScale(8),
    height: moderateScale(50),
  },
  btnText: {
    color: colors.white,
  },
});

export default HButtonText;
