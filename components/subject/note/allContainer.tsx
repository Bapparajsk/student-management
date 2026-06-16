import React from 'react'
import { View } from 'react-native'
import { AIStudyToolsCard } from './aIStudyToolsCard'

export const AllContainer = () => {
    return (
        <View className='gap-y-2'>
            <AIStudyToolsCard
                context={{
                    subjectName: 'DBMS',
                    currentChapter: 'SQL Joins',
                    weakTopic: 'Normalization',
                }}
            />
        </View>
    )
}