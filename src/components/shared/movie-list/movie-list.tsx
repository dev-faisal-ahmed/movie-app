import { colors } from '@/theme';
import { TMovieList } from '@/utils/types';
import { Link } from 'expo-router';
import { FlatList, Text, View } from 'react-native';
import { twMerge } from 'tailwind-merge';
import { MovieCard } from './movie-card';

type MovieListProps = {
  title: string;
  customClass?: string;
  url: string;
  data: TMovieList[];
};

export function MovieList({ title, customClass, url, data }: MovieListProps) {
  return (
    <View className={twMerge('relative', customClass)}>
      <View className="flex-row items-center justify-between mb-3">
        <Text className="text-lg font-bold text-white">{title}</Text>
        <Link href={url}>
          <Text className="font-bold" style={{ color: colors.text }}>
            See More
          </Text>
        </Link>
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 10 }}
        data={data?.slice(0, 5)}
        renderItem={(movie) => <MovieCard key={movie.index} {...movie.item} />}
      />
    </View>
  );
}
