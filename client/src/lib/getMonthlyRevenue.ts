import type { BookingDataPayload } from "../interfaces/interfaces"

export const getMonthlyRevenue = (bookings: BookingDataPayload[]): number => {
    let monthlyRevenue: number = 0;
    for (let i: number = 0; i < bookings.length; i++) {
        monthlyRevenue+= bookings[i].price;
    }
    return monthlyRevenue; 
}