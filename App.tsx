import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import AppLoading from 'expo-app-loading';
// import { AppLoading } from 'expo';
import {
  useFonts,
  OpenSans_400Regular,
  OpenSans_700Bold,
} from '@expo-google-fonts/open-sans';
import { Header } from "./components/Header";
import { GameOverScreen } from "./screens/GameOverScreen";
import { GameScreen } from "./screens/GameScreen";
import { StartGameScreen } from "./screens/StartGameScreen";


const App: React.FC = () => {
  const [userNumber, setUserNumber] = useState<number>(0);
  const [totalRounds, setTotalRounds] = useState<number>(0);
  let [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  const configureNewGameHandler = () => {
    setTotalRounds(0);
    setUserNumber(0);
  };

  const startGameHandler: (a: number) => void = (userInput) => {
    setUserNumber(userInput);
  };

  const gameOverHandler = (rounds: number) => {
    setTotalRounds(rounds);
  };

  return (
    <View style={styles.overallScreen}>
      <Header />
      {userNumber === 0 && totalRounds <= 0 && (<StartGameScreen onStartGame={startGameHandler} />)}
      {userNumber > 0 && totalRounds <= 0 && (<GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />)}
      {totalRounds > 0 && (<GameOverScreen number={userNumber} roundsTaken={totalRounds} onRestart={configureNewGameHandler} />)}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  overallScreen: {
    flex: 1,
  },
});

export default App;