import dayjs from 'dayjs';

export const formatDate = (date: Date) => {
    return dayjs(date).format('MMMM D, dddd');
};

export const limitDate = (date: Date, days: number) => {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
};

export const formatOrderByDate = () => {
    return dayjs(new Date()).format('ssmmHHDDMMYYYY');
};

export const formatDateOfBirth = (date: Date) => {
    return dayjs(date).format('DD/MM/YYYY');
};
