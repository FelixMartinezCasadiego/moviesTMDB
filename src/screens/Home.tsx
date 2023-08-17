import {
  View,
  ActivityIndicator,
  Dimensions,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {useMovies} from '../hooks/useMovies';
import MoviePoster from '../components/MoviePoster';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Carousel from 'react-native-reanimated-carousel';
import HorizontalSlider from '../components/HorizontalSlider';
import GradientBackground from '../components/GradientBackground';
import {getColors} from '../helpers/getColors';
import {GradientContext} from '../context/GradientContext';

const Home = () => {
  const {setMainColors} = useContext(GradientContext);
  const {top} = useSafeAreaInsets();
  const {nowPlaying, isLoading, popular, topRated, upcoming} = useMovies();
  const width = Dimensions.get('window').width;

  useEffect(() => {
    if (nowPlaying.length > 0) {
      getPosterColors(0);
    }
  }, [nowPlaying]);

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator color={'red'} size={100} />
      </View>
    );
  }
  const getPosterColors = async (index: number) => {
    const movie = nowPlaying[index];
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const [primary = 'green', secondary = 'orange'] = await getColors(uri);
    setMainColors({primary, secondary});
  };
  return (
    <GradientBackground>
      <ScrollView>
        <View
          style={{
            marginTop: top + 20,
          }}>
          <Carousel
            loop
            width={width}
            height={width}
            autoPlay={true}
            data={nowPlaying}
            mode="parallax"
            scrollAnimationDuration={2000}
            renderItem={({item}) => <MoviePoster movie={item} />}
            onSnapToItem={index => getPosterColors(index)}
          />
          <HorizontalSlider title="Popular" movies={popular} />
          <HorizontalSlider title="Top Rated" movies={topRated} />
          <HorizontalSlider title="Upcoming" movies={upcoming} />
        </View>
      </ScrollView>
    </GradientBackground>
  );
};

export default Home;

const styles = StyleSheet.create({});
