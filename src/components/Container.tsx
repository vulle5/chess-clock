import { View, StyleSheet } from 'react-native';

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
}

interface ContainerProps {
  children: React.ReactNode;
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default Container;
