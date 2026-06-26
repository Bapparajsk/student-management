import { QuizPerformanceStats, QuizResultActions, QuizResultHero } from '@/components/game/game_over';
import * as Haptics from 'expo-haptics';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { resetQuizResult } from "store/quizGame/quizResultStore";

export default function GameOver() {

    useEffect(() => {
        Haptics.impactAsync(
            Haptics.ImpactFeedbackStyle.Heavy
        );

        return () => resetQuizResult();
    }, [])

    return (
        <View className="flex-1">
            <LinearGradient
                colors={[
                    '#090E1A',
                    '#0F172A',
                    '#141B38',
                ]}
                start={{
                    x: 0,
                    y: 0,
                }}
                end={{
                    x: 1,
                    y: 1,
                }}
                style={{
                    ...StyleSheet.absoluteFillObject,
                    width: '150%',
                    left: '-25%',
                    height: '150%',
                    top: '-25%',
                }}
            />

            {/* Ambient Glows */}

            <View
                style={{
                    position: 'absolute',
                    top: -120,
                    left: -120,
                    width: 260,
                    height: 260,
                    borderRadius: 999,
                    backgroundColor:
                        'rgba(34,211,238,0.08)',
                }}
            />

            <View
                style={{
                    position: 'absolute',
                    bottom: -120,
                    right: -120,
                    width: 280,
                    height: 280,
                    borderRadius: 999,
                    backgroundColor:
                        'rgba(168,85,247,0.08)',
                }}
            />

            <View className='w-full h-full px-4 mt-20' >
                <QuizResultHero />
                <QuizPerformanceStats />
                <QuizResultActions />
            </View>
        </View>
    );
}