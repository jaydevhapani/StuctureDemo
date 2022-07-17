import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import {moderateScale} from '../../common/constants';
import {colors, styles} from '../../themes';
import typography from '../../themes/typography';
import HText from './HText';

const HInput = props => {
  let {
    _value,
    label,
    inputContainerStyle,
    inputBoxStyle,
    toGetTextFieldValue,
    placeHolder,
    keyBoardType,
    _onFocus,
    _errorText,
    _isSecure,
    fieldRef,
    _maxLength,
    _editable = true,
    autoCapitalize,
    required = false,
    labelStyle,
    multiLine,
  } = props;

  // Change Text Input Value
  const onChangeText = val => {
    toGetTextFieldValue(val);
  };
  fieldRef = React.createRef();

  return (
    <>
      {label && (
        <View style={[localStyle.labelContainer, labelStyle]}>
          <View style={styles.flexRow}>
            {/* Input Label  */}
            <HText style={localStyle.labelText} type={'r16'}>
              {label}
            </HText>
            {/* If Input is Required */}
            {required && <HText style={localStyle.starSymbol}>{' *'}</HText>}
          </View>
        </View>
      )}
      {/* Main Input Container */}
      <View
        style={[
          localStyle.inputContainer,
          {borderColor: _errorText ? colors.red : colors.inputBorder},
          inputContainerStyle,
        ]}>
        <TextInput
          ref={fieldRef.current}
          secureTextEntry={_isSecure}
          value={_value}
          maxLength={_maxLength}
          defaultValue={_value}
          autoCorrect={false}
          autoCapitalize={autoCapitalize}
          placeholderTextColor={colors.placeHolder}
          onChangeText={onChangeText}
          keyboardType={keyBoardType}
          multiline={multiLine}
          editable={_editable}
          onFocus={_onFocus}
          placeholder={placeHolder}
          style={[
            localStyle.inputBox,
            inputBoxStyle,
            {
              ...typography.fontWeights.Regular,
            },
          ]}
          {...props}
        />
      </View>
    </>
  );
};

const localStyle = StyleSheet.create({
  labelText: {
    color: colors.darkBlack,
    textAlign: 'left',
    opacity: 0.8,
  },
  inputBox: {
    height: moderateScale(50),
    width: '85%',
    ...typography.fontSizes.f16,
    ...typography.fontWeights.Regular,
    ...styles.ph20,
  },
  inputContainer: {
    borderWidth: moderateScale(1),
    borderRadius: moderateScale(6),
    borderColor: colors.inputBorder,
    height: moderateScale(50),
    ...styles.rowSpaceBetween,
    ...styles.mt10,
  },
  labelContainer: {
    ...styles.mt20,
    ...styles.rowSpaceBetween,
  },
  starSymbol: {
    color: colors.colorRed,
  },
});

export default HInput;
