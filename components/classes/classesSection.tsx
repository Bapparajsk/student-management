import React from 'react'
import { ClassCard } from '../ui/classCard'
import ClassesList from '../ui/list'

export const ClassesSection = () => {
    return (
        <ClassesList
            data={[1, 2, 3, 4]}
            estimatedItemSize={332}
            renderItem={({ item }) => (
                <ClassCard isFullWidth />
            )}
        />
    )
}