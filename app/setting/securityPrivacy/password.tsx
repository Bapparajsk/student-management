import { PasswordSecurityAlert, PasswordSecurityHero } from '@/components/setting/securityAndPrivacy/password'
import { ScreenContent } from '@/components/ui/ScreenContent'

const header = {
    backButton: {
        showBackButton: true,
        title: "Password & Security"
    }
}

export default function PasswordScreen() {
    return (
        <ScreenContent path='/setting/securityPrivacy/password' header={header}>
            <PasswordSecurityHero />
            <PasswordSecurityAlert />
        </ScreenContent>
    )
}