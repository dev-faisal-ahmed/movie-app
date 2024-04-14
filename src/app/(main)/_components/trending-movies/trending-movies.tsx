import { Loader } from '@/components/ui/loader';
import { useFetch } from '@/hooks/use-fetch';
import { apiUrl } from '@/utils/helper/api.helper';
import { TTrendingMovieResponse } from '@/utils/types';
import { FlatList, View } from 'react-native';
import { TrendingMovieCard } from './trending-movie-card';

export function TrendingMovies() {
  const { data, loading } = useFetch<TTrendingMovieResponse>(apiUrl.trending);

  if (loading) return <Loader />;

  return (
    <View className="flex-1 mt-6">
      <FlatList
        horizontal
        data={data?.results.slice(0, 7)}
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
