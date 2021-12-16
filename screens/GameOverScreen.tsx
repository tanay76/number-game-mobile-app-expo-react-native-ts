import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { BodyText } from "../components/BodyText";
import { MyButton } from "../components/MyButton";
import { TitleText } from "../components/TitleText";
import { Color } from "../theme/Color";

interface GameOverScreenProps {
  roundsTaken: number;
  onRestart: () => void;
  number: number;
}

export const GameOverScreen: React.FC<GameOverScreenProps> = ({
  roundsTaken,
  onRestart,
  number,
}) => {
  return (
    <View style={styles.screen}>
      <TitleText>Game is over!</TitleText>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../assets/game-over.png')} />
      </View>
      <BodyText style={styles.bodyText}>
        Your phone has taken
        <TitleText color={Color.primary}>{roundsTaken}</TitleText> rounds to get
        the chosen number <TitleText color={Color.primary}>{number}</TitleText>.
      </BodyText>
      <View style={styles.buttonContainer}>
        <MyButton color={Color.success} onPress={onRestart}>
          NEW GAME
        </MyButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    width: "40%",
    marginVertical: 20,
  },
  imageContainer: {
    width: 300,
    height: 300,
    // borderRadius: 150,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: 30
  },
  image: {
    width: '100%',
    height: '100%'
  },
  bodyText: {
    textAlign: 'center'
  }
});
