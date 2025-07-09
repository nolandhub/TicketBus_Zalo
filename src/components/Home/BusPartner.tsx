import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

import cuctungIMG from "@/static/bus-partner/cuc-tung-limousine-25-img.jpg";
import haivanIMG from "@/static/bus-partner/hai-van-32-img.png";
import saovietIMG from "@/static/bus-partner/sao-viet-75-img.jpg";
import phongphuIMG from "@/static/bus-partner/phong-phu-35-img.jpg";

const partners = [
    { id: 1, name: "Cúc Tùng", logo: cuctungIMG },
    { id: 2, name: "Phong Phú", logo: phongphuIMG },
    { id: 3, name: "Sao Việt", logo: saovietIMG },
    { id: 4, name: "Hải Vân", logo: haivanIMG },
];

const PartnerBusesSwiper = () => {
    return (
        <div className="bg-gradient-to-r from-amber-200 via-amber-300 to-amber-200 py-6 px-4 rounded-xl shadow-inner">
            <h2 className="text-lg font-bold mb-4 text-center text-zinc-800"> Nhà Xe Đối Tác</h2>

            <Swiper
                modules={[EffectCoverflow, Autoplay]}
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2,
                    slideShadows: false,
                }}
                autoplay={{
                    delay: 2800,
                    disableOnInteraction: false,
                }}
                className="w-full"
            >
                {partners.map((bus) => (
                    <SwiperSlide
                        onClick={() => { alert(bus.name) }}
                        key={bus.id}
                        style={{ width: "160px" }}
                        className="bg-white rounded-xl shadow-lg p-3 flex flex-col items-center hover:shadow-xl transition-shadow duration-300"
                    >

                        <img
                            src={bus.logo}
                            alt={bus.name}
                            className="w-full h-24 object-cover rounded-md mb-2"
                        />
                        <div className="text-sm font-semibold text-center text-zinc-700">{bus.name}</div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default PartnerBusesSwiper;
