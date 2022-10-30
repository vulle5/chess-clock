import { View, StyleSheet, ViewProps } from 'react-native';

const Container: React.FC<ContainerProps> = ({ children, styles: asStyle }) => {
  return (
    <View style={[styles.container, asStyle]}>
      {children}
    </View>
  );
}

interface ContainerProps {
  children: React.ReactNode;
  styles?: ViewProps['style'];
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default Container;
