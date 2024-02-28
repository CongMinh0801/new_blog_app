import HeaderSection1 from './header_section1/header_section1';
import HeaderSection2 from './header_section2/header_section2';
import HeaderSection3 from './header_section3/header_section3';

export default function Header() {
    return (
        <div className="bg-[url('/background.jpg')] bg-cover">
            <div className="px-8">
                <HeaderSection1 />
                <HeaderSection2 />
                <HeaderSection3 />
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
                <path
                    fill="#fff"
                    fillOpacity="1"
                    d="M0,32L60,48C120,64,240,96,360,112C480,128,600,128,720,106.7C840,85,960,43,1080,32C1200,21,1320,43,1380,53.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
                ></path>
            </svg>
        </div>
    );
}
