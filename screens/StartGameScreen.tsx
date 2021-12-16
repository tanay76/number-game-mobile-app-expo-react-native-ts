import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import { Color } from "../theme/Color";
import { Card } from "../components/Card";
import { NumberContainer } from "../components/NumberContainer";
import { Input } from "../components/Input";
import { TitleText } from "../components/TitleText";
import { BodyText } from "../components/BodyText";
import { MyButton } from "../components/MyButton";

interface StartGameScreenProps {
  onStartGame: (a: number) => void;
}

export const StartGameScreen: React.FC<StartGameScreenProps> = ({ onStartGame }) => {
  const [selectedValue, setSelectedValue] = useState<string>('');
  const [confirmed, setConfirmed] = useState<boolean>(false);
  const [enteredNumber, setEnteredNumber] = useState<number>(0);

  const changeValueHandler = (textInput: string) => {
    setConfirmed(false);
    const numString = textInput.replace(/[^0-9]/g, '');
    setSelectedValue(numString);
  };

  const resetValueHandler = () => {
    setSelectedValue('');
    setConfirmed(false);
  };

  const confirmValueHandler = () => {
    const enteredNum = parseInt(selectedValue);
    if (isNaN(enteredNum) || enteredNum <= 0 || enteredNum > 99) {
      Alert.alert(
        "Invalid Number!",
        "You should choose a number between 1 and 99",
        [{ text: "Okay", style: 'destructive', onPress: resetValueHandler }]
      );
      setConfirmed(false);
      return;
    }
    setEnteredNumber(enteredNum);
    setSelectedValue('');
    setConfirmed(true);
    Keyboard.dismiss();
  };

  const confirmedOutput = (
    <Card style={styles.summaryContainer}>
      <BodyText>You selected</BodyText>
      <NumberContainer>{enteredNumber}</NumberContainer>
      <View style={styles.btn}>
        <MyButton color={Color.error} onPress={() => onStartGame(enteredNumber)}>START GAME</MyButton>
      </View>
    </Card>
  );

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.mainContainer}>
        <TitleText style={styles.firstText}>Start a New Game</TitleText>
        <Card style={styles.inputCard}>
          <BodyText>Select a number</BodyText>
          <Input
            style={styles.textInput}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={(text) => changeValueHandler(text)}
            value={selectedValue}
          />
          <View style={styles.buttonContainers}>
            <View style={styles.btn}>
              <MyButton
                color={Color.secondary}
                onPress={() => {
                  resetValueHandler();
                  setConfirmed(false);
                }}
              >RESET</MyButton>
            </View>
            <View style={styles.btn}>
              <MyButton
                color={Color.primary}
                onPress={confirmValueHandler}
              >CONFIRM</MyButton>
            </View>
          </View>
        </Card>
        {confirmed && confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  firstText: {
    marginVertical: 10,
  },
  inputCard: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
    borderRadius: 10
  },
  textInput: {
    width: 30,
    textAlign: 'center'
  },
  buttonContainers: {
    flexDirection: "row",
    width: "100%",
    marginVertical: 10,
    justifyContent: "space-around",
    alignItems: "center",
  },
  btn: {
    width: "40%",
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: 'center'
  }
});
