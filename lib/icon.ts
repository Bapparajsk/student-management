import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';


type IconInfo = {
    Icon: any;
    name: string
}

type RecordValueType = {
    active: IconInfo,
    inactive: IconInfo
}

export const iconMap: Record<string, RecordValueType> = {
    overview: {
        active: {
            Icon: SimpleLineIcons,
            name: "graph"
        },
        inactive: {
            Icon: SimpleLineIcons,
            name: "graph"
        }
    },
    classes: {
        active: {
            Icon: Ionicons,
            name: "calendar"
        },
        inactive: {
            Icon: Ionicons,
            name: "calendar-outline"
        }
    },
    setting: {
        active: {
            Icon: Ionicons,
            name: "settings-sharp"
        },
        inactive: {
            Icon: Ionicons,
            name: "settings-outline"
        }
    }
};

export default function getIcon(name: string) {
    return iconMap[name] || {
        active: {
            Icon: AntDesign,
            name: "exclamation"
        },
        inactive: {
            Icon: AntDesign,
            name: "exclamation"
        }
    };
}
