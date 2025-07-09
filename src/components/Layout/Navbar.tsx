import { NavLink } from "react-router-dom";
import React from "react";
import { Ticket, Home, Gift, User } from "lucide-react";

type Props = {
    children: React.ReactNode;
};

const BottomNav: React.FC<Props> = ({ children }) => {

    const navItems = [
        { to: "/", icon: <Home />, label: "Trang Chủ" },
        { to: "/ticket", icon: <Ticket />, label: "Xem Vé" },
        { to: "/gift", icon: <Gift />, label: "Quà Tặng" },
        { to: "/profile", icon: <User />, label: "Tài Khoản" },
    ];

    return (
        <div className="relative pb-16 min-h-screen bg-gray-50"> {/* wrapper chính */}
            {/* Nội dung trang */}
            <div>{children}</div>

            {/* Bottom Navigation */}
            <nav className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-md flex justify-around py-5 z-50 ">
                {navItems.map((item, idx) => (
                    <NavLink
                        key={idx}
                        to={item.to}
                        className={({ isActive }) =>
                            `flex flex-col items-center text-xs transition-colors duration-200 ${isActive ? "text-blue-600 font-semibold" : "text-gray-500"}`
                        }
                    >
                        {item.icon}
                        <span className="mt-0.5">{item.label}</span>
                    </NavLink>
                ))}
            </nav>
        </div>
    );
};

export default BottomNav;
