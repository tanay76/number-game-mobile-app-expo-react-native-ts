import React, { ReactNode } from "react";
import { View, StyleSheet, ViewStyle, Dimensions } from "react-native";


interface CardProps {
  style: ViewStyle;
  children: ReactNode
}

export const Card: React.FC<CardProps> = ({ style, children }) => {
  return (
    <View style={{...styles.card, ...style} }>{children}</View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#eee',
    marginVertical: Dimensions.get('window').height / 70,
    padding: Dimensions.get('window').height / 70,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: Dimensions.get('window').height / 40,
    borderColor: '#000'
  }
});