import { Page } from "zmp-ui";
import { Gift, Percent, Tag } from "lucide-react";
import BackHeader from "@/components/common/BackHeader";
import { useNavigate } from "react-router-dom";


const mockVouchers = [
    {
        id: "voucher1",
        title: "Giảm 20% vé xe",
        description: "Áp dụng cho mọi tuyến đường trong tháng 7",
        code: "SUMMER20",
        expire: "31/07/2025",
        color: "from-pink-500 to-yellow-400",
        icon: <Percent size={28} />,
    },
    {
        id: "voucher2",
        title: "Tặng 1 vé khi mua 3",
        description: "Chỉ áp dụng tại hãng Xe Kim Chi",
        code: "KIMCHI4T3",
        expire: "15/08/2025",
        color: "from-indigo-500 to-cyan-400",
        icon: <Gift size={28} />,
    },
    {
        id: "voucher3",
        title: "Giảm 50K cho hóa đơn từ 300K",
        description: "Không giới hạn hãng xe",
        code: "SAVE50",
        expire: "31/07/2025",
        color: "from-green-400 to-emerald-600",
        icon: <Tag size={28} />,
    },
    {
        id: "voucher4",
        title: "Giảm 50K cho hóa đơn từ 300K",
        description: "Không giới hạn hãng xe",
        code: "BBDONTCRY",
        expire: "31/07/2025",
        color: "from-red-400 to-emerald-600",
        icon: <Tag size={28} />,
    },
    {
        id: "voucher5",
        title: "Giảm 50K cho hóa đơn từ 300K",
        description: "Không giới hạn hãng xe",
        code: "ALLFORYOU",
        expire: "31/07/2025",
        color: "from-purple-400 to-emerald-600",
        icon: <Tag size={28} />,
    },
];

const GiftPage = () => {
    const navigate = useNavigate()
    return (
        <Page className="bg-gradient-to-br from-white to-slate-100 min-h-screen ">
            <BackHeader title="Quà Tặng" />

            <div className="space-y-5 py-4">
                {mockVouchers.map((voucher) => (
                    <div
                        key={voucher.id}
                        className={`rounded-2xl p-4 shadow-xl text-white bg-gradient-to-r ${voucher.color} relative overflow-hidden`}
                    >
                        {/* Icon nền mờ góc phải */}
                        <div className="absolute right-3 top-3 opacity-20 scale-150">
                            {voucher.icon}
                        </div>

                        {/* Nội dung chính */}
                        <div className="relative z-10">
                            <div className="flex items-center mb-2">
                                <span className="mr-2">{voucher.icon}</span>
                                <h2 className="text-xl font-extrabold">{voucher.title}</h2>
                            </div>
                            <p className="text-sm mb-1">{voucher.description}</p>
                            <div className="flex justify-between items-center mt-2">
                                <div>
                                    <p className="text-xs opacity-80">HSD: {voucher.expire}</p>
                                    <p className="text-sm font-mono bg-white text-black px-2 py-1 rounded mt-1 inline-block">
                                        Mã: {voucher.code}
                                    </p>
                                </div>
                                <button className="bg-white text-indigo-600 font-semibold px-3 py-1 rounded-full shadow-md hover:bg-gray-100 transition text-sm">
                                    Dùng ngay
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Page>
    );
};

export default GiftPage;
