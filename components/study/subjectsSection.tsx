import Ionicons from '@expo/vector-icons/Ionicons';
import { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { BottomSheet, Button } from 'heroui-native';
import React, { useState } from 'react';
import { View } from 'react-native';
import { withUniwind } from 'uniwind';
import { HeaderTitle } from '../ui/headerTitle';
import { SubjectProgressCard } from '../ui/subjectCard';
const StyledIonicons = withUniwind(Ionicons);

export const SubjectsSection = () => {
    const [isOpen, setIsOpen] = useState(false);
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
                onPress={(sId) => setIsOpen(true)}
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
            <BottomSheetContent isOpen={isOpen} setIsOpen={setIsOpen} />
        </View>
    )
}

function BottomSheetContent({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: (open: boolean) => void }) {
    return (
        <BottomSheet isOpen={isOpen} onOpenChange={setIsOpen} style={{

        }}>
            <BottomSheet.Portal

            >
                <BottomSheet.Overlay

                />
                <BottomSheet.Content
                    snapPoints={["45%", "80%", "100%"]}
                    enableOverDrag={false}
                    enableDynamicSizing={false}
                    contentContainerClassName="h-full"
                    topInset={50}
                >
                    <BottomSheetScrollView>
                        <View className="items-center mb-5">
                            <View className="size-20 items-center justify-center rounded-full bg-green-500/10">
                                <StyledIonicons
                                    name="shield-checkmark"
                                    size={40}
                                    className="text-green-500"
                                />
                            </View>
                        </View>
                        <View className="mb-8 gap-2 items-center">
                            <BottomSheet.Title className="text-center">
                                Keep yourself safe
                            </BottomSheet.Title>
                            <BottomSheet.Description className="text-center">
                                Update your software to the latest version for better security and
                                performance.
                            </BottomSheet.Description>
                        </View>
                        <View className="gap-3">
                            <Button onPress={() => setIsOpen(false)}>Update Now</Button>
                            <Button variant="tertiary" onPress={() => setIsOpen(false)}>
                                Later
                            </Button>
                        </View>
                    </BottomSheetScrollView>
                </BottomSheet.Content>
            </BottomSheet.Portal>
        </BottomSheet>
    )
}