import HomeSuggest from '@/components/homepage_components/homepage_suggest/homepage_suggest';
import HomeSuggeestItem from '@/components/homepage_components/homepage_suggest/homepage_suggest_item';
import Image from 'next/image';
import HomepageSocial from '@/components/homepage_components/homepage_social/homepage_social';
import HomeSocialItem from '@/components/homepage_components/homepage_social/homepage_social_item';

export default function Home() {
    return (
        <main className="mb-16 px-8">
            <div className="grid grid-cols-4 gap-8">
                <div className="col-span-3 bg-slate-300">
                    <div className="w-full h-[600px] bg-pink-300"></div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="col-span-1 bg-green-300 p-4 rounded-lg">
                            <div className="w-full h-[200px] bg-yellow-400"></div>
                            <div className="bg-blue-400 text-white text-sm mt-4 w-fit p-1">NATURE</div>
                            <h3 className="text-lg font-semibold w-full mt-4">Minh dep trai vai lon ba con oi</h3>
                            <div className="mt-4 pb-5 border-b">
                                <span className=" font-semibold text-sm">tac gia</span>{' '}
                                <span className="text-gray-400">- Minh dep trai</span>
                            </div>
                            <p className="mt-4">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industrys standard dummy text ever since the 1500s, …
                            </p>
                            <button className="mt-4 bg-black text-white p-2">READ MORE</button>
                        </div>
                        <div className="col-span-1 bg-green-300 p-4 rounded-lg">
                            <div className="w-full h-[200px] bg-yellow-400"></div>
                            <div className="bg-blue-400 text-white text-sm mt-4 w-fit p-1">NATURE</div>
                            <h3 className="text-lg font-semibold w-full mt-4">Minh dep trai vai lon ba con oi</h3>
                            <div className="mt-4 pb-5 border-b">
                                <span className=" font-semibold text-sm">tac gia</span>{' '}
                                <span className="text-gray-400">- Minh dep trai</span>
                            </div>
                            <p className="mt-4">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industrys standard dummy text ever since the 1500s, …
                            </p>
                            <button className="mt-4 bg-black text-white p-2">READ MORE</button>
                        </div>
                        <div className="col-span-1 bg-green-300 p-4 rounded-lg">
                            <div className="w-full h-[200px] bg-yellow-400"></div>
                            <div className="bg-blue-400 text-white text-sm mt-4 w-fit p-1">NATURE</div>
                            <h3 className="text-lg font-semibold w-full mt-4">Minh dep trai vai lon ba con oi</h3>
                            <div className="mt-4 pb-5 border-b">
                                <span className=" font-semibold text-sm">tac gia</span>{' '}
                                <span className="text-gray-400">- Minh dep trai</span>
                            </div>
                            <p className="mt-4">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industrys standard dummy text ever since the 1500s, …
                            </p>
                            <button className="mt-4 bg-black text-white p-2">READ MORE</button>
                        </div>
                        <div className="col-span-1 bg-green-300 p-4 rounded-lg">
                            <div className="w-full h-[200px] bg-yellow-400"></div>
                            <div className="bg-blue-400 text-white text-sm mt-4 w-fit p-1">NATURE</div>
                            <h3 className="text-lg font-semibold w-full mt-4">Minh dep trai vai lon ba con oi</h3>
                            <div className="mt-4 pb-5 border-b">
                                <span className=" font-semibold text-sm">tac gia</span>{' '}
                                <span className="text-gray-400">- Minh dep trai</span>
                            </div>
                            <p className="mt-4">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industrys standard dummy text ever since the 1500s, …
                            </p>
                            <button className="mt-4 bg-black text-white p-2">READ MORE</button>
                        </div>
                        <div className="col-span-1 bg-green-300 p-4 rounded-lg">
                            <div className="w-full h-[200px] bg-yellow-400"></div>
                            <div className="bg-blue-400 text-white text-sm mt-4 w-fit p-1">NATURE</div>
                            <h3 className="text-lg font-semibold w-full mt-4">Minh dep trai vai lon ba con oi</h3>
                            <div className="mt-4 pb-5 border-b">
                                <span className=" font-semibold text-sm">tac gia</span>{' '}
                                <span className="text-gray-400">- Minh dep trai</span>
                            </div>
                            <p className="mt-4">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industrys standard dummy text ever since the 1500s, …
                            </p>
                            <button className="mt-4 bg-black text-white p-2">READ MORE</button>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 bg-purple-300"></div>
            </div>
        </main>
    );
}
