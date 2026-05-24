import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export type StudyActivityTimeframe = 'Today' | 'Last Week' | 'Last Month';

export type StudyActivityOption = {
	label: StudyActivityTimeframe;
	active: boolean;
};

type StudyActivityStore = {
	options: StudyActivityOption[];
	activeOption: StudyActivityTimeframe;
};

const defaultOptions: StudyActivityOption[] = [
	{
		label: 'Today',
		active: false,
	},
	{
		label: 'Last Week',
		active: true,
	},
	{
		label: 'Last Month',
		active: false,
	},
];

const defaultActiveOption =
	defaultOptions.find(
		(option) => option.active
	)?.label || 'Today';

export const useStudyActivityStore =
	create<StudyActivityStore>()(
		persist(
			() => ({
				options: defaultOptions,

				activeOption:
					defaultActiveOption,
			}),
			{
				name: 'study-activity-storage',

				storage: createJSONStorage(
					() => AsyncStorage
				),
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