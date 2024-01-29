import HomeSocialItem from './homepage_social_item';

export default function HomepageSocial() {
    const items = [
        {
            img: '/social_img1.jpg',
            link: '/',
            description: 'tao là duy đẹp trai đây mày làm sao mày nhìn cái cho j',
            hashtag: 'HEALTH',
        },
        {
            img: '/social_img1.jpg',
            link: '/',
            description: 'tao là duy đẹp trai đây mày làm sao mày nhìn cái cho j',
            hashtag: 'HEALTH',
        },
        {
            img: '/social_img1.jpg',
            link: '/',
            description: 'tao là duy đẹp trai đây mày làm sao mày nhìn cái cho j',
            hashtag: 'HEALTH',
        },
        {
            img: '/social_img1.jpg',
            link: '/',
            description: 'tao là duy đẹp trai đây mày làm sao mày nhìn cái cho j',
            hashtag: 'HEALTH',
        },
        {
            img: '/social_img1.jpg',
            link: '/',
            description: 'tao là duy đẹp trai đây mày làm sao mày nhìn cái cho j',
            hashtag: 'HEALTH',
        },
        {
            img: '/social_img1.jpg',
            link: '/',
            description: 'tao là duy đẹp trai đây mày làm sao mày nhìn cái cho j',
            hashtag: 'HEALTH',
        },
        {
            img: '/social_img1.jpg',
            link: '/',
            description: 'tao là duy đẹp trai đây mày làm sao mày nhìn cái cho j',
            hashtag: 'HEALTH',
        },
        {
            img: '/social_img1.jpg',
            link: '/',
            description: 'tao là duy đẹp trai đây mày làm sao mày nhìn cái cho j',
            hashtag: 'HEALTH',
        },
        {
            img: '/social_img1.jpg',
            link: '/',
            description: 'tao là duy đẹp trai đây mày làm sao mày nhìn cái cho j',
            hashtag: 'HEALTH',
        },
        {
            img: '/social_img1.jpg',
            link: '/',
            description: 'tao là duy đẹp trai đây mày làm sao mày nhìn cái cho j',
            hashtag: 'HEALTH',
        },
        {
            img: '/social_img1.jpg',
            link: '/',
            description: 'tao là duy đẹp trai đây mày làm sao mày nhìn cái cho j',
            hashtag: 'HEALTH',
        },
        {
            img: '/social_img1.jpg',
            link: '/',
            description: 'tao là duy đẹp trai đây mày làm sao mày nhìn cái cho j',
            hashtag: 'HEALTH',
        },
    ];

    return (
        <div className="w-full h-30 text-center mt-3">
            <div className="pb-5 flex justify-center">
                Follow Us On <p className="text-blue-500 ml-1">Instagram</p>
            </div>
            <div
                className="bottom-0 left-0 w-full h-0.5"
                style={{ background: 'radial-gradient(circle, #000, transparent)' }}
            ></div>

            <div className="mt-4 flex flex-wrap justify-center">
                {items.map((item, index) => (
                    <div className="mb-6" key={index} style={{ flex: '0 0 16.666%' }}>
                        <HomeSocialItem img={item.img} link={item.link} hashtag={item.hashtag} />
                    </div>
                ))}
            </div>
        </div>
    );
}
