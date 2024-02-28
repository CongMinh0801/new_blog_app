'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function HomeHorizontItem({ imageUrl, title, description, name, date }: any) {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [cardWidth, setCardWidth] = useState<number>(2);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (windowWidth >= 1280) {
            setCardWidth((1280 - 32) / 3);
        } else {
            setCardWidth((windowWidth - 32) / 3);
        }
    }, [windowWidth]);

    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col">
            <Image
                src={imageUrl} // Đường dẫn đến hình ảnh
                alt="Mô tả hình ảnh" // Mô tả hình ảnh
                width={cardWidth} // Chiều rộng
                height={cardWidth / 2} // Chiều cao
                className="hidden md:block"
            />
            <Image
                src={imageUrl} // Đường dẫn đến hình ảnh
                alt="Mô tả hình ảnh" // Mô tả hình ảnh
                width={windowWidth} // Chiều rộng
                height={windowWidth / 2} // Chiều cao
                className="block md:hidden"
            />
            <p className="mt-5 text-center mr-1">{title}</p>
            <div className="m-4">
                <div className=" mb-5 flex h-[54px]">
                    <Link href="" className="break-words uppercase flex text-center">
                        {description}
                    </Link>
                </div>
                <div className=" flex justify-center text-sm">
                    <p className="font-bold mr-1">{name}</p>
                    <p className="mr-1">-</p>
                    <p>{date}</p>
                </div>
            </div>
        </div>
    );
}
