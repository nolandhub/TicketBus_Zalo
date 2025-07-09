import HaNoiImg from "@/static/HaNoi.jpg";
import SaiGonImg from "@/static/SaiGon.jpg";
import SapaImg from "@/static/Sapa.jpg";
import DaLatImg from "@/static/DaLat.jpg";
import VungTauImg from "@/static/VungTau.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

import { Modal } from "zmp-ui";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const routes = [
    {
        id: 1,
        title: "SÀI GÒN - ĐÀ LẠT",
        image: DaLatImg,
        description: "Tuyến đường du lịch nổi tiếng giữa miền Nam và cao nguyên Đà Lạt.",
    },
    {
        id: 2,
        title: "SÀI GÒN - VŨNG TÀU",
        image: VungTauImg,
        description: "Tuyến đường biển nhanh chóng, thuận tiện cho du lịch cuối tuần.",
    },
    {
        id: 3,
        title: "HÀ NỘI - SAPA",
        image: SapaImg,
        description: "Tuyến đường khám phá vùng núi Tây Bắc, nhiều cảnh đẹp hùng vĩ.",
    },
    {
        id: 4,
        title: "ĐÀ LẠT - SÀI GÒN",
        image: SaiGonImg,
        description: "Tuyến đường chiều về từ cao nguyên, phù hợp cho lịch trình 3N2Đ.",
    },
    {
        id: 5,
        title: "SÀI GÒN - HÀ NỘI",
        image: HaNoiImg,
        description: "Tuyến đường dài Bắc Nam với nhiều lựa chọn xe giường nằm chất lượng.",
    },
];

type Route = {
    id: number;
    title: string;
    image: string;
    description?: string;
};



const PopularRoutesSwiper = () => {
    const navigate = useNavigate();

    const [selectedRoute, setSelectedRoute] = useState<Route | null>(null);

    const handleClickRoute = (route) => {
        setSelectedRoute(route);
    };

    const handleClose = () => setSelectedRoute(null);

    return (
        <div className="bg-amber-100 py-6 px-2">
            <h2 className="text-center text-xl font-bold mb-4">TUYẾN ĐƯỜNG PHỔ BIẾN</h2>

            <Swiper
                modules={[Pagination, Autoplay]}
                slidesPerView={2.2}
                spaceBetween={12}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3500 }}
                className="!pb-4"
            >
                {routes.map((route) => (
                    <SwiperSlide key={route.id} className="!h-auto">
                        <div
                            className="bg-white rounded-xl overflow-hidden shadow-sm cursor-pointer relative"
                            onClick={() => handleClickRoute(route)}
                        >
                            <img
                                src={route.image}
                                alt={route.title}
                                className="w-full h-44 object-cover rounded-t-xl"
                            />
                            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white font-semibold text-xs px-3 py-1 rounded-full whitespace-nowrap">
                                {route.title}
                            </div>
                        </div>
                    </SwiperSlide>

                ))}
            </Swiper>

            <Modal
                visible={!!selectedRoute}
                zIndex={1200}
                title={selectedRoute?.title}
                coverSrc={selectedRoute?.image}
                description={selectedRoute?.description}
                actions={[
                    {
                        text: "Đóng",
                        close: true,
                    },
                    {
                        text: "Đặt vé",
                        highLight: true,
                        onClick: () => {
                            navigate("/bookingForm");
                        },
                    },
                ]}
                onClose={handleClose}
            />
        </div>
    );
};

export default PopularRoutesSwiper;
