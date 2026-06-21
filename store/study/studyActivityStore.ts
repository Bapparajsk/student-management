import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { FilterOption } from '@/components/popover/popover';

export type StudyActivityTimeframe =
	| 'Today'
	| 'Last Week'
	| 'Last Month';

export type StudyActivityOption =
	FilterOption & {
		active: boolean;
	};

type StudyActivityStore = {
	options: StudyActivityOption[];
	activeOption: StudyActivityTimeframe;
};

const defaultOptions: StudyActivityOption[] = [
	{
		id: 'today',
		label: 'Today',
		active: false,
	},
	{
		id: 'last-week',
		label: 'Last Week',
		active: true,
	},
	{
		id: 'last-month',
		label: 'Last Month',
		active: false,
	},
];

const defaultActiveOption: StudyActivityTimeframe =
	'Last Week';

export const useStudyActivityStore =
	create<StudyActivityStore>()(
		persist(
			(set) => ({
				options: defaultOptions,
				activeOption: defaultActiveOption,
			}),
			{
				name: 'study-activity-store-v1',
				storage: createJSONStorage(() => AsyncStorage),
			}
		)
	);

/**
 * Actions
 */

export const setActiveOption = (
	label: StudyActivityTimeframe
) => {
	useStudyActivityStore.setState(
		(state) => ({
			activeOption: label,

			options: state.options.map(
				(option) => ({
					...option,
					active:
						option.label === label,
				})
			),
		})
	);
};

export const resetOptions = () => {
	useStudyActivityStore.setState({
		options: defaultOptions,
		activeOption:
			defaultActiveOption,
	});
};