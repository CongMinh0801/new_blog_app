import HomeSuggeestItem from './homepage_suggest_item';

export default function HomeSuggest() {
    const items = [
        {
            imageUrl: '/sg_img1.jpg',
            description: 'tao là duy đẹp trai đây mày làm sao mày nhìn cái cho j',
            name: 'Duy Đẹp Trai',
            date: '27/01/2024',
        },
        {
            imageUrl: '/sg_img1.jpg',
            description: 'tao là duy đẹp trai đây mày làm sao mày nhìn cái cho j',
            name: 'Duy Đẹp Trai',
            date: '27/01/2024',
        },
        {
            imageUrl: '/sg_img1.jpg',
            description: 'tao là duy đẹp trai đây mày làm sao mày nhìn cái cho j',
            name: 'Duy Đẹp Trai',
            date: '27/01/2024',
        },
        {
            imageUrl: '/sg_img1.jpg',
            description: 'tao là duy đẹp trai đây mày làm sao mày nhìn cái cho j',
            name: 'Duy Đẹp Trai',
            date: '27/01/2024',
        },
    ];
    //Hiển thị tối đa 4 mục
    const displayedItems = items.slice(0, 4);
    return (
        <div className="w-full h-30 text-center mt-3  ">
            <div className="pb-5">Đề xuất</div>
            <div
                className=" bottom-0 left-0 w-full h-0.5 "
                style={{ background: 'radial-gradient(circle, #000, transparent)' }}
            ></div>
            <div className="flex justify-center space-x-4 mt-5">
                {displayedItems.map((item, index) => (
                    <HomeSuggeestItem key={index} {...item} />
                ))}
            </div>
        </div>
    );
}
