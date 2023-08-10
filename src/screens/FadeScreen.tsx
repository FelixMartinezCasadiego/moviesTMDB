import {Animated, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import useFade from '../hooks/useFade';

const FadeScreen = () => {
  const {fadeIn, fadeOut} = useFade();

  return (
    <View style={styles.container}>
      <Animated.View />
    </View>
  );
};

export default FadeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
});
