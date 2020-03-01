export function getLocalISOString(date: Date) {
    const timezoneOffset = date.getTimezoneOffset() * 60000;
    return (new Date(date.valueOf() - timezoneOffset)).toISOString().slice(0, -1);
}
