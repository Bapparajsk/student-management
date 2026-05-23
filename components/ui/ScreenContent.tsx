import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';

import { SafeAreaView } from 'react-native-safe-area-context';

import { Header } from 'components/header';

interface ScreenContentProps {
  path: string;
  children?: React.ReactNode;
  bottomBarHeight?: number;
  header?: {
    showBackButton?: boolean;
  }
}

const AnimatedScrollView =
  Animated.createAnimatedComponent(
    Animated.ScrollView
  );

export const SCREEN_HORIZONTAL_PADDING = 16;

export const ScreenContent: React.FC<
  ScreenContentProps
> = ({
  path,
  children,
  bottomBarHeight = 0,
  header
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
        style={{
          flex: 1,
          overflow: "visible",
          backgroundColor: "#050816",
        }}
        key={path}
      >
        <Header scrollY={scrollY} showBackButton={header?.showBackButton} pathName={path} />
        <AnimatedScrollView
          onScroll={onScroll}
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingTop: 100,
            paddingHorizontal: SCREEN_HORIZONTAL_PADDING,
            paddingBottom: 40 + bottomBarHeight,
          }}
        >
          {children}
        </AnimatedScrollView>
      </SafeAreaView>
    );
  };