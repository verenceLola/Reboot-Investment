export class DateUtils {
    public static formatDate = (timestamp: number): string => {
        const options: Intl.DateTimeFormatOptions = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        };

        const date = new Date(timestamp);

        return new Intl.DateTimeFormat("en-US", options).format(date);
    };
}
