import React, { ReactNode } from "react";
import { Text, StyleSheet, TextStyle, ColorValue } from 'react-native';

interface BodyTextProps {
  style?: TextStyle;
  children: ReactNode;
  color?: ColorValue;
}

export const BodyText: React.FC<BodyTextProps> = ({ style, color, children }) => {
  return (
    <Text style={{...styles.textStyle, ...style, color: color ? color : '#000'}}>{ children }</Text>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: 'OpenSans_400Regular',
    fontSize: 18
  }
});