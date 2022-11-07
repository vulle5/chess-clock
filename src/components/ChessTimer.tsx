import { Pressable, StyleSheet, Text } from "react-native";

import useTimer, { Timer } from "@hooks/useTimer";
import DigitalTime from "./DigitalTime";
import Container from "./Container";
import useScreenOrientation from "@hooks/useScreenOrientation";
import useSound from "@hooks/useSound";

const ChessTimer: React.FC<{}> = () => {
  const playerOne = useTimer({ initialTime: 180000 });
  const playerTwo = useTimer({ initialTime: 180000 });
  const { play: playSound } = useSound(require("@assets/sounds/switch.wav"));
  const { isPortrait } = useScreenOrientation();

  const onToggleTimer = (pressedTimer: Timer, otherTimer: Timer) => {
    pressedTimer.pause();
    otherTimer.isStarted() ? otherTimer.resume() : otherTimer.start();
    (pressedTimer.isPaused() || pressedTimer.isStopped()) && playSound();
  };

  return (
    <Container styles={{ flexDirection: isPortrait ? "column" : "row" }}>
      <Pressable
        android_disableSound
        onPress={() => onToggleTimer(playerOne, playerTwo)}
        style={[
          styles.playerOne,
          {
            transform: isPortrait
              ? [{ rotate: "180deg" }]
              : [{ rotate: "0deg" }],
          },
        ]}
      >
        <DigitalTime ms={playerOne.time} />
      </Pressable>
      <Pressable
        android_disableSound
        onPress={() => onToggleTimer(playerTwo, playerOne)}
        style={styles.playerTwo}
      >
        <DigitalTime ms={playerTwo.time} />
      </Pressable>
    </Container>
  );
};

const styles = StyleSheet.create({
  playerOne: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  playerTwo: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ChessTimer;
