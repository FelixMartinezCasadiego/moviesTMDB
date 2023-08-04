import {StyleSheet} from 'react-native';
import {useEffect, useState} from 'react';
import {movieDB} from '../api/movieDB';
import {MovieFull} from '../interfaces/moviesInterfaces';

interface MovieDetails {
  cast: any[];
  isLoading: boolean;
  movieFull: MovieFull;
}

const useMovieDetails = (movieId: number) => {
  const [state, setState] = useState<MovieDetails>();
  const getMovieDetails = async () => {
    const resp = await movieDB.get<MovieFull>(`/${movieId}`);
    console.log('resp.data -----> ', resp.data);
  };
  useEffect(() => {
    getMovieDetails();
  }, []);

  return {state};
};

export default useMovieDetails;

const styles = StyleSheet.create({});
