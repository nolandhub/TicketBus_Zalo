// components/common/CustomSelect.tsx

import Select, { SingleValue } from "react-select";

type Option = {
    label: string;
    value: string;
};

type CustomSelectProps = {
    label: string;
    placeholder?: string;
    options: Option[];
    value: string;
    onChange: (value: string) => void;
};

const CustomSelect = ({
    label,
    placeholder = "Chọn...",
    options,
    value,

    onChange,
}: CustomSelectProps) => {
    const selectedOption = options.find((opt) => opt.value === value) || null;

    const handleChange = (option: SingleValue<Option>) => {
        onChange(option?.value || "");
    };

    return (
        <div className="space-y-1">
            <label className="block text-sm font-bold text-black ">{label}</label>
            <Select
                isSearchable={false}
                options={options}
                value={selectedOption}
                onChange={handleChange}
                placeholder={placeholder}
                className="text-sm font-medium"
                styles={{
                    control: (base) => ({
                        ...base,
                        borderRadius: "0.5rem",
                        padding: "2px",
                    }),
                }}
            />
        </div>
    );
};

export default CustomSelect;
