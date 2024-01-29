export default function Footer() {
    return (
        <footer className="bg-black text-white h-16 flex items-center justify-between px-4">
            <div>
                <p>Created By Duy</p>
            </div>
            <div className="flex space-x-4">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact Us</a>
            </div>
        </footer>
    );
}
