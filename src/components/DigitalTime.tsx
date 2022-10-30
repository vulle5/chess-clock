import {
  millisecondsToDigital,
  millisecondsToDigitalWithMilliseconds,
} from "@utils/time";
import { StyleSheet, Text } from "react-native";

const DigitalTime: React.FC<DigitalTimeProps> = ({ ms }) => {
  const digitalTime =
    ms > 60000
      ? millisecondsToDigital(ms)
      : millisecondsToDigitalWithMilliseconds(ms);
  return <Text style={styles.timerText}>{digitalTime}</Text>;
};

interface DigitalTimeProps {
  ms: number;
}

const styles = StyleSheet.create({
  timerText: {
    fontSize: 100,
    color: "white",
  },
});

export default DigitalTime;
