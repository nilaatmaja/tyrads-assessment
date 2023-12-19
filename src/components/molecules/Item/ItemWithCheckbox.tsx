import InputCheckbox from "@/components/atoms/Input/InputCheckbox";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import React from "react";

type ItemWithCheckboxType = {
    id: string;
    name: string;
    isChecked: boolean;
};

const ItemWithCheckbox = ({ id, name, isChecked }: ItemWithCheckboxType) => {
    return (
        <div className="flex bg-primaryBg items-center p-3 rounded-md justify-between">
            <InputCheckbox name={name} isChecked={isChecked} id={id} />
            <EllipsisVerticalIcon
                height={20}
                width={20}
                className="cursor-pointer"
            />
        </div>
    );
};

export default ItemWithCheckbox;
