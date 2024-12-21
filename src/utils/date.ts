export const formatDateYMD = (date: Date, delimiter: string = '-'): string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}${delimiter}${month}${delimiter}${day}`;
}


export const formatDateDMY = (date: Date, delimiter: string = '-'): string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${day}${delimiter}${month}${delimiter}${year}`;
}