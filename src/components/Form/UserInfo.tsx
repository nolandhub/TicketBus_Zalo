import { useState } from "react";
import { Input, Radio, DatePicker, Button } from "zmp-ui";

import { useNavigate } from "react-router-dom";
import BackHeader from "../common/BackHeader";

const EditProfilePage = () => {

    const [formData, setFormData] = useState({
        name: "Đỗ Nhân",
        gender: "khac",
        birthday: undefined,
        phone: "123456789",
        city: "",
        district: "",
        ward: "",
        address: "",
        favorite: "",
    });

    const handleChange = (field: string, value: any) => {
        setFormData({ ...formData, [field]: value });
    };

    const handleSubmit = () => {
        console.log("Form submitted:", formData);
        // Gọi API cập nhật ở đây nếu cần
    };

    const navigate = useNavigate();
    return (
        <div >
            {/* Header */}
            <BackHeader title="Chỉnh sửa thông tin" backTo="/profile" />

            <div className="p-4 space-y-4 min-h-screen bg-slate-100">
                <Input
                    label="Họ tên"
                    required
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    placeholder="Nhập họ tên"
                />

                <div>
                    <label className="font-medium text-sm mb-1 block">Giới tính</label>
                    <Radio.Group
                        value={formData.gender}
                        onChange={(val) => handleChange("gender", val)}
                    >
                        <Radio value="nam">Nam</Radio>
                        <Radio value="nu">Nữ</Radio>
                        <Radio value="khac">Khác</Radio>
                    </Radio.Group>
                </div>

                <div>
                    <label className="font-medium text-sm block mb-1">Ngày sinh</label>
                    <DatePicker
                        value={formData.birthday}
                        onChange={(val) => handleChange("birthday", val)}
                        placeholder="Chọn ngày sinh"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                        *Lưu ý: Voucher sinh nhật là quyền lợi của bạn, hãy cập nhật đúng vì không thể chỉnh sửa nha.
                    </p>
                </div>

                <Input
                    label="Số điện thoại"
                    value={formData.phone}
                    disabled
                />

                <Input
                    label="Thành phố / Tỉnh"
                    value={formData.city}
                    onChange={(e) => handleChange("city", e.target.value)}
                    placeholder="Chọn tỉnh thành"
                />

                <div className="grid grid-cols-2 gap-4">
                    <Input
                        label="Quận / Huyện"
                        value={formData.district}
                        onChange={(e) => handleChange("district", e.target.value)}
                        placeholder="Chọn quận"
                    />
                    <Input
                        label="Phường"
                        required
                        value={formData.ward}
                        onChange={(e) => handleChange("ward", e.target.value)}
                        placeholder="Chọn phường"
                    />
                </div>

                <Input
                    label="Địa chỉ"
                    required
                    value={formData.address}
                    onChange={(e) => handleChange("address", e.target.value)}
                    placeholder="Nhập địa chỉ"
                />

                <Input
                    label="Nhà xe yêu thích"
                    value={formData.favorite}
                    onChange={(e) => handleChange("favorite", e.target.value)}
                    placeholder="VD: Futa , Liên Hưng ,..."
                />

                <Button
                    fullWidth
                    className="mt-4"
                    onClick={handleSubmit}
                >
                    Cập nhật
                </Button>
            </div>

        </div>

    );
};

export default EditProfilePage;
