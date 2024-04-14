import {
  Bars3CenterLeftIcon,
  MagnifyingGlassIcon,
} from 'react-native-heroicons/outline';
import { PageContainer } from '@/components/ui/page-container';
import { colors } from '@/theme';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View } from 'react-native';
import { TrendingMovies } from './_components/trending-movies/trending-movies';
import { MovieList } from './_components/movie-list/movie-list';

type TMovieList = { title: string; categoryId: 'upcoming' | 'top_rated' };
const moviesList: TMovieList[] = [
  { title: 'Upcoming Movies', categoryId: 'upcoming' },
  { title: 'Top Rated Movies', categoryId: 'top_rated' },
];

export default function HomeScreen() {
  return (
    <PageContainer>
      <StatusBar style="light" />
      <View className="flex-row items-center justify-between">
        <Bars3CenterLeftIcon size={30} color={'white'} />
        <Text className="text-white text-2xl font-bold tracking-widest">
          <Text style={{ color: colors.text }}>E</Text>
          mojiFy
        </Text>
        <MagnifyingGlassIcon size={30} color={'white'} />
      </View>
      <ScrollView className="mb-4" showsVerticalScrollIndicator={false}>
        <TrendingMovies />
        {moviesList.map((list) => (
          <MovieList customClass="mt-6" key={list.categoryId} {...list} />
        ))}
      </ScrollView>
    </PageContainer>
  );
}
