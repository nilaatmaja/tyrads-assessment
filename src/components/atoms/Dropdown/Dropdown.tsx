"use client";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

type Props = {};

const Dropdown = (props: Props) => {
    const [toggleDropdown, setToggleDropdown] = useState(false);
    return (
        <div className="relative w-full flex justify-end">
            <button
                className="bg-primaryBg px-5 flex h-[40px] items-center rounded-lg gap-2 text-sm"
                onClick={() => setToggleDropdown((prev) => !prev)}
            >
                Filter
                <ChevronDownIcon height={15} width={15} />
            </button>

            {toggleDropdown && (
                <div className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 absolute top-10">
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                        <li className="hover:bg-gray-100 text-black">
                            <a href="#" className="block px-4 py-2">
                                Filter
                            </a>
                        </li>
                        <li className="hover:bg-gray-100 text-black">
                            <a href="#" className="block px-4 py-2">
                                Filter 2
                            </a>
                        </li>
                        <li className="hover:bg-gray-100 text-black">
                            <a href="#" className="block px-4 py-2">
                                Filter 3
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
