import { useLocation, useNavigate } from "react-router-dom";
import BackHeader from "../common/BackHeader";
import ActionButton from "../common/ActionButton";
import { BusFront, Clock, DollarSign } from "lucide-react";

const mockTrips = [
    {
        id: "1",
        from: "Hà Nội",
        to: "Đà Nẵng",
        date: "2025-07-10",
        time: "08:00",
        busCompany: "Hải Vân",
        price: "250,000đ",
    },
    {
        id: "2",
        from: "TP. Hồ Chí Minh",
        to: "Đà Lạt",
        date: "2025-07-10",
        time: "09:30",
        busCompany: "Cúc Tùng",
        price: "300,000đ",
    },
    {
        id: "3",
        from: "TP. Hồ Chí Minh",
        to: "Đà Lạt",
        date: "2025-07-10",
        time: "14:00",
        busCompany: "Sao Việt",
        price: "320,000đ",
    },
];

const AvailableTripPage = () => {
    const location = useLocation();
    const { from, to, date } = location.state || {};
    const navigate = useNavigate();

    const filteredTrips = mockTrips.filter(
        (trip) =>
            trip.from === from &&
            trip.to === to &&
            trip.date === date
    );

    const handleClick = (tripId: string) => {
        navigate("/bookingForm", { state: { tripId } });
    };

    return (
        <div className="space-y-4  bg-gray-50 min-h-screen">
            <BackHeader title="Danh sách chuyến" />
            <h1 className="text-xl font-bold mb-2 text-center text-gray-800">
                Chuyến xe từ {from} đến {to} ngày {date}
            </h1>

            {filteredTrips.length === 0 ? (
                <p className="text-center text-gray-500">Không tìm thấy chuyến xe phù hợp.</p>
            ) : (
                <div className="space-y-4 max-w-3xl mx-auto">
                    {filteredTrips.map((trip) => (
                        <div
                            key={trip.id}
                            className="p-5 bg-white rounded-2xl shadow-md border border-gray-200 flex flex-col gap-4"
                        >
                            <div className="flex items-center gap-3 text-lg font-semibold text-indigo-700">
                                <BusFront className="w-6 h-6" />
                                {trip.busCompany}
                            </div>

                            <div className="flex items-center gap-2 text-gray-600">
                                <Clock className="w-5 h-5 text-gray-500" />
                                Giờ khởi hành: <span className="font-medium">{trip.time}</span>
                            </div>

                            <div className="flex items-center gap-2 text-gray-600">
                                <DollarSign className="w-5 h-5 text-green-600" />
                                Giá vé: <span className="font-semibold text-green-700">{trip.price}</span>
                            </div>

                            <div className="flex justify-end">
                                <ActionButton
                                    label="Đặt Vé"
                                    color="blue"
                                    shade="600"
                                    onClick={() => handleClick(trip.id)}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default AvailableTripPage;
