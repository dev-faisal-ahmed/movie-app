import { colors } from '@/theme';
import { getPoster } from '@/utils/helper/api.helper';
import { getDimension } from '@/utils/helper/dimension.helper';
import { TMovieList } from '@/utils/types';
import { Link } from 'expo-router';
import { Image, Text, View } from 'react-native';
import { StarIcon } from 'react-native-heroicons/solid';

const { width, height } = getDimension();

export function MovieCard({
  id,
  original_title,
  poster_path,
  vote_average,
}: TMovieList) {
  return (
    <Link href={`movie/${id}`}>
      <View style={{ width: width * 0.4 }}>
        <Image
          style={{ height: height * 0.3, width: width * 0.4 }}
          source={{ uri: getPoster(poster_path, 300) }}
          className="rounded-lg"
        />
        <View className="flex-row items-center justify-between">
          <Text className="text-neutral-400">
            {original_title.length > 12
              ? original_title.slice(0, 10) + '...'
              : original_title}
          </Text>
          <View className="flex-row items-center gap-1">
            <StarIcon color={colors.text} size={15} />
            <Text className="text-neutral-400">
              {vote_average ? vote_average.toFixed(2) : 'N/A'}
            </Text>
          </View>
        </View>
      </View>
    </Link>
  );
}
