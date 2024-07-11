// "../../components/home page menu/HomePageMenu"

import HomePageMenuHeader from "../home page menu header/HomePageMenuHeader"
import HomePageMenuItems from "../home page menu items/HomePageMenuItems"

const HomePageMenu = () => {
    return (
        <div className="py-2 px-4 rounded-3xl bg-white/10 backdrop-blur-[20px]">
            <HomePageMenuHeader/>
            <HomePageMenuItems/>
        </div>
    )
}
export default HomePageMenu