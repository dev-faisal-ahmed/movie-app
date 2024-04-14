import {
  Bars3CenterLeftIcon,
  MagnifyingGlassIcon,
} from 'react-native-heroicons/outline';
import { PageContainer } from '@/components/ui/page-container';
import { colors } from '@/theme';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View } from 'react-native';
import { TrendingMovies } from './_components/trending-movies/trending-movies';
import { MovieList } from '../../components/shared/movie-list/movie-list';
import { useFetch } from '@/hooks/use-fetch';
import { apiUrl } from '@/utils/helper/api.helper';
import { TMovieListResponse } from '@/utils/types';
import { Loader } from '@/components/ui/loader';

export default function HomeScreen() {
  const { data: upcomingData, loading: loadingUpcoming } =
    useFetch<TMovieListResponse>(apiUrl.upcoming);

  const { data: topRatedData, loading: loadingTopRated } =
    useFetch<TMovieListResponse>(apiUrl.top_rated);
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
        {(loadingUpcoming || loadingTopRated) && <Loader />}
        <TrendingMovies />
        <MovieList
          customClass="mt-6"
          title="Upcoming Movies"
          url="/movie/upcoming"
          data={upcomingData?.results || []}
        />

        <MovieList
          customClass="mt-6"
          title="Top Rated Movies"
          url="/movie/top_rated"
          data={topRatedData?.results || []}
        />
      </ScrollView>
    </PageContainer>
  );
}
