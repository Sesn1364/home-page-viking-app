// ./pages/home/Home

import Search from "../../components/search/Search";
import SelectingLanguage from "../../components/selecting language/SelectingLanguage";

const Home = () => {
    return (
        <div className="relative min-h-screen pt-6">
            <div className="absolute inset-0 bg-[url('https://menew.s3.ir-thr-at1.arvanstorage.ir/100094/settings/139796/conversions/viking-normal.png')] bg-cover bg-center filter blur-sm"></div>
            <div className="relative flex">
                <SelectingLanguage/>
                <Search/>
            </div>
        </div>
    );
}

export default Home;
