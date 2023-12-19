import Card from "@/components/molecules/Card/Card";
import SearchBar from "@/components/molecules/SearchBar";
import DashboardLayout from "@/components/templates/DashboardLayout";
import Image, { StaticImageData } from "next/image";
import goldCoin from "@/assets/icons/dollar-coin.png";
import data from "@/data/simpleChart.json";
import dynamic from "next/dynamic";
import {
    ArrowRightIcon,
    ArrowUpCircleIcon,
    EllipsisVerticalIcon,
} from "@heroicons/react/24/outline";
import Dropdown from "@/components/atoms/Dropdown/Dropdown";
import SimpleBarChart from "@/components/atoms/Charts/SimpleBarChart";
import cardImage from "@/assets/icons/treasure.png";
import ShoppingChat from "@/components/organisms/ShoppingChat/ShoppingChat";
import shoppingData from "@/data/shopingList.json";
import Button from "@/components/atoms/Button/Button";
import TransactionItem from "@/components/molecules/Item/TransactionItem";
import avatar1 from "@/assets/avatars/avatar1.png";
import avatar2 from "@/assets/avatars/avatar2.png";
import avatar3 from "@/assets/avatars/avatar3.png";
import avatar4 from "@/assets/avatars/avatar4.png";
import transactionList from "@/data/transactionList.json";
import LatestSpendingItem from "@/components/molecules/Item/LatestSpendingItem";
import crown from "@/assets/images/crown.png";

const SimpleChart = dynamic(
    () => import("@/components/atoms/Charts/SimpleChart"),
    { ssr: false }
);

const HalfPieChart = dynamic(
    () => import("@/components/atoms/Charts/HalfPieChart"),
    { ssr: false }
);

const avatars: Record<string, StaticImageData> = {
    avatar1,
    avatar2,
    avatar3,
    avatar4,
};

type Props = {};

