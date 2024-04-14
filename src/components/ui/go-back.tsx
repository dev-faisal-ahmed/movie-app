import { colors } from '@/theme';
import { useNavigation } from 'expo-router';
import { TouchableOpacity } from 'react-native';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';

export function GoBack() {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <TouchableOpacity
      onPress={goBack}
      style={{ backgroundColor: colors.background, width: 40 }}
      className="absolute z-10 top-10 left-5 rounded-lg p-1 items-center"
    >
      <ChevronLeftIcon color={'white'} size={25} />
    </TouchableOpacity>
  );
}
