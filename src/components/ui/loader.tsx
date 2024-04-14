import { colors } from '@/theme';
import { getDimension } from '@/utils/helper/dimension.helper';
import { Text, View } from 'react-native';
import { CircleSnail } from 'react-native-progress';

const { height, width } = getDimension();
export function Loader() {
  return (
    <View
      style={{ height: height - 150, width }}
      className="justify-center items-center absolute top-0 left-0 bg-neutral-700/40 z-30"
    >
      <Text>
        <CircleSnail color={colors.text} size={120} />;
      </Text>
    </View>
  );
}
