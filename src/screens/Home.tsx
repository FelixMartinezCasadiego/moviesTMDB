import {
  View,
  Text,
  Button,
  ActivityIndicator,
  Dimensions,
  StyleSheet,
  FlatList,
  ScrollView,
} from 'react-native';
import React from 'react';
import {useMovies} from '../hooks/useMovies';
import MoviePoster from '../components/MoviePoster';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Carousel from 'react-native-reanimated-carousel';
import HorizontalSlider from '../components/HorizontalSlider';
import GradientBackground from '../components/GradientBackground';

const Home = () => {
  const {top} = useSafeAreaInsets();
  const {nowPlaying, isLoading, popular, topRated, upcoming} = useMovies();
  const width = Dimensions.get('window').width;
  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator color={'red'} size={100} />
      </View>
    );
  }
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
