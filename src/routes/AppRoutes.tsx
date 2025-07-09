import { AnimationRoutes, Route } from "zmp-ui";
import HomePage from "@/pages/Home/HomePage";
import ProfilePage from "@/pages/Profile/ProfilePage";
import EditProfilePage from "@/components/Form/UserInfo";
import BookingForm from "@/components/Form/BookingForm";
import MyTicketsPage from "@/pages/Ticket/TicketPage";
import GiftPage from "@/pages/Gift/GiftPage";
import AvailableTrip from "@/components/Form/AvailableTrip";
const AppRoutes = () => {
    return (
        <AnimationRoutes>
            <Route path="/" element={<HomePage />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="editInfo" element={<EditProfilePage />} />
            <Route path="bookingForm" element={<BookingForm />} />
            <Route path="ticket" element={<MyTicketsPage />} />
            <Route path="gift" element={<GiftPage />} />
            <Route path="availableTrip" element={<AvailableTrip />} />
        </AnimationRoutes>
    );
};

export default AppRoutes;