import { MaterialIcons } from '@expo/vector-icons';
import { View } from 'react-native';
import ThemeText from '../ui/ThemeText';

export type ActivityType =
    | 'payment'
    | 'achievement'
    | 'course'
    | 'attendance'
    | 'exam'
    | 'assignment'
    | 'batch'
    | 'certificate'
    | 'placement'
    | 'community'
    | 'announcement';

export type Activity = {
    id: string;
    type: ActivityType;
    title: string;
    description: string;
    time: string;
};

type ActivityTimelineProps = {
    activities: Activity[];
};

const ACTIVITY_CONFIG: Record<
    ActivityType,
    {
        icon: keyof typeof MaterialIcons.glyphMap;
        color: string;
    }
> = {
    payment: {
        icon: 'payments',
        color: '#10B981',
    },
    achievement: {
        icon: 'emoji-events',
        color: '#FACC15',
    },
    course: {
        icon: 'menu-book',
        color: '#818CF8',
    },
    attendance: {
        icon: 'fact-check',
        color: '#F97316',
    },
    exam: {
        icon: 'quiz',
        color: '#EC4899',
    },
    assignment: {
        icon: 'assignment',
        color: '#06B6D4',
    },
    batch: {
        icon: 'groups',
        color: '#3B82F6',
    },
    certificate: {
        icon: 'workspace-premium',
        color: '#EAB308',
    },
    placement: {
        icon: 'work',
        color: '#14B8A6',
    },
    community: {
        icon: 'forum',
        color: '#8B5CF6',
    },
    announcement: {
        icon: 'campaign',
        color: '#EF4444',
    },
};

function ActivityItem({
    activity,
    isLast,
}: {
    activity: Activity;
    isLast: boolean;
}) {
    const config = ACTIVITY_CONFIG[activity.type];

    return (
        <View className="flex-row">
            {/* Timeline */}
            <View className="items-center mr-4">

                <View
                    className="h-10 w-10 items-center justify-center rounded-full border border-white/10"
                    style={{
                        backgroundColor: `${config.color}20`,
                    }}
                >
                    <MaterialIcons
                        name={config.icon}
                        size={18}
                        color={config.color}
                    />
                </View>

                {!isLast && (
                    <View
                        className="mt-2 w-0.5 flex-1 bg-white/10"
                        style={{
                            minHeight: 40,
                        }}
                    />
                )}

            </View>

            {/* Content */}
            <View className="flex-1 pb-6">

                <View className="flex-row items-start justify-between">
                    <ThemeText className="flex-1 font-poppins-semibold">
                        {activity.title}
                    </ThemeText>

                    <ThemeText className="ml-2 text-[10px] text-zinc-500">
                        {activity.time}
                    </ThemeText>
                </View>

                <ThemeText className="mt-1 text-xs text-zinc-400">
                    {activity.description}
                </ThemeText>

            </View>
        </View>
    );
}

export function ActivityTimeline({
    activities,
}: ActivityTimelineProps) {
    return (
        <View className="mt-5 rounded-3xl border border-white/10 bg-white/4 p-5">

            <View className="mb-6 flex-row items-center justify-between">

                <ThemeText className="text-lg font-poppins-semibold">
                    Recent Activity
                </ThemeText>

                <View className="rounded-full bg-cyan-500/10 px-3 py-1">
                    <ThemeText className="text-[11px] font-poppins-medium text-cyan-400">
                        {activities.length} Updates
                    </ThemeText>
                </View>

            </View>

            {activities.map((activity, index) => (
                <ActivityItem
                    key={activity.id}
                    activity={activity}
                    isLast={index === activities.length - 1}
                />
            ))}

        </View>
    );
}