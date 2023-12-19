"use client";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import InputText from "../atoms/Input/InputText";
import { useState } from "react";

type Props = {};

const SearchBar = (props: Props) => {
    const [showSearchField, setshowSearchField] = useState(false);
    return (
        <>
            {showSearchField && <InputText fullRounded placeHolder="Search" />}
            <button
                onClick={() => setshowSearchField((prev) => !prev)}
                className="flex justify-center items-center bg-white rounded-full w-[40px] h-[40px]"
            >
                <MagnifyingGlassIcon height={20} width={20} />
            </button>
        </>
    );
};

export default SearchBar;
