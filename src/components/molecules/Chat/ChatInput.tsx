import Button from "@/components/atoms/Button/Button";
import InputText from "@/components/atoms/Input/InputText";
import { FaceSmileIcon, PaperClipIcon } from "@heroicons/react/24/outline";
import React from "react";

type Props = {};

const ChatInput = (props: Props) => {
    return (
        <div className="h-[100px] bg-primaryBg rounded-lg flex flex-col justify-between mt-2">
            {/* input */}
            <InputText
                placeHolder="Type your message"
                type="ghost"
                className="text-sm px-3"
            />
            {/* cta */}
            <div className="flex gap-3 justify-between items-center p-3">
                <div className="flex items-center gap-3">
                    <FaceSmileIcon
                        height={20}
                        width={20}
                        className="cursor-pointer"
                    />
                    <PaperClipIcon
                        height={20}
                        width={20}
                        className="cursor-pointer"
                    />
                </div>
                <Button type="primary" className="text-xs">
                    Send now
                </Button>
            </div>
        </div>
    );
};

export default ChatInput;
