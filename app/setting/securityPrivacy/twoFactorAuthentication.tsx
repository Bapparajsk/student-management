import { TowFactorComponentController } from '@/components/setting/securityAndPrivacy/twoFactorAuthentication';
import { ScreenContent } from '@/components/ui/ScreenContent';

const header = {
    backButton: {
        showBackButton: true,
        title: "2FA Security"
    }
}

export default function TwoFactorAuthenticationScreen() {
    return (
        <ScreenContent path='/setting/securityPrivacy/twoFactorAuthentication' header={header}>
            <TowFactorComponentController />
        </ScreenContent>
    )
}