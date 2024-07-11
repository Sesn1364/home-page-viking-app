// // // ../home page menu items/HomePageMenuItems

import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../../context/LanguageContext";

const HomePageMenuItems = () => {
    const [menuItems, setMenuItems] = useState([]);
    const [applyStyles, setApplyStyles] = useState(false); 
    const { language } = useContext(LanguageContext);

    useEffect(() => {
        const fetchMenuItems = async () => {
            try {
                const response = await axios.get('http://localhost:4000/home');
                setMenuItems(response.data["homeMenuItems"]);
                setTimeout(() => {
                    setApplyStyles(true);
                }, 2000);
            } catch (error) {
                console.error('Error fetching menu items:', error);
            }
        };

        fetchMenuItems();
    }, []);

    return (
        <div className="flex flex-wrap pt-6">
            {menuItems.map((item) => {
                return (
                    <div key={item.id} className="lg:w-4/12 sm:w-3/12 w-full flex justify-center items-center mb-4">
                        <button className="sm:w-24 w-full h-24 py-2 bg-gray-400 rounded-2xl text-center text-xs text-white bg-gray-300 bg-opacity-30 shadow-2xl">
                            <img
                                src={item.img}
                                alt=""
                                className={`w-12 h-12 mx-auto mb-2 ${applyStyles ? "apply-styles" : ""}`}
                                style={{
                                    transition: "all 0.5s ease",
                                    ...(applyStyles ? {
                                        color: 'transparent',
                                        filter: 'brightness(0) saturate(100%) invert(100%) sepia(0%) hue-rotate(0deg)',
                                    } : {})
                                }}
                            />
                            <p>{item[`title_${language}`]}</p>
                        </button>
                    </div>
                );
            })}
        </div>
    );
};

export default HomePageMenuItems;
