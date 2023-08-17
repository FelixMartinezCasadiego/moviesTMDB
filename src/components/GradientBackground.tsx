import {Animated, StyleSheet, View} from 'react-native';
import React, {useContext, useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {GradientContext} from '../context/GradientContext';
import useFade from '../hooks/useFade';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const GradientBackground = ({children}: Props) => {
  const {colors, prevColors, setPrevMainColor} = useContext(GradientContext);
  const {opacity, fadeIn, fadeOut} = useFade();

  useEffect(() => {
    fadeIn(() => setPrevMainColor(colors));
    fadeOut();
  }, [colors]);

  useFade;
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[prevColors.primary, prevColors.secondary, 'white']}
        style={{...StyleSheet.absoluteFillObject}}
        start={{x: 0.1, y: 0.1}}
        end={{x: 0.5, y: 0.5}}
      />
      <Animated.View style={{...StyleSheet.absoluteFillObject, opacity}}>
        <LinearGradient
          colors={[colors.primary, colors.secondary, 'white']}
          style={{...StyleSheet.absoluteFillObject}}
          start={{x: 0.1, y: 0.1}}
          end={{x: 0.5, y: 0.5}}
        />
      </Animated.View>

      {children}
    </View>
  );
};

export default GradientBackground;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
