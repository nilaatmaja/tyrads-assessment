import Image from "next/image";
import Avatar1 from "@/assets/avatars/avatar1.png";

type Props = {
    isSelf?: boolean;
    message: string;
};

const BubbleChat = ({ isSelf = false, message }: Props) => {
    const bubblChatStyle = isSelf
        ? "bg-primaryColor text-white rounded-lg rounded-br-none"
        : "bg-primaryBg rounded-lg rounded-bl-none";

    return (
        <div
            className={`flex items-center ${isSelf ? "flex-row-reverse" : ""}`}
        >
            <div
                className={`flex gap-2 items-center ${
                    isSelf ? "" : "flex-row-reverse"
                }`}
            >
                <div className={`text-xs p-2 ${bubblChatStyle} `}>
                    {message}
                </div>
                <div>
                    <Image src={Avatar1} alt="avatar" height={30} width={30} />
                </div>
            </div>
        </div>
    );
};

export default BubbleChat;
