import { getPoster } from '@/utils/helper/api.helper';
import { truncate } from '@/utils/helper/ui.helper';
import { TCast } from '@/utils/types';
import { Link } from 'expo-router';
import { Image, Text, View } from 'react-native';

export function CastContainer({
  name,
  profile_path,
  character,
  cast_id,
}: TCast) {
  return (
    <Link href={`person/${cast_id}`}>
      <View style={{ width: 100 }}>
        <Image
          style={{ width: 100, height: 100 }}
          className="rounded-full object-cover"
          source={{ uri: getPoster(profile_path, 300) }}
        />
        <Text className="text-neutral-300 text-center mt-2">
          {truncate(name, 15)}
        </Text>
        <Text className="text-neutral-400 text-xs text-center mt-1">
          {truncate(character, 18)}
        </Text>
      </View>
    </Link>
  );
}
