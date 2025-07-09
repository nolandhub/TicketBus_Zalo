import { create } from "zustand";

// --- Kiểu cho chuyến xe đã chọn (giống với mockTrips của bạn) ---
export interface Trip {
    id: string;
    from: string;
    to: string;
    date: string;
    time: string;
    busCompany: string;
    price: string;
}

// --- Kiểu thông tin khách hàng ---
export interface CustomerInfo {
    name: string;
    phone: string;
    quantity: number;
}

// --- Dữ liệu đặt vé tổng hợp ---
export interface BookingData {
    from: string;
    to: string;
    date: string; // dạng "2025-07-10"
    selectedTrip?: Trip;
    customerInfo?: CustomerInfo;
}

// --- Store Zustand ---
interface BookingStore {
    booking: BookingData;
    setBookingData: (data: Partial<BookingData>) => void;
    clearBooking: () => void;
}

export const useBookingStore = create<BookingStore>((set) => ({
    booking: {
        from: "",
        to: "",
        date: "",
        selectedTrip: undefined,
        customerInfo: undefined,
    },
    setBookingData: (data) =>
        set((state) => ({
            booking: {
                ...state.booking,
                ...data,
            },
        })),
    clearBooking: () =>
        set(() => ({
            booking: {
                from: "",
                to: "",
                date: "",
                selectedTrip: undefined,
                customerInfo: undefined,
            },
        })),
}));
