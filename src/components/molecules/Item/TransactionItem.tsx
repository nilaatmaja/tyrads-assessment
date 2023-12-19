import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import Image, { StaticImageData } from "next/image";

type TransactionItemType = {
    avatar: StaticImageData;
    name: string;
    date: string;
    price: string;
};

const TransactionItem = ({
    avatar,
    name,
    date,
    price,
}: TransactionItemType) => {
    return (
        <div className="flex py-3 border-t border-gray-300 justify-between">
            <div className="flex gap-3">
                {/* avatar */}
                <div className="flex items-center">
                    <Image src={avatar} alt="avatar" height={40} />
                </div>
                {/* name and date */}
                <div className="flex flex-col justify-center">
                    <span className="text-sm font-bold">{name}</span>
                    <span className="text-xs text-gray-400">{date}</span>
                </div>
            </div>

            <div className="flex gap-3 items-center">
                {/* price */}
                <span className="text-sm font-bold">{price}</span>
                {/* cta */}
                <EllipsisVerticalIcon height={20} width={20} />
            </div>
        </div>
    );
};

export default TransactionItem;
