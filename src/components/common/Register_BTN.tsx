import { Avatar, Button } from "zmp-ui";

interface Props {
    user: { name: string; avatar: string } | null;
    onRegister: () => void;
}

const UserSection: React.FC<Props> = ({ user, onRegister }) => {
    return (
        <div className="flex flex-col sm:flex-row items-center sm:gap-3 gap-2">
            {!user ? (
                <Button
                    type="danger"
                    className="hover:bg-red-700 px-5 py-2 text-sm sm:text-base"
                    onClick={onRegister}
                >
                    Đăng Ký
                </Button>
            ) : (
                <div className="flex items-center gap-2">
                    <Avatar
                        backgroundColor="SKYBLUE-GREEN"
                        size={50}
                        src={user.avatar}
                    >
                        {user.name.charAt(0).toUpperCase()}
                    </Avatar>
                    <span className="font-medium text-sm sm:text-base">{user.name}</span>
                </div>
            )}
        </div>
    );
};

export default UserSection;
