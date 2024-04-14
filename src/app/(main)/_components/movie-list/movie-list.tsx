import { useFetch } from '@/hooks/use-fetch';
import { colors } from '@/theme';
import { apiUrl } from '@/utils/helper/api.helper';
import { TMovieListResponse } from '@/utils/types';
import { Link } from 'expo-router';
import { FlatList, Text, View } from 'react-native';
import { twMerge } from 'tailwind-merge';
import { MovieCard } from './movie-card';
import { Loader } from '@/components/ui/loader';

type MovieListProps = {
  title: string;
  customClass?: string;
  categoryId: 'upcoming' | 'top_rated';
};

export function MovieList({ title, customClass, categoryId }: MovieListProps) {
  const { data, loading } = useFetch<TMovieListResponse>(apiUrl[categoryId]);

  return (
    <View className={twMerge('relative', customClass)}>
      {loading && <Loader />}
      <View className="flex-row items-center justify-between mb-3">
        <Text className="text-lg font-bold text-white">{title}</Text>
        <Link href={`movie/category/${categoryId}`}>
          <Text className="font-bold" style={{ color: colors.text }}>
            See More
          </Text>
        </Link>
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 10 }}
        data={data?.results.slice(0, 5)}
        renderItem={(movie) => <MovieCard key={movie.index} {...movie.item} />}
      />
    </View>
  );
}
