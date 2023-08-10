import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const GradientBackground = ({children}: Props) => {
  return <View style={styles.container}>{children}</View>;
};

export default GradientBackground;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#084F6A',
  },
});
