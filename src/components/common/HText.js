import React from 'react';
import {Text} from 'react-native';
import {colors} from '../../themes';
import Typography from '../../themes/typography';

//Text Component
const HText = ({type, style, align, color, children, ...props}) => {
  const fontWeights = () => {
    switch (type.charAt(0).toUpperCase()) {
      case 'R':
        return Typography.fontWeights.Regular;
      case 'M':
        return Typography.fontWeights.Medium;
      case 'B':
        return Typography.fontWeights.SemiBold;
      default:
        return Typography.fontWeights.Regular;
    }
  };

  const fontSize = () => {
    switch (type.slice(1)) {
      case '12':
        return Typography.fontSizes.f12;
      case '14':
        return Typography.fontSizes.f14;
      case '16':
        return Typography.fontSizes.f16;
      case '18':
        return Typography.fontSizes.f18;
      case '20':
        return Typography.fontSizes.f20;
      case '22':
        return Typography.fontSizes.f22;
      case '24':
        return Typography.fontSizes.f24;
      case '28':
        return Typography.fontSizes.f28;
      case '30':
        return Typography.fontSizes.f30;
      case '36':
        return Typography.fontSizes.f36;
      default:
        return Typography.fontSizes.f14;
    }
  };

  return (
    <Text
      style={[
        type && {...fontWeights(), ...fontSize()},
        {color: color ? color : colors.darkBlack},
        align && {textAlign: align},
        style,
      ]}
      {...props}>
      {children}
    </Text>
  );
};

export default React.memo(HText);
