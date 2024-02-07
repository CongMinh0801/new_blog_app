import Image from 'next/image';
import Link from 'next/link';
export default function HomeSocialItem({ img, link, hashtag }: any) {
    return (
        <div className="w-[220px] h-[195px] shadow-md rounded-lg relative">
            <Image src="/social_img1.jpg" alt="Mô tả hình ảnh" width={220} height={195} />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-30 bg-blue-500 flex items-center justify-center">
                <Link href="" className="text-white text-lg flex justify-center">
                    <p>#</p>
                    <p className="upercase">HEALTH</p>
                </Link>
            </div>
        </div>
    );
}
