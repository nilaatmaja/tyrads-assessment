import SidebarLink from "@/components/molecules/SidebarLink";
import {
    ArrowLeftOnRectangleIcon,
    BellIcon,
    ChatBubbleLeftRightIcon,
    ClockIcon,
    CogIcon,
    HomeIcon,
    UsersIcon,
    WalletIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";
import avatar1 from "@/assets/avatars/avatar1.png";

type Props = {};

const Sidebar = (props: Props) => {
    return (
        <aside className="flex flex-col items-center justify-between w-[90px] bg-white p-5 z-50">
            <div className="flex flex-col items-center gap-10 w-full">
                <h1 className="text-2xl font-bold">S.</h1>
                <button className="h-[50px] w-[50px] rounded-full bg-[#fedfc0] flex items-center justify-center p-3">
                    <ChatBubbleLeftRightIcon height={20} width={20} />
                </button>
            </div>
            <nav className="bg-primaryBg rounded-full w-full flex flex-col items-center p-2 gap-3">
                <SidebarLink href="/dashboard" Icon={HomeIcon} active />
                <SidebarLink href="/dashboard" Icon={BellIcon} />
                <SidebarLink href="/dashboard" Icon={ClockIcon} />
                <SidebarLink href="/dashboard" Icon={UsersIcon} />
                <SidebarLink href="/dashboard" Icon={WalletIcon} />
                <SidebarLink href="/dashboard" Icon={CogIcon} />
            </nav>
            <div className="flex flex-col relative mb-10">
                <button className="flex items-center justify-center bg-primaryBg h-[50px] w-[50px] rounded-full p-1">
                    <Image src={avatar1} alt="avatar" />
                </button>
                <button className="flex items-center justify-center bg-primaryBg h-[50px] w-[50px] rounded-full p-1 -z-[1] -mt-3 absolute -bottom-9">
                    <ArrowLeftOnRectangleIcon width={20} height={20} />
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
