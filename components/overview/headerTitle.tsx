import { colors } from '@/utils/theme'
import { PressableFeedback } from 'heroui-native'
import React from 'react'
import { View } from 'react-native'
import ThemeText from '../ui/ThemeText'

export type HeaderTitleProps = {
    leftText: string;
    rightText?: string;
    onRightPress?: () => void;
    rightTextColor?: string;
}

export const HeaderTitle = ({ leftText, rightText, onRightPress, rightTextColor }: HeaderTitleProps) => {
    return (
        <View className='flex-row justify-between items-center'>
            <ThemeText className='text-3xl'>
                {leftText}
            </ThemeText>
            {rightText && (
                <PressableFeedback onPress={onRightPress}>
                    <ThemeText
                        className='text-gray-500 mt-1'
                        style={{ color: rightTextColor || colors.info }}

                    >
                        {rightText}
                    </ThemeText>
                </PressableFeedback>
            )}
        </View>
    )
}