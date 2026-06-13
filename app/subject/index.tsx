import { ScreenContent } from '@/components/ui/ScreenContent';
import React from 'react';
import { Text } from 'react-native';

export default function Index() {

    return (
        <ScreenContent path="subject" bottomBarHeight={80} header={{ showBackButton: true }}>
            <Text className={"text-red-700"}>{`Subject ID: `}</Text>
        </ScreenContent>
    )
}