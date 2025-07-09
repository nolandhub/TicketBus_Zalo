import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type DateTimePickerProps = {
    label: string;
    selected: Date | null;
    onChange: (date: Date | null) => void;
    minDate?: Date;
    placeholder?: string;
    isClearable?: boolean;
};

const DateTimePicker = ({
    label,
    selected,
    onChange,
    minDate,
    placeholder = "Chọn ngày & giờ",
    isClearable = false,
}: DateTimePickerProps) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setIsMobile(window.innerWidth < 768);
        }
    }, []);

    return (
        <div className="space-y-1">
            <label className="block text-sm font-medium text-black">{label}</label>
            <DatePicker
                selected={selected}
                onChange={onChange}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={30}
                dateFormat="dd/MM/yyyy HH:mm"
                minDate={minDate}
                isClearable={isClearable}
                placeholderText={placeholder}
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                onFocus={(e) => e.target.blur()}
                popperPlacement={isMobile ? "top-start" : "bottom-start"}
            />
        </div>
    );
};

export default DateTimePicker;
