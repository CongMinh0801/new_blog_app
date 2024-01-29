import Image from 'next/image';
export default function HomeSuggeestItem({ imageUrl, description, name, date }: any) {
    return (
        <div className="w-[307px] h-[323px] bg-white shadow-md rounded-lg flex flex-col">
            <Image
                src={imageUrl} // Đường dẫn đến hình ảnh
                alt="Mô tả hình ảnh" // Mô tả hình ảnh
                width={307} // Chiều rộng
                height={230} // Chiều cao
            />
            <div className="m-4">
                <div className=" mb-5 flex h-[54px]">
                    <a href="" className="break-words uppercase flex text-center">
                        {description}
                    </a>
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
