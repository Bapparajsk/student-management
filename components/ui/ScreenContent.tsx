import { Header } from "components/header";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


interface ScreenContentProps {
  path: string;
  children?: React.ReactNode;
}

export const ScreenContent: React.FC<ScreenContentProps> = ({ path, children }) => {
  return (
    <SafeAreaView className='flex-1' key={path}>
      <Header />
      <View className="flex-1 px-4">
        {children}
      </View>
    </SafeAreaView>
  );
};