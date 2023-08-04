import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Cast, MovieFull} from '../interfaces/moviesInterfaces';
import Icon from 'react-native-vector-icons/Ionicons';
import CastItem from './CastItem';

interface Props {
  movieFull: MovieFull;
  cast: Cast[];
}

const MovieDetailsComponent = ({movieFull, cast}: Props) => {
  const currency = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(movieFull.budget);
  return (
    <>
      {/* Details */}
      <View style={styles.detailsContainer}>
        <View style={styles.voteAverge}>
          <Icon name="star-outline" color="grey" size={20} />
          <Text> {movieFull.vote_average} </Text>

          <Text style={styles.genresText}>
            - {movieFull.genres.map(g => g.name).join(', ')}
          </Text>
        </View>

        <Text style={styles.textTitle}>History</Text>
        <Text style={styles.subtitleText}>{movieFull.overview}</Text>
        <Text style={styles.textTitle}>Budget</Text>
        <Text style={styles.subtitleText}>{currency}</Text>
      </View>
      {/* Cast */}
      <View style={styles.castContainer}>
        <Text style={styles.textTitle}>Actors</Text>
        <FlatList
          data={cast}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <CastItem actor={item} />}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.flatListStyle}
        />
      </View>
    </>
  );
};

export default MovieDetailsComponent;

const styles = StyleSheet.create({
  detailsContainer: {
    marginHorizontal: 20,
    marginTop: 10,
  },
  voteAverge: {
    display: 'flex',
    flexDirection: 'row',
  },
  genresText: {
    marginLeft: 5,
  },
  textTitle: {
    fontSize: 20,
    marginTop: 10,
    fontWeight: 'bold',
  },
  subtitleText: {
    fontSize: 16,
    textAlign: 'justify',
    marginTop: 5,
  },
  castContainer: {
    marginTop: 10,
    marginHorizontal: 20,
    marginBottom: 100,
  },
  flatListStyle: {
    marginTop: 10,
    height: 70,
  },
});
