import { colors } from '@/theme';
import { Text, View } from 'react-native';
import { CircleSnail } from 'react-native-progress';

export function Loader() {
  return (
    <View className="justify-center w-full items-center absolute top-0 left-0 z-30">
      <Text>
        <CircleSnail color={colors.text} thickness={10} size={140} />;
      </Text>
    </View>
  );
}
