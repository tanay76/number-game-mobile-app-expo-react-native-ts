import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Color } from '../theme/Color';
import { TitleText } from './TitleText';

export const Header: React.FC = () => {
  return (
    <View style={styles.container}>
      <TitleText>Guess a number</TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 100,
    backgroundColor: Color.primary,
    marginBottom: 20,
    paddingTop: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center'
  }
});