import { DeviceActivityCard, DeviceSecurityHero, DevicesManagementCard, SignOutAllDevicesCard } from '@/components/setting/securityAndPrivacy/devices'
import { ScreenContent } from '@/components/ui/ScreenContent'

const header = {
    backButton: {
        showBackButton: true,
        title: "Devices & Security"
    }
}

export default function DevicesScreen() {
    return (
        <ScreenContent path='/setting/securityPrivacy/devices' header={header}>
            <DeviceSecurityHero totalDevices={3} suspiciousDevices={1} />
            <DeviceActivityCard />
            <DevicesManagementCard />
            <SignOutAllDevicesCard />
        </ScreenContent>
    )
}