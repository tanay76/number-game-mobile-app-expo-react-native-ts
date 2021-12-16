import React, { ReactNode } from "react";
import { View, StyleSheet, ViewStyle } from "react-native";


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
    marginVertical: 10,
    padding: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 20,
    borderColor: '#000'
  }
});