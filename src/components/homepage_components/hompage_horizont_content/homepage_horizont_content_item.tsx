import Image from 'next/image';
import Link from 'next/link';
export default function HomeHorizontItem({ imageUrl, title, description, name, date }: any) {
    return (
        <div className="w-[400px] h-[458px] bg-white shadow-md rounded-lg flex flex-col">
            <Image
                src={imageUrl} // Đường dẫn đến hình ảnh
                alt="Mô tả hình ảnh" // Mô tả hình ảnh
                width={400} // Chiều rộng
                height={280} // Chiều cao
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
