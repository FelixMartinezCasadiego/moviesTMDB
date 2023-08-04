import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Cast} from '../interfaces/moviesInterfaces';

interface Props {
  actor: Cast;
}

const CastItem = ({actor}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;
  return (
    <View style={styles.container}>
      {actor.profile_path && (
        <Image source={{uri: uri}} style={styles.imgStyle} />
      )}
      <View style={styles.actorInfo}>
        <Text style={styles.actorName}>{actor.name}</Text>
        <Text style={styles.actorCharacter}>{actor.character}</Text>
      </View>
    </View>
  );
};

export default CastItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9,
    borderRadius: 10,
    marginRight: 25,
    paddingRight: 10,
    height: 50,
  },
  actorName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  actorCharacter: {
    fontSize: 16,
    opacity: 0.7,
  },
  imgStyle: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  actorInfo: {
    marginLeft: 10,
    marginTop: 5,
  },
});
