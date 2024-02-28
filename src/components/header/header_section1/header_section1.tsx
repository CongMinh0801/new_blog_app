import Link from 'next/link';

export default function HeaderSection1() {
    return (
        <div className="w-full h-32 border-none md:border-b border-gray-400 text-white flex justify-between items-center">
            <div className="hidden md:block">
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
                <Link href="/">
                    <span className="font-bold text-5xl">MyBlog</span>
                </Link>
            </div>
            <div className="hidden md:block">
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
            <div className="block md:hidden">
                <button>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
}
