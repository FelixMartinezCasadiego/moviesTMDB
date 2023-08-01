import axios from 'axios';

export const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  headers: {
    Accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MTg2MDcyYmRlMmRkMDk5Yzc5Y2E1Zjc3MDQyOGJlMSIsInN1YiI6IjYzNmJkNTU4MjE2MjFiMDA3NzdjMTkwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EOwzsekurplvMVSe3suIdYHuPypz3fBoNIYd532TFdU',
  },
});
