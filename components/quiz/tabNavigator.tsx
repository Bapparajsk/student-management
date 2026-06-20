import { View } from 'react-native';

import { useState } from 'react';
import Animated, {
    FadeIn,
    FadeOut,
    LinearTransition,
} from 'react-native-reanimated';
import {
    Button,
    ControlField,
    Description,
    Input,
    Label,
    Tabs,
    TextField
} from '../hero-ui';

const QUIZ_FILTERS = [
    {
        id: 'all',
        label: 'All',
        icon: 'apps',
    },
    {
        id: 'ai',
        label: 'AI',
        icon: 'auto-awesome',
    },
    {
        id: 'practice',
        label: 'Practice',
        icon: 'edit-note',
    },
    {
        id: 'mock',
        label: 'Mock',
        icon: 'timer',
    },
    {
        id: 'challenge',
        label: 'Challenge',
        icon: 'emoji-events',
    },
];

const AnimatedContentContainer = ({
    children,
}: {
    children: React.ReactNode;
}) => (
    <Animated.View
        entering={FadeIn.duration(200)}
        exiting={FadeOut.duration(200)}
        className="gap-6"
    >
        {children}
    </Animated.View>
);

export const TabNavigator = () => {
    const [activeTab, setActiveTab] = useState('general');

    const [showSidebar, setShowSidebar] = useState(true);
    const [accountActivity, setAccountActivity] = useState(true);
    const [name, setName] = useState('');

    return (
        <Tabs value={activeTab} onValueChange={setActiveTab} variant="primary">
            <Tabs.List>
                <Tabs.ScrollView>
                    <Tabs.Indicator />
                    <Tabs.Trigger value="general">
                        <Tabs.Label>General</Tabs.Label>
                    </Tabs.Trigger>
                    <Tabs.Trigger value="notifications">
                        <Tabs.Label>Notifications</Tabs.Label>
                    </Tabs.Trigger>
                    <Tabs.Trigger value="profile">
                        <Tabs.Label>Profile</Tabs.Label>
                    </Tabs.Trigger>
                </Tabs.ScrollView>
            </Tabs.List>

            <Animated.View
                layout={LinearTransition.duration(200)}
                className="px-4 py-6 border border-border rounded-xl"
            >
                <Tabs.Content value="general">
                    <AnimatedContentContainer>
                        <ControlField
                            isSelected={showSidebar}
                            onSelectedChange={setShowSidebar}
                        >
                            <ControlField.Indicator variant="checkbox" />
                            <View className="flex-1">
                                <Label>Show sidebar</Label>
                                <Description>Display the sidebar navigation panel</Description>
                            </View>
                        </ControlField>
                    </AnimatedContentContainer>
                </Tabs.Content>

                <Tabs.Content value="notifications">
                    <AnimatedContentContainer>
                        <ControlField
                            isSelected={accountActivity}
                            onSelectedChange={setAccountActivity}
                        >
                            <ControlField.Indicator variant="checkbox" />
                            <View className="flex-1">
                                <Label>Account activity</Label>
                                <Description>
                                    Notifications about your account activity
                                </Description>
                            </View>
                        </ControlField>
                    </AnimatedContentContainer>
                </Tabs.Content>

                <Tabs.Content value="profile">
                    <AnimatedContentContainer>
                        <TextField isRequired>
                            <Label>Name</Label>
                            <Input
                                value={name}
                                onChangeText={setName}
                                placeholder="Enter your full name"
                            />
                        </TextField>
                        <Button size="sm" className="self-start">
                            <Button.Label>Update profile</Button.Label>
                        </Button>
                    </AnimatedContentContainer>
                </Tabs.Content>
            </Animated.View>
        </Tabs>
    );
}