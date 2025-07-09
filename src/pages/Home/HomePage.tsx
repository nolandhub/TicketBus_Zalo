import Header from "@/components/Layout/Header";
import SearchArea from "../../components/Home/SearchArea";
import Background from "@/components/Home/background_Probus";
import RouteSwiper from "@/components/Home/PopularRouteSwiper";
import PartnerBusesSwiper from "@/components/Home/BusPartner";
const Home = () => {
    return (
        <div className="min-h-screen bg-gray-200">
            <Header />
            <Background />
            <SearchArea />
            <RouteSwiper />
            <PartnerBusesSwiper />
        </div>
    );
};

export default Home;
