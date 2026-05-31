import React from 'react'
import { View } from 'react-native'
import { HeaderTitle } from '../ui/headerTitle'
import { SubjectProgressCard } from '../ui/subjectCard'

export const SubjectsSection = () => {
    return (
        <View className='mt-3'>
            <HeaderTitle
                leftText="Subjects"
            />
            <SubjectProgressCard
                subjectName="Computer Science"
                category="Core Curriculum"
                teacherName="Prof. Sarah Jenkins"
                teacherImage="https://i.pravatar.cc/150?img=1"
                completedLessons={12}
                totalLessons={24}
                progress={10}
            />
            <SubjectProgressCard
                subjectName="Computer Science"
                category="Core Curriculum"
                teacherName="Prof. Sarah Jenkins"
                teacherImage="https://i.pravatar.cc/150?img=1"
                completedLessons={12}
                totalLessons={12}
                progress={100}
            />
            <SubjectProgressCard
                subjectName="Computer Science"
                category="Core Curriculum"
                teacherName="Prof. Sarah Jenkins"
                teacherImage="https://i.pravatar.cc/150?img=1"
                completedLessons={12}
                totalLessons={50}
                progress={25}
            />
            <SubjectProgressCard
                subjectName="Computer Science"
                category="Core Curriculum"
                teacherName="Prof. Sarah Jenkins"
                teacherImage="https://i.pravatar.cc/150?img=1"
                completedLessons={12}
                totalLessons={13}
                progress={92}
            />
        </View>
    )
}