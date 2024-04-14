import { Image, Text, View } from 'react-native';
import { getDimension } from '../helper/getDimension';
import Carousel from 'react-native-snap-carousel';

type TrendingMoviesProps = {
  data: string[];
};

const { width, height } = getDimension();

export const TrendingMovies = ({ data }: TrendingMoviesProps) => {
  return (
    <View className="mt-3">
      <Text className="text-white text-xl mb-4">Trending</Text>
      <Carousel
        data={data}
        renderItem={({ item, index }) => <MovieCard key={index} />}
        firstItem={1}
        inactiveSlideOpacity={0.5}
        sliderHeight={500}
        sliderWidth={width}
        slideStyle={{ display: 'flex', alignItems: 'center' }}
        itemWidth={width * 0.62}
      />
    </View>
  );
};

const MovieCard = () => {
  return (
    <View className="w-full">
      <Image
        style={{
          height: height * 0.4,
          width: width * 0.6,
        }}
        source={require('@/assets/images/dune-2-poster.jpg')}
        className="rounded-xl"
      />
    </View>
  );
};
