import { colors } from '@/utils/theme'
import { PressableFeedback } from 'heroui-native'
import { ReactNode } from 'react'
import { View } from 'react-native'
import If from '../If'
import ThemeText from '../ui/ThemeText'

export type HeaderTitleProps = {
    leftText: string | ReactNode;
    rightText?: string;
    onRightPress?: () => void;
    rightTextColor?: string;
    startIcon?: ReactNode
}

export const HeaderTitle = ({ leftText, rightText, onRightPress, rightTextColor, startIcon }: HeaderTitleProps) => {
    return (
        <View className='flex-row justify-between items-center mb-2'>
            <View className='flex-row items-center gap-2'>
                {startIcon}
                <If condition={(leftText && typeof leftText === 'string') === true}>
                    <If.Then>
                        <ThemeText className='text-xl'>
                            {leftText}
                        </ThemeText>
                    </If.Then>
                    <If.Else>
                        {leftText}
                    </If.Else>
                </If>
            </View>

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