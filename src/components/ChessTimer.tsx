import { StyleSheet, View } from "react-native"

import useTimer from "@hooks/useTimer";
import DigitalTime from "./DigitalTime";
import Container from "./Container";
import useScreenOrientation from "@hooks/useScreenOrientation";

const ChessTimer: React.FC<{}> = () => {
  const { time: playerOneTime, ...playerOneController } = useTimer(180000);
  const { time: playerTwoTime, ...playerTwoController } = useTimer(180000);
  const { isPortrait } = useScreenOrientation();

  return (
    <Container styles={{ flexDirection: isPortrait ? 'column' : 'row'}}>
      <View style={[styles.playerOne, { transform: isPortrait ? [{ rotate: "180deg" }] : [{ rotate: '0deg' }]}]}>
        <DigitalTime ms={playerOneTime} />
      </View>
      <View style={styles.playerTwo}>
        <DigitalTime ms={playerOneTime} />
      </View>
    </Container>
  );
}

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

export default ChessTimer
