import { useState } from "react";
import { Input, Button, Modal, Box, Avatar, Text } from "zmp-ui";
import BackHeader from "../common/BackHeader";
import CustomSelect from "@/components/common/Select";
import coverPhoto from "@/static/slideshow-7107-hinh.jpg"
import { CheckCircle } from "lucide-react";

const BookingForm = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        phone: "",
        passengerCount: 1,
    });

    const [showModal, setShowModal] = useState(false);

    const handleChange = (field: string, value: any) => {
        setFormData({ ...formData, [field]: value });
    };

    const handleSubmit = () => {
        console.log("Booking Info:", formData);
        // Giả sử gọi API ở đây
        setShowModal(true); // Mở modal thông báo
    };

    const passengerOptions = Array.from({ length: 30 }, (_, i) => ({
        label: `${i + 1} người`,
        value: `${i + 1}`,
    }));

    return (
        <div className="space-y-5 min-h-screen bg-white">
            <BackHeader title="Đặt vé xe" backTo="/availableTrip" />

            <div className="bg-slate-100 font-bold p-4 rounded-2xl space-y-4">
                <Input
                    label="Họ tên"
                    type="text"
                    placeholder="Nhập họ tên"
                    value={formData.fullName}
                    onChange={(e) => handleChange("fullName", e.target.value)}
                    required
                />

                <Input
                    label="Số điện thoại"
                    type="number"
                    placeholder="SĐT của bạn"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    required
                />

                <CustomSelect
                    label="Số lượng"
                    options={passengerOptions}
                    value={formData.passengerCount.toString()}
                    onChange={(val) =>
                        handleChange("passengerCount", parseInt(val || "1") || 1)
                    }
                />
            </div>

            <Button
                fullWidth
                className="bg-indigo-600 hover:bg-indigo-700 text-white"
                onClick={handleSubmit}
            >
                Đặt Ngay
            </Button>


            <Modal
                visible={showModal}
                actions={[
                    {
                        close: true,
                        highLight: true,
                        text: "Đóng",
                        onClick: () => setShowModal(false),
                    },
                ]}
                coverSrc={coverPhoto}
            >
                <Box alignItems="center" flex flexDirection="column" textAlign="center">
                    <div className="flex flex-col items-center space-y-3 pt-2">

                        <CheckCircle style={{ width: 120, height: 120 }} className="text-green-600" strokeWidth={2} />

                        <Text.Title>Đặt vé thành công</Text.Title>

                        <Text size="small" className="text-gray-600 text-center">
                            Chúng tôi sẽ sớm liên hệ để xác nhận chỗ ngồi và điểm đón. Cảm ơn bạn!
                        </Text>
                    </div>
                </Box>
            </Modal>
        </div>
    );
};

export default BookingForm;
