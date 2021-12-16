import React, { ReactNode } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Color } from "../theme/Color";

interface NumberContainerProps {
  children: ReactNode;
}

export const NumberContainer: React.FC<NumberContainerProps> = ({
  children,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textView}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Color.secondary,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  textView: {
    color: Color.secondary,
    fontSize: 22,
  },
});
