import { Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { colors } from '@/style/theme';
import { twMerge } from 'tailwind-merge';
import { getDimension } from '@/helper/getDimension';

type MovieListProps = {
  title: string;
  customClassName: string;
};

export const MovieList = ({ title, customClassName }: MovieListProps) => {
  const movieName = 'Avengers Infinity War';
  return (
    <View className={twMerge('', customClassName)}>
      <View className="flex-row justify-between items-center mb-3">
        <Text className="text-white font-semibold text-xl">{title}</Text>
        <TouchableOpacity>
          <Text className="text-base" style={{ color: colors.text }}>
            See All
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 15 }}
      >
        {[1, 2, 3].map((item) => (
          <MovieCard movieName={movieName} key={item} />
        ))}
      </ScrollView>
    </View>
  );
};

type MovieCardProps = {
  movieName: string;
};

const { height, width } = getDimension();

const MovieCard = ({ movieName }: MovieCardProps) => {
  return (
    <View className="">
      <Image
        className="object-cover object-center rounded-lg"
        style={{ height: height * 0.2, width: width * 0.5 }}
        source={require('@/assets/images/avenger-infinity-war.jpg')}
      />
      <Text className="text-white text-base mt-1">{movieName}</Text>
    </View>
  );
};
