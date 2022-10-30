import { Button, StyleSheet, Text, View } from "react-native";

import Container from "@components/Container";
import useTimer from "@hooks/useTimer";
import { millisecondsToDigitalWithMilliseconds } from "@utils/time";

const Index = () => {
  const { time, start, stop, pause, resume } = useTimer(180000);

  return (
    <Container>
      <View style={styles.playerOne}>
        <Text style={styles.timerText}>
          {millisecondsToDigitalWithMilliseconds(time)}
        </Text>
      </View>
      <Button title="Start" onPress={() => start()} />
      <Button title="Pause" onPress={() => pause()} />
      <Button title="Resume" onPress={() => resume()} />
      <Button title="Stop" onPress={() => stop()} />
    </Container>
  );
};

const styles = StyleSheet.create({
  playerOne: {
    flex: 1,
    backgroundColor: "red",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  playerTwo: {
    flex: 1,
    backgroundColor: "blue",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  timerText: {
    fontSize: 100,
    color: "white",
  },
});

export default Index;
