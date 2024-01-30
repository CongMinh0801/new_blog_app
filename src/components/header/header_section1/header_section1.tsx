export default function HeaderSection1() {
    return (
        <div className="w-full h-32 border-b border-gray-400 text-white flex justify-between items-center">
            <div className="">
                <ul className="flex justify-between items-center">
                    <li className="px-2 py-1 border-b border-transparent hover:border-b hover:border-gray-400 cursor-pointer transition-all">
                        Home
                    </li>
                    <li className="px-2 py-1 border-b border-transparent hover:border-b hover:border-gray-400 cursor-pointer transition-all">
                        About
                    </li>
                    <li className="px-2 py-1 border-b border-transparent hover:border-b hover:border-gray-400 cursor-pointer transition-all">
                        Contact
                    </li>
                </ul>
            </div>
            <div>
                <span className="font-bold text-5xl">MyBlog</span>
            </div>
            <div>
                <ul className="flex justify-between items-center">
                    <li className="text-white mx-2">
                        <svg
                            className="h-5 w-5 text-white"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="currentColor"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            {' '}
                            <path stroke="none" d="M0 0h24v24H0z" />{' '}
                            <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                        </svg>
                    </li>
                    <li className="text-white mx-2">
                        <svg
                            className="h-5 w-5 text-white"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="currentColor"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            {' '}
                            <path stroke="none" d="M0 0h24v24H0z" /> <rect x="4" y="4" width="16" height="16" rx="4" />{' '}
                            <circle cx="12" cy="12" r="3" /> <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                        </svg>
                    </li>
                    <li className="text-white mx-2">
                        <svg
                            className="h-5 w-5 text-white"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="currentColor"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            {' '}
                            <path stroke="none" d="M0 0h24v24H0z" />{' '}
                            <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
                        </svg>
                    </li>
                </ul>
            </div>
        </div>
    );
}
