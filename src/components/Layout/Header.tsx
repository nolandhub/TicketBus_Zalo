import { useState } from "react";
import Logo from "@/components/common/Logo_in_Header";
import UserSection from "@/components/common/Register_BTN";
import { getUserInfo } from "zmp-sdk";

const Header = () => {
    const [user, setUser] = useState<null | { name: string; avatar: string }>(null);

    const handleRegister = async () => {
        try {
            const { userInfo } = await getUserInfo({
                autoRequestPermission: true,
            });

            setUser({
                name: userInfo.name,
                avatar: userInfo.avatar,
            });
        } catch (error) {
            console.error("Lỗi lấy thông tin người dùng:", error);
            alert("Bạn chưa cho phép truy cập tên và ảnh đại diện.");
        }
    };


    return (
        <header className="relative bg-gradient-to-br from-orange-400 via-orange-300 to-yellow-200 text-white py-10 px-6 shadow-lg overflow-hidden">
            <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-3 justify-between px-4 sm:px-10 py-4 text-center sm:text-left">
                <Logo />
                <UserSection user={user} onRegister={handleRegister} />
            </div>
        </header>
    );
};

export default Header;


