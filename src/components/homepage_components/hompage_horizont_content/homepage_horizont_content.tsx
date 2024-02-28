'use client';
import React, { useState } from 'react';
import HomeHorizontItem from './homepage_horizont_content_item';

export default function HomeHorizontContent() {
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

    const prevItems = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevIndex) => prevIndex - 1);
        }
    };

    // Lấy ra phần của mảng items sẽ được hiển thị dựa trên chỉ số currentIndex
    const displayedItems = items.slice(currentIndex, currentIndex + 3);
    return (
        <div className="w-full h-30 text-center mt-3 gap-4 overflow-y-auto relative">
            <div className="absolute left-8 top-0 bottom-0 flex items-center">
                <button className="px-3 py-1 bg-blue-200 rounded-md" onClick={prevItems}>
                    &lt;
                </button>
            </div>
            <div className="flex flex-row justify-center gap-4 overflow-y-auto">
                {displayedItems.map((item, index) => (
                    <HomeHorizontItem key={index} {...item} />
                ))}
            </div>
            <div className="absolute right-8 top-0 bottom-0 flex items-center">
                <button className="px-3 py-1 bg-blue-200 rounded-md" onClick={nextItems}>
                    &gt;
                </button>
            </div>
        </div>
    );
}
