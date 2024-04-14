import { Loader } from '@/components/ui/loader';
import { useFetch } from '@/hooks/use-fetch';
import { apiUrl } from '@/utils/helper/api.helper';
import { TCastResponse } from '@/utils/types';
import { FlatList, Text, View } from 'react-native';
import { CastContainer } from './cast-container';

type TopCastsProps = {
  movieId: string;
};

export function TopCasts({ movieId }: TopCastsProps) {
  const { data, loading } = useFetch<TCastResponse>(
    apiUrl.movieCredits(movieId)
  );

  console.log(data?.cast);

  return (
    <View className="mt-7">
      {loading && <Loader />}
      <Text className="text-white text-lg font-bold mb-3">Top Casts</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 20 }}
        data={data?.cast.slice(0, 12)}
        renderItem={(cast) => <CastContainer {...cast.item} />}
        keyExtractor={(items) => items.cast_id}
      />
    </View>
  );
}
