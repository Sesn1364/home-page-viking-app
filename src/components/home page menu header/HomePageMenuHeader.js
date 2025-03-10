import React, { useState, useEffect, useContext } from 'react';
import { GoArrowLeft } from 'react-icons/go';
import { LanguageContext } from '../../context/LanguageContext';
import { useNavigate } from 'react-router-dom'; // اضافه کردن useNavigate

const HomePageMenuHeader = () => {
    const [showInitialContent, setShowInitialContent] = useState(true);
    const { language } = useContext(LanguageContext);
    const navigate = useNavigate(); // مقداردهی useNavigate

    const firstText = language === 'fa' ? 'کمی صبر,وسپس انتخاب کنید' : 'Wait a little, and then choose';
    const secondText = language === 'fa' ? 'در حین بارگذاری میتوانید دسته بندی ها را مرور کنید' : 'You can browse the categories while loading';
    const thirdText = language === 'fa' ? 'گزینش میان ' : 'Choose between ';
    const boldText = language === 'fa' ? 'دسته بندی ها' : 'categories';
    const fourthText = language === 'fa' ? 'یا' : 'Or';
    const sixthText = language === 'fa' ? 'شروع به گشت و گذار' : 'Start surfing';

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
                    <div className="sm:h-14 h-8 bg-gradient-to-r from-white via-black via-white via-black to-white animate-enlarge-reduce rounded-full flex justify-center items-center">
                        <div className="w-[99%] bg-[#44403c] rounded-full absolute top-1 text-center text-white">
                            <p className='sm:block hidden'>{firstText}</p>
                            <p>{secondText}</p>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="sm:flex justify-between items-center text-white text-2xl">
                    <p className='text-center'>{thirdText}<b>{boldText}</b></p>
                    <p className='text-center'>{fourthText}</p>
                    <button 
                        className="bg-gray-500 rounded-full flex justify-around items-center sm:max-w-40 font-bold w-full"
                        onClick={() => navigate('/menu')} // افزودن این بخش برای هدایت به صفحه Menu
                    >
                        <p className="w-2/3">{sixthText}</p>
                        <GoArrowLeft />
                    </button>
                </div>
            )}
        </>
    );
}

export default HomePageMenuHeader;
