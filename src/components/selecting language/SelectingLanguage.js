// ../../components/selecting language/SelectingLanguage
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { LanguageContext } from '../../context/LanguageContext';

const SelectingLanguage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("");
    const [options, setOptions] = useState([]);
    const { changeLanguage } = useContext(LanguageContext);

    useEffect(() => {
        axios.get('http://localhost:4000/home')
            .then(response => {
                const languageOptions = response.data.selectingLanguageItem;
                setOptions(languageOptions);
                if (languageOptions.length > 0) {
                    setSelectedOption(languageOptions[0].label); 
                }
            })
            .catch(error => {
                console.error('Error fetching language options:', error);
            });
    }, []);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const selectOption = (optionLabel) => {
        setSelectedOption(optionLabel);
        if (optionLabel === "فارسی (IR)") {
            changeLanguage('fa');
        } else if (optionLabel === "English (US)") {
            changeLanguage('en');
        }
        setIsOpen(false); 
    };

    return (
        <div className="relative w-11/12 mr-4">
            <button
                onClick={toggleDropdown}
                className="w-full px-4 py-1 rounded-full bg-[#44403c] bg-opacity-90 "
            >
                <div className="flex items-center justify-center h-14 text-white">
                    {options.map(option => 
                        selectedOption === option.label && (
                            <img
                                key={option.id}
                                src={option.img}
                                alt=""
                                className="w-8 ml-2"
                            />
                        )
                    )}
                    <span>{selectedOption}</span>
                </div>
                {isOpen && (
                <div className="bg-gray-400 rounded-full inline-block py-1">
                    {options.map(option => (
                        option.label !== selectedOption && (
                            <div
                                key={option.id}
                                onClick={() => selectOption(option.label)}
                                className="flex items-center justify-center px-6 cursor-pointer h-8 text-white"
                            >
                                <img
                                    src={option.img}
                                    alt=""
                                    className="w-4 ml-2"
                                />
                                <span>{option.label}</span>
                            </div>
                        )
                    ))}
                </div>
                )}
            </button>
        </div>
    );
};

export default SelectingLanguage;
