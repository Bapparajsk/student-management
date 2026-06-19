import Animated, {
  useAnimatedRef,
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";

import { SafeAreaView } from "react-native-safe-area-context";

import { ScrollContext } from '@/context/screenContent';
import { Header } from "components/header";
import { ReactNode } from "react";
import AppFooter from "../footer";
import { BackButtonProps } from "../header/header";
import { PortalHost } from "../hero-ui";

interface ScreenContentProps {
  path: string;
  children?: React.ReactNode;
  bottomBarHeight?: number;
  header?: {
    backButton?: BackButtonProps;
  };
  stickyHeaderIndices?: number[];
  fab?: ReactNode;
}

const AnimatedScrollView = Animated.createAnimatedComponent(Animated.ScrollView);

export const SCREEN_HORIZONTAL_PADDING = 16;

export const ScreenContent: React.FC<ScreenContentProps> = ({
  path,
  children,
  bottomBarHeight = 80,
  header,
  stickyHeaderIndices,
  fab,
}) => {
  const scrollY = useSharedValue(0);
  const aref = useAnimatedRef<Animated.ScrollView>();


  const onScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    },
  });

  const scrollTo = (y: number) => {
    aref.current?.scrollTo({
      y,
      animated: true,

    });
  };

  return (
    <ScrollContext.Provider value={{ scrollTo }}>

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
            position: "relative",
          }}
          stickyHeaderIndices={stickyHeaderIndices}
        >
          {children}
          <AppFooter />
        </AnimatedScrollView>
        <PortalHost name="aifab-host" />
      </SafeAreaView>
    </ScrollContext.Provider>
  );
};