import { setScrollTo } from '@/store/useScrollStore';
import { MaterialIcons } from '@expo/vector-icons';
import Feather from '@expo/vector-icons/Feather';
import React, { useState } from 'react';
import { View } from 'react-native';
import Animated, {
    FadeIn,
    FadeOut,
} from 'react-native-reanimated';
import {
    Button,
    ControlField,
    Description,
    Input,
    InputGroup,
    Label,
    Tabs,
    TextField
} from '../../hero-ui';
import { AllContainer } from './allContainer';


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


const AnimatedContentContainer = ({
    children,
}: {
    children: React.ReactNode;
}) => (
    <Animated.View
        entering={FadeIn.duration(250)}
        exiting={FadeOut.duration(250)}
        className="gap-6"
    >
        {children}
    </Animated.View>
);

export const SearchAndFilters = () => {
    const [activeTab, setActiveTab] = useState('All');

    const [showSidebar, setShowSidebar] = useState(true);
    const [accountActivity, setAccountActivity] = useState(true);
    const [name, setName] = useState('');

    const handleTabChange = (nextTab: string) => {
        setActiveTab(nextTab);
    };

    return (
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
                    >
                        <AllContainer />
                    </AnimatedContentContainer>
                </Tabs.Content>

                <Tabs.Content value="Notes">
                    <AnimatedContentContainer
                        key="Notes"
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
    );
};

export function SearchBar() {

    return (
        <View className="mt-2">
            <InputGroup
                onFocus={() => {
                    setScrollTo(400);
                }}
            >
                <InputGroup.Prefix>
                    <Feather
                        name="search"
                        size={18}
                        color="#6B7280"
                    />
                </InputGroup.Prefix>
                {/* <InputGroup.Suffix>
                <ActivityIndicator />
            </InputGroup.Suffix> */}

                <InputGroup.Input
                    placeholder="Enter text"
                    className="font-poppins-medium text-sm bg-[#1a1a2b] border border-white/10"
                />
            </InputGroup>
        </View>
    )
}