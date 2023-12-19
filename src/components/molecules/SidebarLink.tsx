import Link from "next/link";
import React from "react";

type IconSVGProps = React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> &
    React.RefAttributes<SVGSVGElement>;
type IconProps = IconSVGProps & {
    title?: string;
    titleId?: string;
};

type SidebarLinkTypes = {
    href: string;
    Icon: React.FC<IconProps>;
    active?: boolean;
};

const SidebarLink = (props: SidebarLinkTypes) => {
    const { href, Icon, active = false } = props;
    return (
        <Link
            href={href}
            className={`flex items-center justify-center text-gray-700 hover:bg-primaryColor hover:text-white duration-150 w-[40px] h-[40px] rounded-full ${
                active ? "bg-primaryColor text-white" : ""
            }`}
        >
            <Icon height={20} width={20} />
        </Link>
    );
};

export default SidebarLink;
