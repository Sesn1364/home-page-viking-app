// ./pages/home/Home

import MiniWebsiteButton from "../../components/mini website button/MiniWebsiteButton";
import Search from "../../components/search/Search";
import SelectingLanguage from "../../components/selecting language/SelectingLanguage";

const Home = () => {
    return (
        <div className="relative min-h-screen pt-6">
            <div className="absolute inset-0 bg-[url('https://menew.s3.ir-thr-at1.arvanstorage.ir/100094/settings/139796/conversions/viking-normal.png')] bg-cover bg-center bg-fixed filter blur-sm"></div>
            <div className="fixed top-6 left-0 right-0 flex">
                <SelectingLanguage/>
                <Search/>
            </div>
            <div className="fixed inset-x-0 top-32 z-10 mx-auto w-fit max-w-[70%]">
                <MiniWebsiteButton/>
            </div>
            <div className="fixed inset-x-0 top-48 z-10 mx-auto w-fit max-w-[70%]">
                <img src="https://viking.menew.ir/_next/image?url=https%3A%2F%2Fmenew.s3.ir-thr-at1.arvanstorage.ir%2F100094%2Fsettings%2F107314%2Fconversions%2Fviking-normal.png&w=256&q=75" alt="" />
            </div>
            <div className="h-screen"></div>
            <div className="h-screen"></div>
            <div className="h-screen"></div>
        </div>
    );
}

export default Home;
