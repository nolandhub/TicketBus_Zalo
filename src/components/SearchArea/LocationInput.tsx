import { useState } from "react";

interface Props {
    icon: React.ReactNode;
    placeholder: string;
    value: string;
    onChange: (value: string) => void;
    suggestions: string[];
}

const LocationInput = ({ icon, placeholder, value, onChange, suggestions }: Props) => {
    const [showSuggestions, setShowSuggestions] = useState(false);

    const filtered = suggestions.filter((s) => s.toLowerCase().includes(value.toLowerCase()));

    return (
        <div className="relative w-full sm:flex-1 sm:px-3">
            <div className="flex items-center gap-2">
                {icon}
                <input
                    type="text"
                    placeholder={placeholder}
                    className="outline p-3 outline-1 outline-gray-300 focus:outline-blue-400 rounded-3xl"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    onFocus={() => setShowSuggestions(true)}
                    onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
                />
            </div>
            {showSuggestions && value !== suggestions.find((s) => s === value) && (
                <ul className="absolute top-full left-0 w-full bg-white border rounded shadow z-50 text-sm">
                    {filtered.map((item) => (
                        <li
                            key={item}
                            className="px-3 py-2 hover:bg-blue-100 cursor-pointer"
                            onMouseDown={() => {
                                onChange(item);
                                setShowSuggestions(false);
                            }}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default LocationInput;
