import { colors } from '@/theme';
import { getDimension } from '@/utils/helper/dimension.helper';

import { Text, View } from 'react-native';
import { CircleSnail } from 'react-native-progress';

const { height } = getDimension();
export function Loader() {
  return (
    <View
      style={{ height: height - 150 }}
      className="justify-center items-center"
    >
      <Text>
        <CircleSnail color={colors.text} size={120} />;
      </Text>
    </View>
  );
}
