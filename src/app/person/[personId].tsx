import { FallBack } from '@/components/ui/fall-back';
import { GoBack } from '@/components/ui/go-back';
import { Loader } from '@/components/ui/loader';
import { useFetch } from '@/hooks/use-fetch';
import { colors } from '@/theme';
import { apiUrl, getPoster } from '@/utils/helper/api.helper';
import { getDimension } from '@/utils/helper/dimension.helper';
import { TPerson } from '@/utils/types';
import { useLocalSearchParams } from 'expo-router';
import { useEffect } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { twMerge } from 'tailwind-merge';

export default function PersonScreen() {
  const { personId } = useLocalSearchParams();

  const { data, loading, fetchData } = useFetch<TPerson>(
    apiUrl.personDetails(personId as string)
  );

  console.log(data?.birthday);

  useEffect(() => {
    fetchData();
  }, [personId]);

  return (
    <SafeAreaView className="bg-neutral-800 flex-1">
      <GoBack />
      {loading ? (
        <View className="mt-52 justify-center items-center">
          <Loader />
        </View>
      ) : (
        <>
          <View
            style={{
              shadowColor: 'gray',
              shadowRadius: 40,
              shadowOffset: { width: 0, height: 5 },
              shadowOpacity: 1,
            }}
          >
            <Image
              style={{
                height: 240,
                width: 240,
                borderWidth: 3,
                borderColor: colors.neutral,
              }}
              className="mt-16 rounded-full mx-auto"
              source={{ uri: getPoster(data?.profile_path as string, 500) }}
            />
          </View>

          <Text className="text-white font-bold text-2xl text-center mt-5">
            {data?.name}
          </Text>
          <Text className="text-neutral-400 font-semibold text-center text-base mt-1">
            {data?.place_of_birth}
          </Text>
          {/* details */}
          <ScrollView className="mt-7" showsVerticalScrollIndicator={false}>
            <View className="bg-neutral-700  flex-row rounded-full mx-5  px-5 py-2 justify-center">
              {userInfoMiniBox(
                'Known For',
                data?.known_for_department as string
              )}
              {userInfoMiniBox(
                'Gender',
                data?.gender === 1 ? 'Female' : 'Male'
              )}
              {userInfoMiniBox(
                'BirthYear',
                data?.birthday?.slice(0, 4) as string,
                true
              )}
            </View>
            <View className="px-5 mt-8">
              <Text className="text-base font-bold text-white">BioGraphy</Text>
              <Text className="mt-5 text-neutral-400 text-justify">
                {data?.biography}
              </Text>
            </View>
          </ScrollView>
        </>
      )}
    </SafeAreaView>
  );
}

function userInfoMiniBox(title: string, value: string, hideBorder = false) {
  return (
    <View
      style={{ paddingHorizontal: 10 }}
      className={twMerge(!hideBorder && 'border-r-2 border-neutral-500')}
    >
      <Text className="text-white text-base text-center">{title}</Text>
      <Text className="text-neutral-300 text-center">{value}</Text>
    </View>
  );
}
