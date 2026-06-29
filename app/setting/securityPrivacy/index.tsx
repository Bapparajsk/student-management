import { DevicesSection, ExportSection, PrivacyPolicyCard, PrivacySection, SecurityScoreCard, SignInAndSecurity } from '@/components/setting/securityAndPrivacy'
import { ScreenContent } from '@/components/ui/ScreenContent'

const header = {
    backButton: {
        showBackButton: true,
        title: "Security & Privacy"
    }
}

export default function SecurityAndPrivacyScreen() {
    return (
        <ScreenContent path='/setting/securityPrivacy' header={header}>
            <SecurityScoreCard />
            <SignInAndSecurity />
            <DevicesSection />
            <PrivacySection />
            <ExportSection />
            <PrivacyPolicyCard />
        </ScreenContent>
    )
}