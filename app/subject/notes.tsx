import { ScreenContent } from '@/components/ui/ScreenContent';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Text } from 'react-native';

export default function Index() {
    const { id } = useLocalSearchParams<{
        id: string;
    }>();

    return (
        <ScreenContent path={"subject/notes"} bottomBarHeight={80} header={{ backButton: { title: "Subject Notes", } }}>
            <Text className={"text-red-700"}>{`Subject ID: ${id}`}</Text>
        </ScreenContent>
    )
}