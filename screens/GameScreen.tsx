import React, { useState, useRef, useEffect } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Card } from "../components/Card";
import { NumberContainer } from "../components/NumberContainer";
import { TitleText } from "../components/TitleText";
import { MyButton } from "../components/MyButton";
import { Color } from "../theme/Color";

const generateRandomBetween: (a: number, b: number, c: number) => number = (
  min,
  max,
  exclude
) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  }
  return rndNum;
};

interface GameScreenProps {
  userChoice: number;
  onGameOver: (a: number) => void;
}

export const GameScreen: React.FC<GameScreenProps> = ({
  userChoice,
  onGameOver,
}) => {
  const initialGuess = generateRandomBetween(1, 100, userChoice);
  const [currentGuess, setCurrentGuess] = useState<number>(initialGuess);
  const [guessList, setGuessList] = useState<number[]>([initialGuess]);
  const [minNumList, setMinNumList] = useState<number[]>([0]);
  const [maxNumList, setMaxNumList] = useState<number[]>([100]);

  // const currentLow = useRef(1);
  // const currentHigh = useRef(100);

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(guessList.length);
    }
  }, [currentGuess, userChoice, onGameOver]);

  const generateNextNumber = (direction: string) => {
    if (
      (direction === "lower" && currentGuess < userChoice) ||
      (direction === "greater" && currentGuess > userChoice)
    ) {
      Alert.alert("Don't lie", "You know better you're wrong...", [
        { text: "Sorry", style: "cancel" },
      ]);
      return;
    }
    let maxNum: number;
    let minNum: number;
    if (direction === "lower") {
      setMaxNumList(curList => [...curList, currentGuess]);
      maxNum = Math.min(...maxNumList, currentGuess);
      minNum = Math.max(...minNumList);
    } else {
      setMinNumList(curList => [...curList, currentGuess]);
      minNum = Math.max(...minNumList, currentGuess);
      maxNum = Math.min(...maxNumList);
    }
    const nextRndNum = generateRandomBetween(
      minNum,
      maxNum,
      currentGuess
    );
    setCurrentGuess(nextRndNum);
    setGuessList(curList => [nextRndNum, ...curList]);
  };

  return (
    <View style={styles.screen}>
      <TitleText>Opponent's Choice</TitleText>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <MyButton
          color={Color.secondary}
          onPress={() => {
            generateNextNumber("lower");
          }}
        >
          <AntDesign name="minus" size={24} color="white" />
        </MyButton>
        <MyButton
          color={Color.secondary}
          onPress={() => {
            generateNextNumber("greater");
          }}
        >
          <AntDesign name="plus" size={24} color="white" />
        </MyButton>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 300,
    maxWidth: "80%",
  },
});
