import {useEffect, useState} from 'react';
import {movieDB} from '../api/movieDB';
import {Credits, MovieFull} from '../interfaces/moviesInterfaces';

interface MovieDetails {
  cast: Credits[];
  isLoading: boolean;
  movieFull?: MovieFull;
}

const useMovieDetails = (movieId: number) => {
  const [state, setState] = useState<MovieDetails>({
    isLoading: true,
    movieFull: undefined,
    cast: [],
  });
  const getMovieDetails = async () => {
    try {
      const movieDetailsPromise = movieDB.get<MovieFull>(`/${movieId}`);
      const castPromise = movieDB.get<Credits>(`/${movieId}/credits`);
      const [movieDetailsResp, castResp] = await Promise.all([
        movieDetailsPromise,
        castPromise,
      ]);
      setState({
        isLoading: false,
        movieFull: movieDetailsResp.data,
        cast: castResp.data.cast,
      });
    } catch (error) {
      console.log('error getMovieDetails: ', error);
    }
  };
  useEffect(() => {
    getMovieDetails();
  }, []);

  return {...state};
};

export default useMovieDetails;
