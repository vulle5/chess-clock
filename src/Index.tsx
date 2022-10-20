import { StyleSheet, Text, View } from 'react-native';
import { useRecoilValue } from 'recoil';
import Container from './components/shared/Container';
import { timersAsDigital } from './recoil/atoms/timer';

const Index = () => {
  const [playerOneTimer, playerTwoTimer] = useRecoilValue(timersAsDigital)

  return (
    <Container>
      <View style={styles.playerOne}>
        <Text style={styles.timerText}>{playerOneTimer}</Text>
      </View>
      <View style={styles.playerTwo}>
        <Text style={styles.timerText}>{playerTwoTimer}</Text>
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
