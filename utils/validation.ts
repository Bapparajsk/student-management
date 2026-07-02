export const areAllValid = (...args: any[]): boolean => {
    return args.every(arg => {
        if (!arg) return false;
        if (arg === null || arg === undefined) {
            return false;
        }
        if (typeof arg === 'string' && arg.trim() === '') {
            return false;
        }
        // Add more checks for other types if needed, e.g., empty arrays, objects
        return true;
    });
};
