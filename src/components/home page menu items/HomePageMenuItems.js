// ../home page menu items/HomePageMenuItems

import axios from "axios";
import { useEffect, useState } from "react";

const HomePageMenuItems = () => {
    const [menuItems, setMenuItems] = useState([]); 

    useEffect(() => {
        const fetchMenuItems = async () => {
          try {
            const response = await axios.get('http://localhost:4000/home');
            setMenuItems(response.data["homeMenuItems"]);
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
                        <img src={item.img} alt="" className="w-12 h-12 mx-auto mb-2"/>
                        <p>{item.title}</p>
                    </button>
                </div>
            );
        })}
       </div>
    );
}

export default HomePageMenuItems;

