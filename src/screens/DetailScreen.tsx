import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../navigation/Navigation';
import useMovieDetails from '../hooks/useMovieDetails';
import MovieDetailsComponent from '../components/MovieDetailsComponent';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {}

const screenHeight = Dimensions.get('screen').height;

const DetailScreen = ({route, navigation}: Props) => {
  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const {isLoading, cast, movieFull} = useMovieDetails(movie.id);

  return (
    <ScrollView>
      <View style={styles.imageContiner}>
        <Image source={{uri}} style={styles.posterImage} />
      </View>

      <View style={styles.marginContainer}>
        <Text style={styles.subTitle}> {movie.original_title} </Text>
        <Text style={styles.title}> {movie.title} </Text>
      </View>

      {isLoading ? (
        <ActivityIndicator size={30} color={'grey'} />
      ) : (
        <MovieDetailsComponent movieFull={movieFull!} cast={cast} />
      )}
      <TouchableOpacity
        style={styles.BackButton}
        onPress={() => navigation.pop()}>
        <Icon color={'white'} size={50} name="arrow-back-outline" />
      </TouchableOpacity>
    </ScrollView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  imageContiner: {
    width: '100%',
    height: screenHeight * 0.65,
  },
  posterImage: {
    flex: 1,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  marginContainer: {
    marginHorizontal: 15,
    marginTop: 15,
  },
  subTitle: {
    fontSize: 18,
    opacity: 0.8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  BackButton: {
    position: 'absolute',
    left: 5,
    top: 50,
  },
});
