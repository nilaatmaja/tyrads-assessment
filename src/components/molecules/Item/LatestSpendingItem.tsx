import Image from "next/image";
import image1 from "@/assets/images/shopping-online.png";
import image2 from "@/assets/images/medical-center.png";
import image3 from "@/assets/images/tickets.png";

type Props = {};

const LatestSpendingItem = (props: Props) => {
    return (
        <>
            <div className="flex py-3 border-b border-gray-300 justify-between">
                <div className="flex gap-3">
                    {/* avatar */}
                    <div className="flex items-center">
                        <Image src={image1} alt="avatar" height={40} />
                    </div>
                    {/* name and date */}
                    <div className="flex flex-col justify-center">
                        <span className="text-sm font-bold">Online Store</span>
                        <span className="text-xs text-gray-400">
                            May 30, 2023 at 08:00 pm
                        </span>
                    </div>
                </div>
            </div>

            <div className="flex py-3 border-b border-gray-300 justify-between">
                <div className="flex gap-3">
                    {/* avatar */}
                    <div className="flex items-center">
                        <Image src={image2} alt="avatar" height={40} />
                    </div>
                    {/* name and date */}
                    <div className="flex flex-col justify-center">
                        <span className="text-sm font-bold">
                            Pay the hospital
                        </span>
                        <span className="text-xs text-gray-400">
                            May 28, 2023 at 10:00 pm
                        </span>
                    </div>
                </div>
            </div>

            <div className="flex py-3 justify-between">
                <div className="flex gap-3">
                    {/* avatar */}
                    <div className="flex items-center">
                        <Image src={image3} alt="avatar" height={40} />
                    </div>
                    {/* name and date */}
                    <div className="flex flex-col justify-center">
                        <span className="text-sm font-bold">Tickets</span>
                        <span className="text-xs text-gray-400">
                            May 10, 2023 at 12:00 pm
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LatestSpendingItem;
