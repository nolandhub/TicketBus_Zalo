import { Page, Button } from "zmp-ui";
import { CheckCircle, Clock } from "lucide-react";
import BackHeader from "@/components/common/BackHeader";
import { useNavigate } from "react-router-dom";
import { QRCodeCanvas } from 'qrcode.react';
import { useState } from "react";

const MyTicketsPage = () => {
    const navigate = useNavigate();
    const [filter, setFilter] = useState<"used" | "unused" | "canceled">("unused");

    const mockTickets = [
        {
            id: "VE123456",
            company: "Xe Kim Chi",
            licensePlate: "51B-123.45",
            date: "2025-07-10",
            time: "08:30",
            price: 220000,
            status: "used", // or "unused"
            seats: "B12",
            route: "Sài Gòn → Nha Trang",
        },
        {
            id: "VE654321",
            company: "Phương Trang",
            licensePlate: "60C-678.90",
            date: "2025-07-15",
            time: "20:00",
            price: 540000,
            status: "unused",
            seats: ["A1", "A2", "A3"],
            route: "Đà Lạt → Sài Gòn",
        },
        {
            id: "VE654323",
            company: "Phương Trang",
            licensePlate: "60C-678.90",
            date: "2025-07-15",
            time: "20:00",
            price: 540000,
            status: "used",
            seats: ["A1", "A2", "A3"],
            route: "Đà Lạt → Sài Gòn",
        },
        {
            id: "VE999999",
            company: "Mai Linh",
            licensePlate: "79A-123.45",
            date: "2025-07-12",
            time: "17:00",
            price: 200000,
            status: "canceled",
            seats: "C5",
            route: "Sài Gòn → Phan Thiết",
        }
    ];

    const formatCurrency = (amount: number) =>
        amount.toLocaleString("vi-VN") + "đ";

    return (
        <Page className="bg-gray-100 min-h-screen pb-6">
            {/* Header */}
            <BackHeader title="Vé của tôi" />

            <div className="grid grid-cols-3 bg-white shadow-sm w-full max-w-md mx-auto rounded-xl overflow-hidden">
                <button
                    className={`py-2 text-sm font-semibold border-b-2 transition-colors duration-200
      ${filter === "unused"
                            ? "border-green-500 text-green-600 bg-green-50"
                            : "border-transparent text-gray-500 hover:text-gray-700"}`}
                    onClick={() => setFilter("unused")}
                >
                    Hiện tại
                </button>

                <button
                    className={`py-2 text-sm font-semibold border-b-2 transition-colors duration-200
      ${filter === "used"
                            ? "border-yellow-500 text-yellow-600 bg-yellow-50"
                            : "border-transparent text-gray-500 hover:text-gray-700"}`}
                    onClick={() => setFilter("used")}
                >
                    Đã đi
                </button>

                <button
                    className={`py-2 text-sm font-semibold border-b-2 transition-colors duration-200
      ${filter === "canceled"
                            ? "border-red-500 text-red-600 bg-red-50"
                            : "border-transparent text-gray-500 hover:text-gray-700"}`}
                    onClick={() => setFilter("canceled")}
                >
                    Đã huỷ
                </button>
            </div>

            {/* Tickets */}
            <div className="p-4 space-y-4">
                {mockTickets
                    .filter(ticket => ticket.status === filter)
                    .map((ticket) => (
                        <div
                            key={ticket.id}
                            className={`rounded-2xl shadow-lg overflow-hidden relative ${ticket.status === "used" ? "bg-stone-400" :
                                ticket.status === "canceled" ? "bg-stone-400" : "bg-white"
                                }`}
                        >
                            {/* Company + Status */}
                            <div className="flex justify-between items-center px-4 pt-4">
                                <div>
                                    <p className="text-4xl font-extrabold text-red-500">{ticket.company}</p>
                                    <p className="text-xl text-gray-500 font-semibold ">{ticket.route}</p>
                                </div>
                                <div>
                                    {ticket.status === "used" && (
                                        <span className="flex items-center text-yellow-400 text-lg font-bold">
                                            <CheckCircle size={16} className="mr-1 font-bold" />
                                            Đã sử dụng
                                        </span>
                                    )}

                                    {ticket.status === "unused" && (
                                        <span className="flex items-center text-green-500 text-lg font-bold">
                                            <Clock size={16} className="mr-1" />
                                            Chưa sử dụng
                                        </span>
                                    )}

                                    {ticket.status === "canceled" && (
                                        <span className="flex items-center text-red-500 text-lg font-bold">
                                            <Clock size={16} className="mr-1" />
                                            Đã huỷ
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Divider */}
                            <div className="border-dashed border-t border-gray-300 my-3 mx-4"></div>

                            {/* Ticket Info */}
                            <div className="px-4 pb-4 text-sm text-gray-800 grid grid-cols-2 gap-y-2 items-center">
                                <div>
                                    <strong>
                                        Ngày giờ: <span className="whitespace-nowrap font-semibold text-red-500 ">{ticket.date} - {ticket.time}</span>
                                    </strong>
                                    <p>
                                        <strong>Số ghế:</strong>{" "}
                                        {Array.isArray(ticket.seats) ? ticket.seats.join(", ") : ticket.seats}
                                    </p>
                                    <p><strong>Biển số:</strong> {ticket.licensePlate}</p>
                                    <p><strong>Giá vé:</strong> {formatCurrency(ticket.price)}</p>
                                </div>

                                <span className="flex justify-center item">
                                    <QRCodeCanvas
                                        value={JSON.stringify({
                                            id: ticket.id,
                                        })}
                                        size={80}
                                        bgColor="#ffffff"
                                        fgColor="#000000"
                                    />
                                </span>

                            </div>

                            {/* Footer: Mã vé + Button */}
                            <div className="bg-gray-100 px-4 py-3 flex justify-between items-center">
                                <p className="text-xs text-gray-500">
                                    Mã vé: <span className="font-mono text-black">{ticket.id}</span>
                                </p>

                                {ticket.status === "unused" && (
                                    <Button
                                        size="small"
                                        onClick={() => alert(`Xem chi tiết vé ${ticket.id}`)}
                                    >
                                        Chi tiết
                                    </Button>
                                )}
                            </div>

                            {/* Vé cắt giả ở mép trái/phải */}
                            <div className="absolute top-16 -left-3 w-6 h-6 bg-gray-100 rounded-full"></div>
                            <div className="absolute top-16 -right-3 w-6 h-6 bg-gray-100 rounded-full"></div>
                        </div>
                    ))}
            </div>
        </Page>
    );
};

export default MyTicketsPage;
