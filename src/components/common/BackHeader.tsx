
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

type BackHeaderProps = {
    title: string;
    backTo?: string; // optional, mặc định về "/"
};

const BackHeader = ({ title, backTo = "/" }: BackHeaderProps) => {
    const navigate = useNavigate();

    return (
        <div className="flex items-center px-4 bg-indigo-600 text-white py-16 relative">
            <ChevronLeft
                onClick={() => navigate(backTo)}
                size={20}
                className="cursor-pointer absolute left-4 top-1/2 -translate-y-1/2"
            />
            <h1 className="text-base font-semibold mx-auto">{title}</h1>
        </div>
    );
};

export default BackHeader;
