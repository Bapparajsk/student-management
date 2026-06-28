import Animated, {
  useAnimatedRef,
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";

import { SafeAreaView } from "react-native-safe-area-context";

import { ScrollContext } from '@/context/screenContent';
import { Header, HeaderFab } from "components/header";
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
}

const AnimatedScrollView = Animated.createAnimatedComponent(Animated.ScrollView);

export const SCREEN_HORIZONTAL_PADDING = 16;

export const ScreenContent: React.FC<ScreenContentProps> = ({
  path,
  children,
  bottomBarHeight = 80,
  header,
  stickyHeaderIndices,
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
        <HeaderFab scrollY={scrollY} backButton={header?.backButton} pathName={path} />
        <AnimatedScrollView
          ref={aref}
          onScroll={onScroll}
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingTop: 10,
            paddingHorizontal: SCREEN_HORIZONTAL_PADDING,
            paddingBottom: 40 + bottomBarHeight,
            position: "relative",
          }}
          stickyHeaderIndices={stickyHeaderIndices}
        >
          <Header backButton={header?.backButton} pathName={path} />
          {children}
          <AppFooter />
        </AnimatedScrollView>
        <PortalHost name="aifab-host" />
      </SafeAreaView>
    </ScrollContext.Provider>
  );
};