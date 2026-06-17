import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
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
    social: {
        active: {
            Icon: FontAwesome5,
            name: "users"
        },
        inactive: {
            Icon: FontAwesome5,
            name: "users"
        }
    },
    subject: {
        active: {
            Icon: FontAwesome5,
            name: "book"
        },
        inactive: {
            Icon: Feather,
            name: "book"
        }
    },
    notes: {
        active: {
            Icon: Ionicons,
            name: "document-text"
        },
        inactive: {
            Icon: Ionicons,
            name: "document-text-outline"
        }
    },
    tasks: {
        active: {
            Icon: Ionicons,
            name: "checkmark-done-circle"
        },
        inactive: {
            Icon: Ionicons,
            name: "checkmark-done-circle-outline"
        }
    },
    quiz: {
        active: {
            Icon: Ionicons,
            name: "help-circle"
        },
        inactive: {
            Icon: Ionicons,
            name: "help-circle-outline"
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
