import Card from "@/components/molecules/Card/Card";
import ItemWithCheckbox from "@/components/molecules/Item/ItemWithCheckbox";
import { ChevronRightIcon, PlusIcon } from "@heroicons/react/24/outline";
import Chat from "@/components/molecules/Chat/Chat";

type ShoppingItem = {
    id: string;
    name: string;
    isChecked: boolean;
};

type ShoppingChatType = {
    data: ShoppingItem[];
};

const ShoppingChat = ({ data }: ShoppingChatType) => {
    return (
        <Card className="flex flex-grow p-0 max-w-4xl">
            {/* Shopping list */}
            <div className="flex flex-col gap-2 max-w-[420px] border-r-2 border-r-gray-200 pr-4 p-5">
                <span className="text-sm font-bold">List of items to buy</span>
                <div className="flex items-center gap-3">
                    <div className="flex flex-col">
                        <span className="font-bold">02:00</span>
                        <span className="text-xs text-gray-400">
                            Sat, August 12
                        </span>
                    </div>
                    <ChevronRightIcon
                        height={20}
                        width={20}
                        className="text-gray-400"
                    />
                    <div className="flex flex-col">
                        <span className="font-bold">05:00</span>
                        <span className="text-xs text-gray-400">
                            Sat, September 12
                        </span>
                    </div>
                </div>

                <div className="flex flex-col gap-3 mt-4">
                    <div className="flex justify-between mt-2">
                        <span className="text-xs text-gray-400">
                            0/3{" "}
                            <span className="font-bold text-black">
                                Shopping list
                            </span>
                        </span>
                        <button className="flex text-xs items-center gap-1 font-bold">
                            <PlusIcon height={10} width={10} /> Add an item
                        </button>
                    </div>

                    <div className="grid grid-cols-2 gap-2 mt-2">
                        {data.map((item, index) => (
                            <ItemWithCheckbox
                                key={`shoppingList-${index}`}
                                id={item.id}
                                name={item.name}
                                isChecked={item.isChecked}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Chat */}
            <Chat />
        </Card>
    );
};

export default ShoppingChat;
