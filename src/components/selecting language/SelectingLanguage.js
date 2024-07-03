// ../../components/selecting language/SelectingLanguage

import { useState } from 'react';

const SelectingLanguage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("فارسی (IR)");

    const options = [
        {
            label: "فارسی (IR)",
            imgSrc: "https://viking.menew.ir/icons/country-flags/rounded-rectangular/iran--4692.svg"
        },
        {
            label: "English (US)",
            imgSrc: "https://viking.menew.ir/icons/country-flags/rounded-rectangular/united-states--4915.svg"
        }
    ];

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const selectOption = (option) => {
        setSelectedOption(option);
        setIsOpen(false); // Close the dropdown after selecting an option
    };

    return (
        <div className="relative w-11/12 mr-4">
            <button
                onClick={toggleDropdown}
                className=" w-full px-4 py-1 bg-white rounded-full"
            >
                <div className={`flex items-center justify-center h-14`}>
                    {selectedOption === "فارسی (IR)" && (
                        <img
                            src="https://viking.menew.ir/icons/country-flags/rounded-rectangular/iran--4692.svg"
                            alt=""
                            className="w-8 ml-2"
                        />
                    )}
                    {selectedOption === "English (US)" && (
                        <img
                            src="https://viking.menew.ir/icons/country-flags/rounded-rectangular/united-states--4915.svg"
                            alt=""
                            className="w-8 ml-2"
                        />
                    )}
                    <span>{selectedOption}</span>
                </div>
                {isOpen && (
                <div className=" bg-red-300 rounded-full inline-block py-1">
                {options.map((option, index) => (
                    option.label !== selectedOption && (
                        <div
                            key={index}
                            onClick={() => selectOption(option.label)}
                            className="flex items-center justify-center px-6 cursor-pointer h-8"
                        >
                            <img
                                src={option.imgSrc}
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
