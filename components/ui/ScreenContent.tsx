import Animated, {
  useAnimatedRef,
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";

import { SafeAreaView } from "react-native-safe-area-context";

import { useScrollStore } from "@/store/useScrollStore";
import { Header } from "components/header";
import { useEffect } from "react";
import { BackButtonProps } from "../header/header";

interface ScreenContentProps {
  path: string;
  children?: React.ReactNode;
  bottomBarHeight?: number;
  header?: {
    backButton?: BackButtonProps;
  };
}

const AnimatedScrollView = Animated.createAnimatedComponent(Animated.ScrollView);

export const SCREEN_HORIZONTAL_PADDING = 16;

export const ScreenContent: React.FC<ScreenContentProps> = ({
  path,
  children,
  bottomBarHeight = 0,
  header,
}) => {
  const scrollY = useSharedValue(0);
  const aref = useAnimatedRef<Animated.ScrollView>();
  const scrollTo = useScrollStore((state) => state.y);
  const trigger = useScrollStore((state) => state.updatedAt);


  const onScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    },
  });

  useEffect(() => {
    if (!aref.current) return;

    aref.current.scrollTo({
      y: scrollTo,
      animated: true,
    });
  }, [trigger]);


  return (
    <SafeAreaView
      style={{
        flex: 1,
        overflow: "visible",
        backgroundColor: "#050816",
      }}
      key={path}
    >
      <Header scrollY={scrollY} backButton={header?.backButton} pathName={path} />
      <AnimatedScrollView
        ref={aref}
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