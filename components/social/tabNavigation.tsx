import { colors } from '@/utils/theme';
import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useState } from 'react';
import { View } from 'react-native';
import Animated, {
  FadeIn,
  FadeOut,
  LinearTransition,
} from 'react-native-reanimated';
import {
  ControlField,
  Description,
  Label,
  Tabs
} from '../hero-ui';

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

export const TabNavigation = () => {
  const [activeTab, setActiveTab] = useState('campus');

  const [showSidebar, setShowSidebar] = useState(true);
  const [accountActivity, setAccountActivity] = useState(true);

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} variant="primary">
      <Tabs.List className="w-full flex-row bg-white/5 border border-white/10">
        <Tabs.Indicator className={"bg-white/10"} />

        <Tabs.Trigger value="campus" className='flex-1'>
          {({ isSelected }) => (<TabTrigger Icon={MaterialIcons} name="apartment" isSelected={isSelected} value="Campus" />)}
        </Tabs.Trigger>

        <Tabs.Trigger value="notifications" className='flex-1'>
          {({ isSelected }) => (<TabTrigger Icon={Feather} name="layout" isSelected={isSelected} value="Club" />)}
        </Tabs.Trigger>
      </Tabs.List>

      <Animated.View
        layout={LinearTransition.duration(200)}
        className="px-4 py-6 border border-border rounded-xl"
      >
        <Tabs.Content value="campus">
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


      </Animated.View>
    </Tabs>
  );
}

const TabTrigger = ({ isSelected, value, Icon, name }: { isSelected?: boolean; value: string; Icon: any; name: string }) => {
  return (
    <View className='flex-row items-center gap-1'>
      <Icon name={name} size={18} color={isSelected ? colors.text : colors.textMuted} />
      <Tabs.Label className='font-poppins-medium text-sm' style={{ color: isSelected ? colors.text : colors.textMuted }}>
        {value}
      </Tabs.Label>
    </View>
  )
}