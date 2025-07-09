import { useState } from "react";
import { Page, Avatar, Button } from "zmp-ui";
import { Pencil, Banknote } from "lucide-react";
import { useNavigate } from "react-router-dom";

import BackHeader from "@/components/common/BackHeader";
const ProfilePage = () => {
    const [user, setUser] = useState({
        name: "Nguyễn Văn A",
        phone: "123456789",
        gender: "Khác",
        dob: "--",
        address: "--",
        favorite: "--",
        avatar: "https://i.pravatar.cc/150?img=12",
        totalSpending: 0,
    });

    const navigate = useNavigate();

    return (
        <Page className="bg-white">
            {/* Header Back */}

            <BackHeader title="Thông tin cá nhân" />


            {/* Member Card */}
            <div className="bg-red-600 text-white px-4 py-6 rounded-xl">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Avatar src={user.avatar} size={58} />
                        <div>
                            <p className="font-bold">{user.name}</p>
                            <p className="text-sm">Thành viên</p>
                        </div>
                    </div>


                    <div className="flex items-center gap-10">
                        <div className="h-16 border-l border-white border-dashed opacity-50" />

                        <div className="text-center text-white text-md">
                            <div className="bg-white text-red-600 rounded-full px-2 py-1 text-md font-semibold flex gap-2 justify-between items-center">
                                <span><Banknote size={30} /></span>
                                2,000,000đ
                            </div>
                            <p>Lịch sử giao dịch</p>
                        </div>
                    </div>


                </div>


            </div>



            {/* Tài khoản thông tin */}
            <div className="px-4 pt-4 pb-20">
                <div className="flex justify-between items-center mb-2">
                    <p className="text-lg font-semibold">Tài Khoản</p>
                    <Button
                        variant="tertiary"
                        size="small"
                        onClick={() => navigate("/editInfo")}
                    >
                        <div className="flex items-center gap-1 text-lg">
                            <Pencil size={16} />
                            Cập nhật
                        </div>
                    </Button>
                </div>

                <ul className="space-y-2 text-lg p-4 bg-slate-100 rounded-sm">
                    <li className="flex justify-between border-b pb-2">
                        <span>Họ tên</span>
                        <span>{user.name}</span>
                    </li>
                    <li className="flex justify-between border-b pb-2">
                        <span>Giới tính</span>
                        <span>{user.gender}</span>
                    </li>
                    <li className="flex justify-between border-b pb-2">
                        <span>Ngày sinh</span>
                        <span>{user.dob}</span>
                    </li>
                    <li className="flex justify-between border-b pb-2">
                        <span>Số điện thoại</span>
                        <span>{user.phone}</span>
                    </li>
                    <li className="flex justify-between border-b pb-2">
                        <span>Địa chỉ</span>
                        <span>{user.address}</span>
                    </li>
                    <li className="flex justify-between">
                        <span>Nhà xe yêu thích</span>
                        <span>{user.favorite}</span>
                    </li>
                </ul>

            </div>

            {/* Bottom tabbar giả lập (nếu cần) */}
            <div className="fixed bottom-0 left-0 w-full bg-red-600 text-white flex justify-around py-2 text-xs">
                <div className="flex flex-col items-center">Trang Chủ</div>
                <div className="flex flex-col items-center">Tích Điểm</div>
                <div className="flex flex-col items-center">Quà Tặng</div>
                <div className="flex flex-col items-center font-bold">Tài Khoản</div>
            </div>
        </Page>
    );
};

export default ProfilePage;
