import { ScreenContent } from '@/components/ui/ScreenContent';

const header = {
    backButton: {
        showBackButton: true,
        title: "2FA Security"
    }
}

export default function RecoveryOptionsScreen() {
    return (
        <ScreenContent path='/setting/securityPrivacy/recoveryOptions' header={header}>
        </ScreenContent>
    )
}