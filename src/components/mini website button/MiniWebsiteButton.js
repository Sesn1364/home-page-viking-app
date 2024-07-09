import { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';

const MiniWebsiteButton = () => {
    const { language } = useContext(LanguageContext);

    const buttonText = language === 'fa' ? 'ورود به مینی وبسایت viking' : 'Enter viking mini website';

    return (
        <button className="bg-gray-900 bg-opacity-50 shadow-2xl border border-black rounded-full py-2 px-5 text-white">
            <p>{buttonText}</p>
        </button>
    );
}

export default MiniWebsiteButton;
