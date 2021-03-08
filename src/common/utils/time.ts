import dayjs from 'dayjs';

export const formatDate = (date: Date) => {
    return dayjs(date).format('MMMM D, dddd');
}

export const limitDate = (date: Date, days: number) => {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}