import { HERO_BANNER_IMAGE, keymetrics, popularSearches } from "../utils/constants"
import { CiSearch } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";

import Button from "../components/Button";
import MetricItem from "./MetricItem";

const Hero = () => {
    return (
        <div className="relative min-h-[500px] bg-cover bg-center flex flex-col items-center justify-center"
            style={{ backgroundImage: `url(${HERO_BANNER_IMAGE})` }}>

            <div className="absolute inset-0 bg-gradient-to-br from-orange-800 to-yellow-900 opacity-60 z-0"></div>

            <div className="relative z-10  flex flex-col items-center">
                <h1 className="font-semibold text-white text-6xl z-[10]">Find Your Dream Job</h1>
                <p className=" text-white text-xl mt-4 w-[80%] text-center">Connect with top companies and discover opportunities that match your skills and aspirations</p>
                <div className="bg-white w-[90%] my-6 rounded-md  p-6" >
                    <div className="flex items-center gap-x-4 mb-2">
                        <div className="border border-gray-500 w-[38%] py-1.5 px-2 rounded-sm flex items-center gap-x-2">
                            <CiSearch className="text-gray-600" />
                            <input type="text" placeholder="Search for jobs, keywords, companies" className="text-sm h-8 text-black border-none outline-none grow" />
                        </div>
                        <div className="border border-gray-500 w-[38%] py-1.5 px-2 rounded-sm flex items-center gap-x-2">
                            <CiLocationOn className="text-gray-600" />
                            <input type="text" placeholder="City, state or remote" className="text-sm h-8 text-black border-none outline-none grow" />
                        </div>
                        <Button buttonText="Search Jobs" width='23%' />
                    </div>
                    <p className="text-[14px]">Popular Searches: {
                        popularSearches.map((eachSearch) => (
                            <span key={eachSearch.id} className="mr-1.5 hover:cursor-pointer text-[#ea590c]">{eachSearch.search} </span>
                        ))
                    }</p>
                </div>

                {/*Metrics */}
                <ul className="flex gap-x-8">

                    {
                        keymetrics.map((eachMetric)=>(
                            <MetricItem key={eachMetric.id} label={eachMetric.label} value={eachMetric.value} iconName={eachMetric.iconName}/>
                        ))
                    }
                </ul>
            </div>


        </div>
    )
}

export default Hero