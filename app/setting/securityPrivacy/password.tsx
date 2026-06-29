import { ScreenContent } from '@/components/ui/ScreenContent'
import { Text } from 'react-native'

const header = {
    backButton: {
        showBackButton: true,
        title: "Password"
    }
}

export default function PasswordScreen() {
    return (
        <ScreenContent path='/setting/securityPrivacy/password' header={header}>
            <Text>password</Text>
        </ScreenContent>
    )
}