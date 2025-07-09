import { ZMPRouter } from "zmp-ui";
import AppRoutes from "@/routes/AppRoutes";
import BottomNav from "@/components/Layout/Navbar";

export default function AppLayout() {
  return (
    <ZMPRouter>
      <BottomNav>
        <AppRoutes />
      </BottomNav>
    </ZMPRouter>
  );
}
