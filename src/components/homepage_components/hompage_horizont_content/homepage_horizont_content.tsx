'use client';

import React, { useState, useEffect } from 'react';
import HomeHorizontItem from './homepage_horizont_content_item';
import './style.css';

export default function HomeHorizontContent() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [itemCount, setItemCount] = useState<number>(2);
    const items = [
        {
            imageUrl: '/sg_img1.jpg',
            title: 'BUSINESS',
            description: 'tao là duy đẹp trai đây mày làm sao mày nhìn cái cho j',
            name: 'Duy Đẹp Trai',
            date: '27/01/2024',
        },
        {
            imageUrl: '/sg_img1.jpg',
            title: 'FASHION',
            description: 'tao là duy đẹp trai đây mày làm sao mày nhìn cái cho j',
            name: 'Duy Đẹp Trai',
            date: '27/01/2024',
        },
        {
            imageUrl: '/sg_img1.jpg',
            title: 'FASHION',
            description: 'tao là duy đẹp trai đây mày làm sao mày nhìn cái cho j',
            name: 'Duy Đẹp Trai',
            date: '27/01/2024',
        },
        {
            imageUrl: '/sg_img1.jpg',
            title: 'LEARN',
            description: 'tao là duy đẹp trai đây mày làm sao mày nhìn cái cho j',
            name: 'Duy Đẹp Trai',
            date: '27/01/2024',
        },
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextItems = () => {
        if (currentIndex < items.length - 3) {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }
    };

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
        if (windowWidth >= 768) {
            setItemCount(3);
        } else {
            setItemCount(1);
        }
    }, [windowWidth]);

    const prevItems = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevIndex) => prevIndex - 1);
        }
    };

    // Lấy ra phần của mảng items sẽ được hiển thị dựa trên chỉ số currentIndex
    const displayedItems = items.slice(currentIndex, currentIndex + itemCount);
    return (
        <div className="w-full h-30 text-center mt-3 gap-4 overflow-y-auto flex justify-center">
            <div className="parent-block overflow-y-auto w-full lg:max-w-screen-xl relative">
                <div className="hidden md:flex left-btn absolute left-0 -translate-x-8 top-0 items-center transition-all">
                    <button className="w-8 py-3 bg-gray-200 rounded-md rounded-bl-none " onClick={prevItems}>
                        &lt;
                    </button>
                </div>
                <div className="left-btn absolute left-0 -translate-x-8 top-0 bottom-0 flex md:hidden items-center transition-all">
                    <button className="w-8 py-3 bg-gray-200 rounded-md rounded-bl-none " onClick={prevItems}>
                        &lt;
                    </button>
                </div>
                <div className="grid gap-4 md:grid-cols-3 grid-cols-1">
                    {displayedItems.map((item, index) => (
                        <HomeHorizontItem key={index} {...item} />
                    ))}
                </div>
                <div className="hidden md:flex right-btn absolute right-0 top-0 translate-x-8 items-center transition-all">
                    <button className="w-8 py-3 bg-gray-200 rounded-md rounded-br-none" onClick={nextItems}>
                        &gt;
                    </button>
                </div>
                <div className="right-btn absolute right-0 top-0 bottom-0 translate-x-8 flex md:hidden items-center transition-all">
                    <button className="w-8 py-3 bg-gray-200 rounded-md rounded-br-none" onClick={nextItems}>
                        &gt;
                    </button>
                </div>
            </div>
        </div>
    );
}
