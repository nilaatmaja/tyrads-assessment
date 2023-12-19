import BubbleChat from "@/components/atoms/Chat/BubbleChat";
import ChatInput from "./ChatInput";

type Props = {};

const Chat = (props: Props) => {
    return (
        <div className="flex flex-col gap-3 p-5 flex-grow justify-between">
            <span className="text-sm font-bold">Esther Howard</span>
            <div className="flex flex-col gap-3">
                <BubbleChat isSelf message="Are you ready?" />
                <BubbleChat message="I have perpared everything" />
            </div>
            <ChatInput />
        </div>
    );
};

export default Chat;
