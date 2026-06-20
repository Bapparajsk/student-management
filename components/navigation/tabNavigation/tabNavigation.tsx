import { Fragment, useMemo, useState } from 'react';
import Animated, { LinearTransition } from 'react-native-reanimated';
import { Tabs, TabsProps } from '../../hero-ui';
import { TabTrigger } from './tabTrigger';

export type Tab = {
    Icon: any;
    iconName: string;
    value: string;
    component: () => React.ReactNode;
}

export type TabNavigationProps = {
    tabs: Tab[];
    variant?: TabsProps['variant'];
    withScrollView?: boolean;
}

export const TabNavigation = ({ tabs, variant, withScrollView = true }: TabNavigationProps) => {
    const [activeTab, setActiveTab] = useState(tabs[0].value);

    const Wrapper = useMemo(() => {
        return withScrollView ? Tabs.ScrollView : Fragment;
    }, [withScrollView]);

    return (
        <Tabs value={activeTab} onValueChange={setActiveTab} variant={variant}>
            <Tabs.List className="w-full flex-row bg-white/5 border border-white/10">
                <Wrapper>
                    <Tabs.Indicator className={"bg-white/10"} />
                    {tabs.map((tab) => (
                        <Tabs.Trigger key={tab.value} value={tab.value} className='flex-1'>
                            {({ isSelected }) => (<TabTrigger Icon={tab.Icon} name={tab.iconName} isSelected={isSelected} value={tab.value} />)}
                        </Tabs.Trigger>
                    ))}
                </Wrapper>
            </Tabs.List>

            <Animated.View
                layout={LinearTransition.duration(200)}
            >
                {tabs.map((tab) => (
                    <Tabs.Content key={tab.value} value={tab.value}>
                        {tab.component()}
                    </Tabs.Content>
                ))}
            </Animated.View>
        </Tabs>
    );
}

