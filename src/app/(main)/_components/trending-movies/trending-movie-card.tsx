import { getPoster } from '@/utils/helper/api.helper';
import { getDimension } from '@/utils/helper/dimension.helper';
import { TTrendingMovie } from '@/utils/types';
import { Link } from 'expo-router';
import { Image, View } from 'react-native';

const { height, width } = getDimension();

export function TrendingMovieCard({ poster_path, id }: TTrendingMovie) {
  return (
    <Link href={`movie/${id}`}>
      <View style={{ width: width * 0.6 }}>
        <Image
          className="rounded-xl"
          style={{ height: height * 0.4 }}
          source={{ uri: getPoster(poster_path, 500) }}
        />
      </View>
    </Link>
  );
}
