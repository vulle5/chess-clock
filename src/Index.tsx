import { StyleSheet, Text, View } from 'react-native';

import Container from './components/shared/Container';
import useTimer from './hooks/useTimer';
import { millisecondsToDigital } from './utils/time';

const Index = () => {
  const { time: playerOneTimer } = useTimer(180000);
  const { time: playerTwoTimer } = useTimer(180000);

  return (
    <Container>
      <View style={styles.playerOne}>
        <Text style={styles.timerText}>{millisecondsToDigital(playerOneTimer)}</Text>
      </View>
      <View style={styles.playerTwo}>
        <Text style={styles.timerText}>{millisecondsToDigital(playerTwoTimer)}</Text>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  playerOne: {
    flex: 1,
    backgroundColor: 'red',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  playerTwo: {
    flex: 1,
    backgroundColor: 'blue',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  timerText: {
    fontSize: 100,
    color: 'white'
  }
});


export default Index;
