import { GameControl } from "@/components/quiz/gameControl";
import { SafeAreaView } from "react-native-safe-area-context";


export default function GameScreen() {


    return (
        <SafeAreaView className="flex-1">
            <GameControl />
        </SafeAreaView>
    );
}