import dayjs from 'dayjs';

export const calculateRating = (rating: number) => (rating / 5) * 100;

export const formatDate = (date: string) => dayjs(date).format('MMMM YYYY');
