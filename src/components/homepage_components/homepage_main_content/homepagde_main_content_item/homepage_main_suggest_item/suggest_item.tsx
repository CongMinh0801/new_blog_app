import Image from 'next/image';
import Link from 'next/link';
export default function HomePageMainSuggestItem({ imageUrl, title, description, name, date }: any) {
    return (
        <div className="w-full justify-center">
            <div className="w-full flex justify-center mb-4">
                <p className="w-1/2 text-3xl font-bold text-center break-words mx-10 mt-10">helllllllllllllllllllo</p>
            </div>

            <div className=" ư-full flex justify-center text-sm">
                <p className="font-bold mr-1">duy</p>
                <p className="mr-1">-</p>
                <p>28/02/2024</p>
            </div>
            <div className="w-full flex justify-center mb-4">
                <Image
                    src="/sg_img1.jpg" // Đường dẫn đến hình ảnh
                    alt="Mô tả hình ảnh" // Mô tả hình ảnh
                    width={890} // Chiều rộng
                    height={350} // Chiều cao
                />
            </div>

            <div className="w-full flex justify-center mb-4">
                <p className="w-1/2 text-center break-words">
                    I am Minh Deptrai, Blogger from London, United Kingdom. I share my adventures from around the world,
                    as well as travel tips, guides, photos, videos, and much more.
                </p>
            </div>
            <div className="w-full flex justify-center">
                <button className="px-4 py-2 rounded bg-blue-500 hover:bg-blue-400">
                    <Link href="/readmore   ">Read more</Link>
                </button>
            </div>
        </div>
    );
}
