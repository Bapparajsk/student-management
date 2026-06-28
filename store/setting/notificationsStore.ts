import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type NotificationItemId = 'smart-alerts' | 'assignment-deadlines' | 'exam-reminders' | 'attendance-alerts' | 'campus-news';

type NotificationItem = {
    id: NotificationItemId;
    icon: string;
    title: string;
    subtitle: string;
};


type NotificationStore = {
    enabled: Record<NotificationItemId, boolean>;
};

const defaultEnabled: NotificationStore['enabled'] = {
    'smart-alerts': true,
    'assignment-deadlines': true,
    'exam-reminders': true,
    'attendance-alerts': true,
    'campus-news': false,
};


export const NOTIFICATION_ITEMS: NotificationItem[] = [
    {
        id: 'smart-alerts',
        icon: 'notifications-active',
        title: 'Smart Alerts',
        subtitle: 'Get notified about important updates and alerts'
    },
    {
        id: 'assignment-deadlines',
        icon: 'assignment',
        title: 'Assignment Deadlines',
        subtitle: 'Receive reminders for upcoming assignment deadlines'
    },
    {
        id: 'exam-reminders',
        icon: 'event',
        title: 'Exam Reminders',
        subtitle: 'Stay informed about your exam schedules and reminders'
    },
    {
        id: 'attendance-alerts',
        icon: 'analytics',
        title: 'Attendance Alerts',
        subtitle: 'Get notified about your attendance status and alerts'
    },
    {
        id: 'campus-news',
        icon: 'campaign',
        title: 'Campus News',
        subtitle: 'Stay updated with the latest news and announcements from your campus'
    },
] as const;

export const useNotificationStore =
    create<NotificationStore>()(
        persist(
            () => ({
                enabled: defaultEnabled,
            }),
            {
                name: 'notification-settings-v1',
                storage: createJSONStorage(
                    () => AsyncStorage
                ),
            }
        )
    );

/**
 * Actions
 */

export const toggleNotification = (
    id: NotificationItemId
) => {
    useNotificationStore.setState(
        (state) => ({
            enabled: {
                ...state.enabled,
                [id]: !state.enabled[id],
            },
        })
    );
};

export const resetNotifications = () => {
    useNotificationStore.setState({
        enabled: defaultEnabled,
    });
};