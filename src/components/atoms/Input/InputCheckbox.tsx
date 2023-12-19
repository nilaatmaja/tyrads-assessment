import React from "react";

type Props = {
    id: string;
    name: string;
    isChecked: boolean;
};

const InputCheckbox = ({ id, name, isChecked }: Props) => {
    return (
        <div className="flex items-center">
            <input
                id={id}
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-2xl"
            />
            <label htmlFor={id} className="ms-2 text-xs font-bold">
                {name}
            </label>
        </div>
    );
};

export default InputCheckbox;
