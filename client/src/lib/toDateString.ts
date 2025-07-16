export const toDateString = (date: Date) => {
    const day = date.getDate();
    const month = date.toLocaleString('en-NG', {
        month: "long"
    });
    const year = date.getFullYear();
    return `${day}-${month} ${year}`
}