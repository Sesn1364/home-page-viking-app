// "../../components/home page menu/HomePageMenu"

import HomePageMenuHeader from "../home page menu header/HomePageMenuHeader"
import HomePageMenuItems from "../home page menu items/HomePageMenuItems"

const HomePageMenu = () => {
    return (
        <div className="py-2 px-4 bg-gray-800 bg-opacity-90 shadow-2xl rounded-3xl z-50">
            <HomePageMenuHeader/>
            <HomePageMenuItems/>
        </div>
    )
}
export default HomePageMenu