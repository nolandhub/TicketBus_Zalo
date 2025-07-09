import { useState } from "react";
import { Input, Button } from "zmp-ui";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import BackHeader from "../common/BackHeader";
import CustomSelect from "@/components/common/Select";
import DateTimePicker from "../common/DateTimePicker";

const busPartners = [
    { label: "Cúc Tùng", value: "1" },
    { label: "Hải Vân", value: "2" },
    { label: "Sao Việt", value: "3" },
    { label: "Phong Phú", value: "4" },
];

const routes = [
    { label: "Sài Gòn - Đà Lạt", value: "1" },
    { label: "Hà Nội - Sapa", value: "2" },
    { label: "Sài Gòn - Vũng Tàu", value: "3" },
];

const BookingForm = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        phone: "",
        busPartner: "",
        routeName: "",
        passengerCount: 1,
        dateTime: new Date(),
        returnDate: null as Date | null,
    });

    const handleChange = (field: string, value: any) => {
        setFormData({ ...formData, [field]: value });
    };

    const handleSubmit = () => {
        console.log("Booking Info:", formData);
        // TODO: Gọi API hoặc lưu vào Firestore
    };

    const passengerOptions = Array.from({ length: 30 }, (_, i) => ({
        label: `${i + 1} người`,
        value: `${i + 1}`,
    }));

    return (
        <div className="space-y-5 min-h-screen bg-white">
            <BackHeader title="Đặt vé xe" backTo="/" />

            <div className="bg-slate-100 font-bold p-4 rounded-2xl space-y-4">
                <Input
                    label="Họ tên"
                    placeholder="Nhập họ tên"
                    value={formData.fullName}
                    onChange={(e) => handleChange("fullName", e.target.value)}
                    required
                />

                <Input
                    label="Số điện thoại"
                    placeholder="SĐT của bạn"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    required
                />

                <CustomSelect
                    label="Chọn nhà xe"
                    options={busPartners}
                    value={formData.busPartner}
                    onChange={(val) => handleChange("busPartner", val)}
                />

                <CustomSelect
                    label="Chọn tuyến"
                    options={routes}
                    value={formData.routeName}
                    onChange={(val) => handleChange("routeName", val)}
                />

                <CustomSelect
                    label="Số lượng"
                    options={passengerOptions}
                    value={formData.passengerCount.toString()}
                    onChange={(val) =>
                        handleChange("passengerCount", parseInt(val || "1") || 1)
                    }
                />

                <DateTimePicker
                    label="Ngày đi"
                    selected={formData.dateTime}  // ✅ đúng tên prop
                    onChange={(val) => handleChange("dateTime", val)}
                    minDate={new Date()}
                />

                <DateTimePicker
                    label="Ngày về (nếu có)"
                    selected={formData.returnDate}
                    onChange={(val) => handleChange("returnDate", val)}
                    minDate={formData.dateTime}
                    isClearable
                    placeholder="Chọn ngày về"
                />
            </div>

            <Button
                fullWidth
                className="bg-indigo-600 hover:bg-indigo-700 text-white"
                onClick={handleSubmit}
            >
                Đặt Ngay
            </Button>
        </div >
    );
};

export default BookingForm;
