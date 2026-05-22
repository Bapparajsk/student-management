// Define the return type
export type DayTypes = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';
export type MonthTypes = "January" | "February" | "March" | "April" | "May" | "June" | "July" | "August" | "September" | "October" | "November" | "December";


// type DayDateInfo = {
//     day: DayTypes;
//     date: {
//         day: string;
//         month: string;
//         year: string;
//     };
// };

// Helper function to pad single digits
// const padZero = (num: number): string => num.toString().padStart(2, '0');

// Array of days for reference
const daysOfWeek: DayTypes[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// const monthsOfYear: MonthTypes[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// Even more concise version
type WeekDayItem = {
    day: DayTypes;
    date: {
        day: string;
    };
    isToday: boolean;
};

export function getCurrentWeekDays(): WeekDayItem[] {
    const today = new Date();

    // Monday-based week index
    const currentDay = today.getDay();
    const mondayOffset = currentDay === 0 ? -6 : 1 - currentDay;

    // Start of week (Monday)
    const startOfWeek = new Date(today);
    startOfWeek.setHours(0, 0, 0, 0);
    startOfWeek.setDate(today.getDate() + mondayOffset);

    return Array.from({ length: 7 }, (_, index) => {
        const date = new Date(startOfWeek);
        date.setDate(startOfWeek.getDate() + index);

        return {
            day: daysOfWeek[index],
            date: {
                day: String(date.getDate()).padStart(2, '0'),
            },
            isToday:
                date.getDate() === today.getDate() &&
                date.getMonth() === today.getMonth() &&
                date.getFullYear() === today.getFullYear(),
        };
    });
}


// // Function to get today's DayDateInfo
// export function getTodayInfo(): DayDateInfo {
//     const today = new Date();

//     return {
//         day: daysOfWeek[today.getDay()],
//         date: {
//             day: padZero(today.getDate()),
//             month: padZero(today.getMonth() + 1),
//             year: today.getFullYear().toString()
//         }
//     };
// }

// export function isToday(dateToCheck: DayDateInfo['date']): boolean {
//     const today = new Date();
//     const todayStr = `${padZero(today.getDate())}-${padZero(today.getMonth() + 1)}-${today.getFullYear()}`;
//     const checkDateStr = `${dateToCheck.day}-${dateToCheck.month}-${dateToCheck.year}`;

//     return todayStr === checkDateStr;
// }


export function format(day: DayTypes | MonthTypes, length = 3) {
    return day.substring(0, length);
}

// // Function to check if a specific date is in the current week
// export function isDateInCurrentWeek(dateToCheck: Date): boolean {
//     const weekDays = getCurrentWeekDays();
//     const checkDateStr = `${padZero(dateToCheck.getDate())}-${padZero(dateToCheck.getMonth() + 1)}-${dateToCheck.getFullYear()}`;

//     return weekDays.some(day =>
//         `${day.date.day}-${day.date.month}-${day.date.year}` === checkDateStr
//     );
// }

// export function getDayAndYear() {
//     const today = new Date();
//     const day = daysOfWeek[today.getDay()];
//     const year = today.getFullYear().toString();

//     return { day, year };
// }

// export function formatHourTo12(hour: number): string {
//     if (hour < 0 || hour > 24) {
//         throw new Error("Hour must be between 0 and 24");
//     }

//     // Separate hours and minutes
//     const baseHour = Math.floor(hour);
//     const minutes = Math.round((hour - baseHour) * 60);

//     // Convert to 12-hour format
//     const h = baseHour % 12 === 0 ? 12 : baseHour % 12;
//     const suffix = baseHour >= 12 && baseHour < 24 ? "PM" : "AM";

//     // Format minutes properly
//     const m = minutes.toString().padStart(2, "0");

//     return `${h}:${m} ${suffix}`;
// }

// export function getMonthAndYear(): { month: MonthTypes; year: string } {
//     const today = new Date();
//     const month = monthsOfYear[today.getMonth()];
//     const year = today.getFullYear().toString();

//     return { month, year };
// }