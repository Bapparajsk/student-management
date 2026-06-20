import { TabNavigation } from "@/components/navigation/tabNavigation";
import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import CampusTab from './campusTab';
import ClubTab from './clubTab';

export const SocialNavigation = () => {
  return (
    <TabNavigation
      withScrollView={false}
      tabs={[
        {
          Icon: MaterialIcons,
          iconName: 'apartment',
          value: 'campus',
          component: () => <CampusTab />
        },
        {
          Icon: Feather,
          iconName: 'layout',
          value: 'club',
          component: () => <ClubTab />
        }
      ]}
    />
  )
}