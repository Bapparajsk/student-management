import ThemeText from '@/components/ui/ThemeText'
import { View } from 'react-native'
import { SecurityItem } from './securityItem'

export const SignInAndSecurity = () => {
    return (
        <View className="mb-5">

            <ThemeText
                className="mb-2 ml-1 text-xs font-poppins-semibold uppercase tracking-widest text-zinc-500"
            >
                Sign-In & Security
            </ThemeText>

            <View
                className="overflow-hidden rounded-3xl border border-white/10 bg-white/3 "
            >

                <SecurityItem
                    icon="key"
                    iconColor="#22D3EE"
                    title="Password"
                    subtitle="Strong • Updated 30 days ago"
                    href={"/setting/securityPrivacy/password"}
                />

                <View className="ml-17 h-px bg-white/5" />

                <SecurityItem
                    icon="verified-user"
                    iconColor="#34D399"
                    title="Two-Factor Authentication"
                    subtitle="Enabled"
                    href={"/setting/securityPrivacy/twoFactorAuthentication"}
                />

                <View className="ml-17 h-px bg-white/5" />

                <SecurityItem
                    icon="security"
                    iconColor="#F59E0B"
                    title="Recovery Options"
                    subtitle="Backup email & phone"
                />

            </View>

        </View>
    )
}
