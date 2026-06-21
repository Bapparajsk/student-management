type Option<T = string> = {
    label: T;
    value: number;
};

export function getOptionByValue<T>(
    options: Option<T>[],
    value: T
): number | undefined {
    return options.find(option => option.label === value)?.value;
}

export function isValidValueOrDefault<T1, T2>(value1: T1, value2: T2): T1 | T2 {
    return value1 ?? value2;
}