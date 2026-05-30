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