import React, { ReactNode } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ViewStyle, ColorValue } from 'react-native';

interface MyButtonProps {
  style?: ViewStyle;
  children: ReactNode;
  onPress: () => void;
  color: ColorValue;
}

export const MyButton: React.FC<MyButtonProps> = ({ style, children, onPress, color }) => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
      <View style={{...styles.button, ...style, backgroundColor: color}} >
        <Text style={styles.buttonText}>{ children }</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 12,
    borderRadius: 10
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'OpenSans_400Regular',
    fontSize: 16,
    textAlign: 'center'
  }
});