import React from 'react';
import { View } from 'react-native';
import { AIStudyToolsCard } from './aIStudyToolsCard';
import { CurriculumSection } from './chaptersSection';
import { NotesSection } from './notesSection';

const chapters = [
    {
        id: '1',
        title:
            'Introduction to Relational Models',
        totalNotes: 8,
        completedNotes: 8,
        bookmarkedNotes: 2,
        estimatedMinutes: 35,
    },
    {
        id: '2',
        title:
            'SQL Queries & Normalization',
        totalNotes: 12,
        completedNotes: 5,
        bookmarkedNotes: 4,
        estimatedMinutes: 60,
    },
    {
        id: '3',
        title:
            'Transactions & Concurrency',
        totalNotes: 10,
        completedNotes: 0,
        bookmarkedNotes: 0,
        estimatedMinutes: 45,
    },
];

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
            <CurriculumSection chapters={chapters} />
            <NotesSection />
        </View>
    )
}