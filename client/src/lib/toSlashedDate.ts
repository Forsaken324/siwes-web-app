export const toSlashedDate = (date: string): string => {
    const dateObj = new Date(date);
    return `${dateObj.getMonth()}/${dateObj.getDay()}/${dateObj.getFullYear()}`
}