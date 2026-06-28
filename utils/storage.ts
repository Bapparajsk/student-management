import { Directory, File, Paths } from 'expo-file-system';

const KB = 1024;
const MB = KB * 1024;
const GB = MB * 1024;

export const formatBytes = (
    bytes: number,
    decimals = 1
) => {

    if (bytes >= GB) {
        return `${(bytes / GB).toFixed(decimals)} GB`;
    }

    if (bytes >= MB) {
        return `${(bytes / MB).toFixed(decimals)} MB`;
    }

    if (bytes >= KB) {
        return `${(bytes / KB).toFixed(decimals)} KB`;
    }

    return `${bytes} B`;
};

export const percentage = (
    value: number,
    total: number
) => {

    if (!total) {
        return 0;
    }

    return Math.round(
        (value / total) * 100
    );
};

export const getDeviceStorage = () => {

    const total = Paths.totalDiskSpace;
    const free = Paths.availableDiskSpace;

    const used = total - free;

    return {
        total,
        free,
        used,

        totalText: formatBytes(total),

        freeText: formatBytes(free),

        usedText: formatBytes(used),

        percent: percentage(used, total),
    };
};


export const getDirectorySize = (directory: Directory) => {

    let size = 0;

    const items = directory.list();

    for (const item of items) {

        if (item instanceof File) {
            size += item.size ?? 0;
        }

        if (item instanceof Directory) {
            size += getDirectorySize(item);
        }
    }

    return size;
};


export const getAppStorage = () => {
    const size =
        getDirectorySize(
            Paths.document
        );

    return {
        bytes: size,
        text:
            formatBytes(size),
    };
};

export const getCacheStorage = () => {

    const size =
        getDirectorySize(
            Paths.cache
        );

    return {
        bytes: size,
        text:
            formatBytes(size),
    };
};

export const getDownloadsStorage = (folderName = 'downloads') => {

    const downloads = new Directory(Paths.document, folderName);

    if (!downloads.exists) {
        return {
            bytes: 0,
            text: '0 MB',
        };
    }

    const size = getDirectorySize(downloads);

    return {
        bytes: size,
        text: formatBytes(size),
    };
};


export const clearCache = () => {

    const cache = Paths.cache;

    const files = cache.list();

    files.forEach(
        item => {
            item.delete();
        }
    );
};


export const getStorageDashboard = () => {

    const device = getDeviceStorage()
    const app = getAppStorage();
    const cache = getCacheStorage();
    const downloads = getDownloadsStorage();

    return {
        device,
        app,
        cache,
        downloads,
    };
};