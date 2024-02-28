import Image from 'next/image';
export default function HomePageMainOthesItem() {
    return (
        <div className="w-1/2 rounded-lg bg-red-600 shadow">
            <div className="w-full flex flex-col justify-center p-6 rounded-lg">
                <div className="w-full flex justify-center">
                    <Image src="/social_img1.jpg" alt="Ảnh item" width={385} height={250} />
                </div>
                <div className="w-[66px] h-[22px] bg-blue-400 text-center items-center ml-6">
                    <p className="upercase text-xs text-center">FASHION</p>
                </div>
            </div>
        </div>
    );
}
