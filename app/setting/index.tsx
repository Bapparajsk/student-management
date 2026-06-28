import { AccountSections, HeroHeaderCard, NotificationsSections, StudyInsightsCard, SupportCard } from '@/components/setting'
import { ScreenContent } from '@/components/ui/ScreenContent'

const header = {
    backButton: {
        showBackButton: true,
        title: "Setting"
    }
}

export default function SettingScreen() {
    return (
        <ScreenContent path='/setting' header={header}>
            <HeroHeaderCard />
            <AccountSections />
            <NotificationsSections />
            <StudyInsightsCard />
            <SupportCard />
        </ScreenContent>
    )
}