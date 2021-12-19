import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
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
    height: Dimensions.get('window').height / 6,
    backgroundColor: Color.primary,
    marginBottom: Dimensions.get('window').height / 50,
    paddingTop: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center'
  }
});