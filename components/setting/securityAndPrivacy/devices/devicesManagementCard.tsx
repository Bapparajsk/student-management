import React from 'react'
import { View } from 'react-native'
import { CurrentDeviceCard } from './currentDeviceCard'
import { DeviceItem } from './deviceItem'

export const DevicesManagementCard = () => {
    return (
        <View className="gap-3">

            <CurrentDeviceCard />

            <DeviceItem
                name="Windows Laptop"
                platform="Chrome"
                location="Kolkata, India"
                lastActive="Active 2 hours ago"
                index={2}
            />

            <DeviceItem
                name="iPhone 15 Pro"
                platform="Native App"
                location="Delhi, India"
                lastActive="Active Yesterday"
                trusted
                index={1}
            />

        </View>
    )
}
