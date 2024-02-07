import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-black text-white h-16 flex items-center justify-between px-4 text-sm">
            <div>
                <p>Created By Duy</p>
            </div>
            <div className="flex space-x-4 ">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact Us</Link>
            </div>
        </footer>
    );
}
