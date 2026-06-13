import { AIInsightCard, SemesterProgressCard } from '@/components/subject';
import { ScreenContent } from '@/components/ui/ScreenContent';
import React from 'react';

export default function Index() {

    return (
        <ScreenContent path="subject" bottomBarHeight={80}>
            <SemesterProgressCard />
            <AIInsightCard />
        </ScreenContent>
    )
}