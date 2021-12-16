import React, { ReactNode } from "react";
import { Text, StyleSheet, TextStyle, ColorValue } from 'react-native';

interface TitleTextProps {
  style?: TextStyle;
  children: ReactNode;
  color?: ColorValue;
}

export const TitleText: React.FC<TitleTextProps> = ({ style, color, children }) => {
  return (
    <Text style={{...styles.textStyle, ...style, color: color ? color : '#000'}}>{ children }</Text>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: 'OpenSans_700Bold',
    fontSize: 22
  }
});