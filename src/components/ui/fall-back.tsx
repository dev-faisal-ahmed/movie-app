import { colors } from '@/theme';
import { getDimension } from '@/utils/helper/dimension.helper';
import { Text, View } from 'react-native';

type FallBackProps = {
  title: string;
  height?: number;
  width?: number;
};

const { width: screenWidth, height: screenHight } = getDimension();

export function FallBack({
  title,
  height = screenHight,
  width = screenWidth,
}: FallBackProps) {
  return (
    <View
      className="items-center justify-center flex-1 bg-neutral-700"
      style={{ height, width }}
    >
      <Text className="font-semibold text-lg" style={{ color: colors.text }}>
        {title}
      </Text>
    </View>
  );
}
