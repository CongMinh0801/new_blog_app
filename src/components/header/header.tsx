import HeaderSection1 from './header_section1/header_section1';
import HeaderSection2 from './header_section2/header_section2';

export default function Header() {
    return (
        <div className="px-8 bg-[url('/background.jpg')] bg-cover">
            <HeaderSection1 />
            <HeaderSection2 />
        </div>
    );
}
