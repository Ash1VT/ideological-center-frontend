export const monthesRusParentCase: string[] = [
    "января", "февраля", "марта", "апреля", "мая", "июня",
    "июля", "августа", "сентября", "октября", "ноября", "декабря"
];

export const formatDate = (date: Date): string => {
    const day = date.getDate();
    const month = monthesRusParentCase[date.getMonth()];
    const year = date.getFullYear();
    return `${day} ${month} ${year}`
}