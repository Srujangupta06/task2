import Button from "./components/Button";
import Header from "./components/Header"
import { HERO_BANNER_IMAGE, keymetrics, popularSearches } from "./utils/constants"
import { CiSearch } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
function App() {
  return (
    <>
      <Header />
      {/*Hero Section */}
      <div className="relative h-[50vh] bg-cover bg-center flex flex-col items-center justify-center"
        style={{ backgroundImage: `url(${HERO_BANNER_IMAGE})` }}>

        <div className="absolute inset-0 bg-gradient-to-br from-orange-800 to-yellow-900 opacity-50 z-0"></div>


        <div className="relative z-10  flex flex-col items-center">
          <h1 className="font-semibold text-white text-5xl z-[10]">Find Your Dream Job</h1>
          <p className=" text-white text-2xl mt-4 w-[80%] text-center">Connect with top companies and discover opportunities that match your skills and aspirations</p>
          <div className="bg-white w-[80%] my-6 rounded-md  p-6" >
            <div className="flex items-center gap-x-4 mb-2">
              <div className="border border-gray-500 w-[36%] py-1.5 px-2 rounded-sm flex items-center gap-x-2">
                <CiSearch className="text-gray-600" />
                <input type="text" placeholder="Search for jobs, keywords, companies" className="text-black border-none outline-none grow" />
              </div>
              <div className="border border-gray-500 w-[36%] py-1.5 px-2 rounded-sm flex items-center gap-x-2">
                <CiLocationOn className="text-gray-600" />
                <input type="text" placeholder="City, state or remote" className="text-black border-none outline-none grow" />
              </div>
              <Button buttonText="Search Jobs" width='30%' />
            </div>
            <p className="text-[14px]">Popular Searches: {
              popularSearches.map((eachSearch) => (
                <span key={eachSearch.id} className="mr-1.5 hover:cursor-pointer text-[#ea590c]">{eachSearch.search} </span>
              ))
            }</p>
            {/*Key Metrics */}
            <ul>
              {keymetrics.map((eachMetric)=>(
                <li>
                  
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

    </>
  )
}

export default App

/**
 * 
 * 
 * 
 * 
 */