import { StatusBar } from 'expo-status-bar';
import { ReactNode } from 'react';
import { View } from 'react-native';
import { twMerge } from 'tailwind-merge';

type PageContainerProps = {
  children: ReactNode;
  className?: string;
};

export const PageContainer = ({ children, className }: PageContainerProps) => {
  return (
    <View className={twMerge('flex-1 pt-3 px-5 bg-neutral-800', className)}>
      <StatusBar style="light" />
      {children}
    </View>
  );
};
