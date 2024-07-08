// // "../home page menu header/HomePageMenuHeader"

import React, { useState, useEffect } from 'react';
import { GoArrowLeft } from 'react-icons/go';

const HomePageMenuHeader = () => {
    const [showInitialContent, setShowInitialContent] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowInitialContent(false);
        }, 4000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {showInitialContent ? (
                <div className='w-full bg-gray-700 rounded-full flex justify-center items-center relative'>
                    <div className="h-14 bg-gradient-to-r from-black via-white to-black animate-enlarge-reduce rounded-full child flex justify-center items-center">
                        <div className="w-[99%] bg-gray-500 rounded-full absolute top-1 text-center text-white">
                            <p>کمی صبر,و سپس انتخاب کنید</p>
                            <p>در حین بارگذاری میتوانید دسته بندی ها رو مرور کنید</p>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex justify-between items-center w-full text-white text-2xl">
                    <p>گزینش میان <b>دسته بندی ها</b></p>
                    <p>یا</p>
                    <button className="bg-gray-500 rounded-full flex justify-around items-center max-w-40 font-bold">
                        <p className="w-2/3">شروع به گشت و گذار</p>
                        <GoArrowLeft />
                    </button>
                </div>
            )}
        </>
    );
}

export default HomePageMenuHeader;
