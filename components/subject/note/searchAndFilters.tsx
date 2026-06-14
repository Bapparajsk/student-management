import { MaterialIcons } from '@expo/vector-icons';
import Feather from '@expo/vector-icons/Feather';
import {
    Button,
    ControlField,
    Description,
    Input,
    InputGroup,
    Label,
    Tabs,
    TextField
} from 'heroui-native';
import React, { useState } from 'react';
import { View } from 'react-native';
import Animated, {
    SlideInLeft,
    SlideInRight,
    SlideOutLeft,
    SlideOutRight
} from 'react-native-reanimated';

const TABS = [
    'All',
    'Notes',
    'PDFs',
    'Slides',
    'AI Notes',
    'Saved'
] as const;

const tabs = [
    {
        label: 'All',
        icon: 'dashboard',
    },
    {
        label: 'Notes',
        icon: 'menu-book',
    },
    {
        label: 'PDFs',
        icon: 'picture-as-pdf',
    },
    {
        label: 'AI Notes',
        icon: 'psychology',
    },
    {
        label: 'Saved',
        icon: 'favorite',
    },
];

type Direction = 'left' | 'right';

const AnimatedContentContainer = ({
    children,
    direction,
}: {
    children: React.ReactNode;
    direction: Direction;
}) => (
    <Animated.View
        entering={
            direction === 'right'
                ? SlideInRight.duration(250)
                : SlideInLeft.duration(250)
        }
        exiting={
            direction === 'right'
                ? SlideOutLeft.duration(250)
                : SlideOutRight.duration(250)
        }
        className="gap-6"
    >
        {children}
    </Animated.View>
);

export const SearchAndFilters = () => {
    const [activeTab, setActiveTab] = useState('All');
    const [direction, setDirection] =
        useState<Direction>('right');

    const [showSidebar, setShowSidebar] = useState(true);
    const [accountActivity, setAccountActivity] = useState(true);
    const [name, setName] = useState('');

    const handleTabChange = (nextTab: string) => {
        const currentIndex = TABS.indexOf(
            activeTab as (typeof TABS)[number]
        );

        const nextIndex = TABS.indexOf(
            nextTab as (typeof TABS)[number]
        );

        setDirection(
            nextIndex > currentIndex
                ? 'right'
                : 'left'
        );

        setActiveTab(nextTab);
    };

    return (
        <View className="mt-3">
            <InputGroup>
                <InputGroup.Prefix>
                    <Feather
                        name="search"
                        size={18}
                        color="#6B7280"
                    />
                </InputGroup.Prefix>

                <InputGroup.Input
                    placeholder="Enter text"
                    className="font-poppins-medium text-sm bg-white/3 border border-white/10"
                />
            </InputGroup>

            <Tabs
                value={activeTab}
                onValueChange={handleTabChange}
                variant="secondary"
                className='mt-3'
            >
                <Tabs.List>
                    <Tabs.ScrollView>
                        <Tabs.Indicator />
                        {tabs.map((tab) => (
                            <Tabs.Trigger
                                key={tab.label}
                                value={tab.label}
                            >
                                <MaterialIcons
                                    name={tab.icon as any}
                                    size={16}
                                    color={
                                        activeTab === tab.label
                                            ? '#00D5BE'
                                            : '#A1A1AA'
                                    }
                                />
                                <Tabs.Label className="font-poppins-medium text-sm">
                                    {tab.label}
                                </Tabs.Label>
                            </Tabs.Trigger>
                        ))}
                    </Tabs.ScrollView>
                </Tabs.List>

                <Animated.View
                    className="overflow-hidden mt-2"
                >
                    <Tabs.Content value="All">
                        <AnimatedContentContainer
                            key="All"
                            direction={direction}
                        >
                            <ControlField
                                isSelected={showSidebar}
                                onSelectedChange={setShowSidebar}
                            >
                                <ControlField.Indicator variant="checkbox" />

                                <View className="flex-1">
                                    <Label>
                                        Show sidebar
                                    </Label>

                                    <Description>
                                        Display the sidebar navigation panel
                                    </Description>
                                </View>
                            </ControlField>
                        </AnimatedContentContainer>
                    </Tabs.Content>

                    <Tabs.Content value="Notes">
                        <AnimatedContentContainer
                            key="Notes"
                            direction={direction}
                        >
                            <ControlField
                                isSelected={accountActivity}
                                onSelectedChange={setAccountActivity}
                            >
                                <ControlField.Indicator variant="checkbox" />

                                <View className="flex-1">
                                    <Label>
                                        Account activity
                                    </Label>

                                    <Description>
                                        Notifications about your account activity
                                    </Description>
                                </View>
                            </ControlField>
                        </AnimatedContentContainer>
                    </Tabs.Content>


                    <Tabs.Content value="PDFs">
                        <AnimatedContentContainer
                            key="PDFs"
                            direction={direction}
                        >
                            <TextField isRequired>
                                <Label>
                                    Name
                                </Label>

                                <Input
                                    value={name}
                                    onChangeText={setName}
                                    placeholder="Enter your full name"
                                />
                            </TextField>

                            <Button
                                size="sm"
                                className="self-start"
                            >
                                <Button.Label>
                                    Update profile
                                </Button.Label>
                            </Button>
                        </AnimatedContentContainer>
                    </Tabs.Content>
                    <Tabs.Content value="AI Notes">
                        <AnimatedContentContainer
                            key="AI Notes"
                            direction={direction}
                        >
                            <ControlField
                                isSelected={showSidebar}
                                onSelectedChange={setShowSidebar}
                            >
                                <ControlField.Indicator variant="checkbox" />

                                <View className="flex-1">
                                    <Label>
                                        Show sidebar
                                    </Label>

                                    <Description>
                                        Display the sidebar navigation panel
                                    </Description>
                                </View>
                            </ControlField>
                        </AnimatedContentContainer>
                    </Tabs.Content>

                    <Tabs.Content value="Saved">
                        <AnimatedContentContainer
                            key="Saved"
                            direction={direction}
                        >
                            <ControlField
                                isSelected={accountActivity}
                                onSelectedChange={setAccountActivity}
                            >
                                <ControlField.Indicator variant="checkbox" />

                                <View className="flex-1">
                                    <Label>
                                        Account activity
                                    </Label>

                                    <Description>
                                        Notifications about your account activity
                                    </Description>
                                </View>
                            </ControlField>
                        </AnimatedContentContainer>
                    </Tabs.Content>
                </Animated.View>
            </Tabs>
        </View>
    );
};