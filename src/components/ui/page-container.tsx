import { PropsWithChildren } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

type PageContainerProps = PropsWithChildren & {
  className?: string;
};

export function PageContainer({ children }: PageContainerProps) {
  return (
    <SafeAreaView className="px-5 pt-4 bg-neutral-800 flex-1">
      {children}
    </SafeAreaView>
  );
}
