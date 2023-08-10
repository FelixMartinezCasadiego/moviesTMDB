import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const GradientBackground = ({children}: Props) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#084F6A', '#75CEDB', 'white']}
        style={{...StyleSheet.absoluteFillObject}}
        start={{x: 0.1, y: 0.1}}
        end={{x: 0.5, y: 0.5}}
      />
      {children}
    </View>
  );
};

export default GradientBackground;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#084F6A',
  },
});
