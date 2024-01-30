'use client';

import { useState } from 'react';
import './header_section2.css';

export default function HeaderSection2() {
    const [showSearch, setShowSearch] = useState<boolean>(false);

    const showSearchButton = () => {
        setShowSearch(!showSearch);
    };
    return (
        <div>
            {!showSearch ? (
                <div className="flex h-10 justify-between items-center transition-all">
                    <div className="flex justify-between items-center">
                        <div className="px-4 py-2 h-full flex justify-between items-center text-white text-sm font-medium cursor-pointer hover:bg-gray-300 hover:bg-opacity-70">
                            Home
                        </div>
                        <div className="item-have-list relative px-4 py-2 h-full flex justify-between items-center text-white text-sm font-medium cursor-pointer hover:bg-gray-300 hover:bg-opacity-70">
                            Features
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-4 h-4 ml-2"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                            <ul className="list absolute top-full left-0 w-full hidden bg-white text-gray-700 shadow rounded-sm">
                                <li className="w-full p-2 hover:bg-gray-300 hover:bg-opacity-50 hover:pl-4 transition-all">
                                    Item 1
                                </li>
                                <li className="w-full p-2 hover:bg-gray-300 hover:bg-opacity-50 hover:pl-4 transition-all">
                                    Item 2
                                </li>
                                <li className="w-full p-2 hover:bg-gray-300 hover:bg-opacity-50 hover:pl-4 transition-all">
                                    Item 3
                                </li>
                            </ul>
                        </div>
                        <div className="item-have-list relative px-4 py-2 h-full flex justify-between items-center text-white text-sm font-medium cursor-pointer hover:bg-gray-300 hover:bg-opacity-70">
                            Documentation
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-4 h-4 ml-2"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                            <ul className="list absolute top-full left-0 w-full hidden bg-white text-gray-700 shadow rounded-sm">
                                <li className="w-full p-2 hover:bg-gray-300 hover:bg-opacity-50 hover:pl-4 transition-all">
                                    Item 1
                                </li>
                                <li className="w-full p-2 hover:bg-gray-300 hover:bg-opacity-50 hover:pl-4 transition-all">
                                    Item 2
                                </li>
                                <li className="w-full p-2 hover:bg-gray-300 hover:bg-opacity-50 hover:pl-4 transition-all">
                                    Item 3
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <button onClick={showSearchButton} className="p-2 hover:bg-gray-300 hover:bg-opacity-10">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="w-6 h-6 text-white"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            ) : (
                <div className="h-10 w-full flex justify-center items-center transition-all">
                    <input
                        type="text"
                        className="h-8 my-1 w-full px-2 rounded outline-none"
                        placeholder="Tìm kiếm bài đăng"
                    />
                    <button
                        onClick={showSearchButton}
                        className="p-2 ml-2 hover:bg-gray-300 hover:bg-opacity-10 text-gray-700"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-6 h-6 text-white"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                            />
                        </svg>
                    </button>
                </div>
            )}
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        </div>
    );
}
