import { GameControl } from "@/components/game/gameControl";
import { SafeAreaView } from "react-native-safe-area-context";


export default function GameScreen() {
    return (
        <SafeAreaView className="flex-1 relative">
            <GameControl />
        </SafeAreaView>
    );
}