const Dashboard = (props: Props) => {
    return (
        <DashboardLayout>
            <div className="flex gap-5 h-full">
                {/* left content */}
                <div className="flex flex-col flex-grow gap-5 p-5 overflow-y-auto">
                    <div className="flex justify-between items-center gap-5">
                        <div className="flex flex-col gap-2 ">
                            <h1 className="text-2xl font-bold">
                                Hello, Jhon .D
                            </h1>
                            <span className="text-sm">
                                View and control your finances here!
                            </span>
                        </div>

                        {/* search component */}
                        <div className="flex flex-grow justify-end items-center gap-3">
                            <SearchBar />
                        </div>
                    </div>
                    {/* dashboard content */}
                    <div className="flex flex-wrap gap-5">
                        {/* Balance section */}
                        <Card>
                            <div className="flex">
                                <div className="flex flex-col w-[120px] gap-2 ">
                                    <span className="text-sm font-bold">
                                        Balance statistic
                                    </span>
                                    <h3 className="text-2xl font-bold">$564</h3>
                                    <div className="flex items-center justify-center gap-2 border border-transparent border-b-gray-300 pb-3">
                                        <Image
                                            src={goldCoin}
                                            alt="gold coin"
                                            height={30}
                                            width={30}
                                        />
                                        <span className="text-xs">
                                            Your total Balance
                                        </span>
                                    </div>
                                    <div className="flex">
                                        <SimpleChart
                                            data={data}
                                            height={50}
                                            width={70}
                                        />
                                        <div className="flex items-center justify-end gap-1">
                                            <ArrowUpCircleIcon
                                                height={15}
                                                width={15}
                                            />
                                            <span className="text-[10px]">
                                                6%
                                            </span>
                                        </div>
                                    </div>
                                    <span className="text-xs text-gray-400">
                                        Always see your earning updates
                                    </span>
                                </div>

                                {/* right side */}
                                <div className="flex flex-col items-end w-[300px] gap-3">
                                    <Dropdown />
                                    <SimpleBarChart />
                                </div>
                            </div>
                        </Card>

                        {/* visa section */}
                        <Card type="visa" className="relative">
                            <Image
                                src={cardImage}
                                alt="cardImage"
                                height={200}
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                            />

                            <div className="flex justify-between items-end">
                                <div className="flex flex-col">
                                    <span>**** 9838</span>
                                    <span>Jhon Demon</span>
                                </div>
                                <span>08/12</span>
                            </div>
                        </Card>

                        {/* Shopping with chat section */}
                        <ShoppingChat data={shoppingData} />

                        {/* Transaction list section */}
                        <Card className="flex-grow w-full max-w-[550px]">
                            <div className="flex flex-col gap-4">
                                <div className="flex justify-between gap-3">
                                    <span className="text-sm font-bold">
                                        Last transaction
                                    </span>
                                    <div className="flex items-center gap-5">
                                        <Button
                                            type="ghost"
                                            className="underline text-xs p-0"
                                        >
                                            Newest
                                        </Button>
                                        <Button
                                            type="ghost"
                                            className="text-xs p-0"
                                        >
                                            Oldest
                                        </Button>
                                    </div>
                                </div>

                                {/* Transactions list */}
                                <div className="h-full max-h-[200px] overflow-y-auto">
                                    {transactionList.map((item, index) => (
                                        <TransactionItem
                                            key={`transactionList-${index}`}
                                            avatar={avatars[item.avatar]}
                                            name={item.name}
                                            date={item.date}
                                            price={item.price}
                                        />
                                    ))}
                                </div>
                            </div>
                        </Card>

                        {/* Analytic section */}
                        <Card className="flex flex-col gap-3 flex-grow max-w-[350px]">
                            <div className="flex justify-between items-center">
                                <span className="text-sm font-bold">
                                    Analytics
                                </span>
                                <EllipsisVerticalIcon height={25} width={25} />
                            </div>
                            <div>
                                <HalfPieChart />
                            </div>
                        </Card>
                    </div>
                </div>

                {/* right content */}
                <div className="hidden md:flex flex-grow flex-col gap-3 w-full max-w-[350px] bg-white p-5 h-full overflow-y-auto">
                    {/* expenses & income section */}
                    <Card className="border border-gray-300 flex flex-col gap-5">
                        {/* title */}
                        <span className="font-bold">Expenses and income</span>

                        {/* expenses & income */}
                        <div className="flex justify-between gap-5 w-full">
                            {/* expense */}
                            <div className="flex flex-col w-full max-w-[100px] justify-start">
                                <span className="text-xs font-bold">
                                    Expense
                                </span>
                                <span className="text-sm font-bold">75%</span>
                                <span className="text-[10px] text-gray-300">
                                    5.653
                                </span>
                            </div>
                            {/* vs */}
                            <div className="flex flex-col items-center justify-center">
                                <div className="flex justify-center">
                                    <div className="inline-block h-[10px] w-[1px] self-stretch bg-black"></div>
                                </div>
                                <span>vs</span>
                                <div className="flex justify-center">
                                    <div className="inline-block h-[10px] w-[1px] self-stretch bg-black"></div>
                                </div>
                            </div>
                            {/* income */}
                            <div className="flex flex-col w-full max-w-[100px] justify-end text-right">
                                <span className="text-xs font-bold">
                                    Income
                                </span>
                                <span className="text-sm font-bold">40</span>
                                <span className="text-[10px] text-gray-300">
                                    5.653
                                </span>
                            </div>
                        </div>

                        {/* bar */}
                        <div className="flex h-[20px] gap-1">
                            <div className="bg-primaryColor rounded-md w-[70%] h-auto"></div>
                            <div className="bg-secondaryColor rounded-md w-[30%] h-auto"></div>
                        </div>
                    </Card>

                    {/* Latest spending section */}
                    <Card className="flex flex-col gap-3 border border-gray-300">
                        {/* title */}
                        <div className="flex justify-between items-center">
                            <span className="font-bold">Latest spending</span>
                            <EllipsisVerticalIcon height={20} width={20} />
                        </div>

                        {/* List Item */}
                        <LatestSpendingItem />

                        {/* cta */}
                        <Button
                            className="flex gap-3 items-center w-full justify-center text-primaryColor text-xs font-bold"
                            type="ghost"
                        >
                            View all <ArrowRightIcon height={15} width={15} />
                        </Button>
                    </Card>

                    {/* Go premium section */}
                    <Card className="flex flex-col gap-3 border border-gray-300">
                        {/* title */}
                        <span className="text-sm font-bold text-center">
                            Go to premium
                        </span>

                        {/* image */}
                        <Image
                            src={crown}
                            alt="crown"
                            className="w-[75px] h-auto"
                        />

                        {/* title and description */}
                        <div className="flex flex-col">
                            <span className="font-bold">
                                Need more features?
                            </span>
                            <span className="text-xs text-gray-400">
                                Update your account to premium to get more
                                features
                            </span>
                        </div>

                        {/* cta */}
                        <Button type="primary" className="text-sm">
                            Get now
                        </Button>
                    </Card>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Dashboard;
