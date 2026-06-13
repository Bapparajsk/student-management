import { ScreenContent } from '@/components/ui/ScreenContent';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Text } from 'react-native';

export default function Index() {
    const { id } = useLocalSearchParams<{
        id: string;
    }>();

    return (
        <ScreenContent path={`${id}`} bottomBarHeight={80} header={{ showBackButton: true }}>
            <Text className={"text-red-700"}>{`Subject ID: ${id}`}</Text>
        </ScreenContent>
    )
}