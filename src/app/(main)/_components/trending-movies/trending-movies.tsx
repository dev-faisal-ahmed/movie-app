import { Loader } from '@/components/ui/loader';
import { useFetch } from '@/hooks/use-fetch';
import { apiUrl } from '@/utils/helper/api.helper';
import { TTrendingMovieResponse } from '@/utils/types';
import { FlatList, Text, View } from 'react-native';
import { TrendingMovieCard } from './trending-movie-card';

export function TrendingMovies() {
  const { data, loading } = useFetch<TTrendingMovieResponse>(apiUrl.trending);

  return (
    <View className="relative flex-1 mt-6 mb-2">
      {loading && <Loader />}
      <Text className="text-lg font-bold text-white mb-2">Trending</Text>
      <FlatList
        horizontal
        data={data?.results?.slice(0, 7)}
        style={{ flex: 1 }}
        contentContainerStyle={{ gap: 15 }}
        renderItem={(each) => (
          <TrendingMovieCard
            key={each.index}
            poster_path={each.item.poster_path}
            id={each.item.id}
          />
        )}
      />
    </View>
  );
}
