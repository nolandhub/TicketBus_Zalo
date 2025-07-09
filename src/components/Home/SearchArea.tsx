import { useState } from "react";
import LocationInput from "@/components/SearchArea/LocationInput";
import DateInput from "@/components/SearchArea/DateInput";
import SwapButton from "@/components/SearchArea/SwapButton";
import ActionButton from "../common/ActionButton";
import { MapPin, Locate } from "lucide-react";
import { useNavigate } from "react-router-dom";


const suggestions = [
    "Hà Nội",
    "TP. Hồ Chí Minh",
    "Đà Nẵng",
    "Huế",
    "Nha Trang",
    "Đà Lạt",
    "Hạ Long",
    "Phú Quốc",
    "Cần Thơ",
    "Vũng Tàu",
];

const SearchArea = () => {
    const [departure, setDeparture] = useState("");
    const [destination, setDestination] = useState("");
    const [date, setDate] = useState<Date | undefined>(new Date());

    const toLocalDateString = (date: Date) =>
        date.toLocaleDateString("sv-SE"); // định dạng YYYY-MM-DD

    const navigate = useNavigate()
    const handleSwap = () => {
        setDeparture(destination);
        setDestination(departure);
    };

    const handleSearch = () => {
        if (!departure || !destination || !date) {
            alert("Vui lòng nhập đầy đủ thông tin!");
            return;
        }

        navigate("/availableTrip", {
            state: {
                from: departure,
                to: destination,
                date: toLocalDateString(date), // "2025-07-10"
            },
        });
    };


    return (
        <div className="p-4 bg-gradient-to-br from-orange-200 via-orange-100 to-yellow-200 flex justify-center">
            <div className="bg-yellow-100 rounded-2xl shadow-lg flex flex-wrap items-center px-4 py-16 gap-4 w-full max-w-5xl relative">
                <LocationInput
                    icon={<MapPin />}
                    placeholder="Nơi đi"
                    value={departure}
                    onChange={setDeparture}
                    suggestions={suggestions}
                />
                <SwapButton onClick={handleSwap} />
                <LocationInput
                    icon={<Locate />}
                    placeholder="Nơi đến"
                    value={destination}
                    onChange={setDestination}
                    suggestions={suggestions}
                />
                <DateInput value={date} onChange={setDate} />
                <ActionButton
                    shade="600"
                    color="red"
                    label="Tìm Chuyến"
                    onClick={handleSearch}
                />

            </div>
        </div>
    );
};

export default SearchArea;

