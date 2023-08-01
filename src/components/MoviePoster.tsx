import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Movie} from '../interfaces/moviesInterfaces';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

interface Props {
  movie: Movie;
  height?: number;
  width?: number;
}

type Navigation = {
  DetailScreen: Movie;
};

const MoviePoster = ({movie, height = 420, width = 380}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const navigation = useNavigation<NativeStackNavigationProp<Navigation>>();

  return (
    <TouchableOpacity
      style={{height, width, marginHorizontal: 5}}
      activeOpacity={0.8}
      onPress={() => navigation.navigate('DetailScreen', movie)}>
      <Image source={{uri}} style={styles.image} />
    </TouchableOpacity>
  );
};

export default MoviePoster;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 18,
    resizeMode: 'stretch',
  },
});
