import Image from 'next/image';
import Link from 'next/link';

export default function HeaderSection3() {
    return (
        <>
            <div className="w-full text-white py-10">
                <h1 className="w-full text-center font-bold text-2xl mb-4">Welcome To MyBlog</h1>
                <div className="w-full flex justify-center mb-4">
                    <Image src="/user.png" alt="Ảnh đại diện chủ blog" width={120} height={120} />
                </div>
                <div className="w-full flex justify-center mb-4">
                    <p className="w-1/2 text-center">
                        I am Minh Deptrai, Blogger from London, United Kingdom. I share my adventures from around the
                        world, as well as travel tips, guides, photos, videos, and much more.
                    </p>
                </div>
                <div className="w-full flex justify-center">
                    <button className="px-4 py-2 rounded bg-blue-500 hover:bg-blue-400">
                        <Link href="/about">About me</Link>
                    </button>
                </div>
            </div>
        </>
    );
}
