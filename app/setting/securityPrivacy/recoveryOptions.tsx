import { RecoveryProtectionHero, RecoveryTipsCard } from '@/components/setting/securityAndPrivacy/recoveryOptions';
import { ScreenContent } from '@/components/ui/ScreenContent';

const header = {
    backButton: {
        showBackButton: true,
        title: "Recovery Options",
    }
}

export default function RecoveryOptionsScreen() {
    return (
        <ScreenContent path='/setting/securityPrivacy/recoveryOptions' header={header}>
            <RecoveryProtectionHero recoveryEmail={false} recoveryPhone={false} />
            <RecoveryTipsCard />
        </ScreenContent>
    )
}