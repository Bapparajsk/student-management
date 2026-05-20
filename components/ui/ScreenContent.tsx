import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';

import { SafeAreaView } from 'react-native-safe-area-context';

import { Header } from 'components/header';

interface ScreenContentProps {
  path: string;
  children?: React.ReactNode;
}

const AnimatedScrollView =
  Animated.createAnimatedComponent(
    Animated.ScrollView
  );

export const ScreenContent: React.FC<
  ScreenContentProps
> = ({
  path,
  children,
}) => {
    const scrollY = useSharedValue(0);

    const onScroll =
      useAnimatedScrollHandler({
        onScroll: (event) => {
          scrollY.value =
            event.contentOffset.y;
        },
      });

    return (
      <SafeAreaView
        className="flex-1 overflow-hidden bg-[#050816]"
        key={path}
      >
        <Header scrollY={scrollY} />

        <AnimatedScrollView
          onScroll={onScroll}
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingTop: 100,
            paddingHorizontal: 16,
            paddingBottom: 40,
          }}
        >
          {children}
        </AnimatedScrollView>
      </SafeAreaView>
    );
  };