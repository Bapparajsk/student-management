import { ScreenContent } from '@/components/ui/ScreenContent'
import ThemeText from '@/components/ui/ThemeText'

const header = {
    backButton: {
        showBackButton: true,
        title: "Setting"
    }
}

export default function SettingScreen() {
    return (
        <ScreenContent path='/setting' header={header}>
            <ThemeText>Setting Screen</ThemeText>
        </ScreenContent>
    )
}