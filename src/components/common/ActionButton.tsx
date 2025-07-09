import clsx from "clsx";


type ActionButtonProps = {
    label: string;
    onClick: () => void;
    color?: "red" | "blue" | "amber" | "green";
    shade?: "500" | "600";
};

export default function ActionButton({
    label,
    onClick,
    color = "red",
    shade = "500",
}: ActionButtonProps) {
    const colorClass = {
        red: {
            "500": "bg-red-500 hover:bg-red-600",
            "600": "bg-red-600 hover:bg-red-700",
        },
        blue: {
            "500": "bg-blue-500 hover:bg-blue-600",
            "600": "bg-blue-600 hover:bg-blue-700",
        },
        amber: {
            "500": "bg-amber-500 hover:bg-amber-600",
            "600": "bg-amber-600 hover:bg-amber-700",
        },
        green: {
            "500": "bg-green-500 hover:bg-green-600",
            "600": "bg-green-600 hover:bg-green-700",
        },
    };

    return (
        <div className="w-full sm:w-auto z-[11]">
            <button
                onClick={onClick}
                className={clsx(
                    "w-full sm:w-auto text-white font-semibold px-5 py-2 rounded-full transition-colors duration-300",
                    colorClass[color][shade]
                )}
            >
                {label}
            </button>
        </div>
    );
}
