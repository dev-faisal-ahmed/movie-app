import { colors } from '@/theme';
import { getDimension } from '@/utils/helper/dimension.helper';

import { Text, View } from 'react-native';
import { CircleSnail } from 'react-native-progress';

const { height } = getDimension();
export function Loader() {
  return (
    <View
      style={{ height: height - 150 }}
      className="justify-center items-center fixed top-0 left-0 bg-neutral-700/40"
    >
      <Text>
        <CircleSnail color={colors.text} size={120} />;
      </Text>
    </View>
  );
}
