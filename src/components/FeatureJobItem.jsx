import { CiHeart } from "react-icons/ci";
import { CiDollar } from "react-icons/ci";
import { PiBriefcaseThin } from "react-icons/pi";
import { CiLocationOn } from "react-icons/ci";

const FeatureJobItem = ({ jobInfo }) => {
    const { companyLogoUrl, role, companyName, location, jobType, salaryRange, description } = jobInfo;

    return (
        <li className="bg-white border-[0.5px] border-gray-300 p-4 md:p-6 w-full md:w-[50%] lg:w-[32%] flex flex-col md:flex-row gap-4 rounded-md min-h-[250px] shadow-sm hover:shadow-md transition">
            {/*Left Section */}
            <img src={companyLogoUrl} alt={""} className="h-12 w-12 object-cover rounded-sm shrink-0" />

            {/*Right Section */}
            <div className="flex flex-col justify-between flex-grow text-gray-600">

                {/*Top Section */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-y-2">

                    {/*Top Left Section */}
                    <div>
                        <h3 className="font-semibold text-lg text-gray-900">{role}</h3>
                        <p className="text-sm text-gray-500">{companyName}</p>
                    </div>

                    {/*Top Right Section */}
                    <div className="flex flex-col sm:items-end gap-y-2">
                        <p className="text-sm text-gray-500">2 days ago</p>
                        <CiHeart className="text-xl cursor-pointer text-gray-500" />
                    </div>
                </div>

                {/*Middle Section */}
                <div className="flex flex-col sm:flex-row flex-wrap gap-3 mt-4 text-sm">
                    <div className="flex items-center gap-x-2">
                        <CiLocationOn className="text-lg" />
                        <p>{location}</p>
                    </div>
                    <div className="flex items-center gap-x-2">
                        <PiBriefcaseThin className="text-lg" />
                        <p>{jobType}</p>
                    </div>
                    <div className="flex items-center gap-x-2">
                        <CiDollar className="text-lg" />
                        <p>{salaryRange}</p>
                    </div>
                </div>

                {/*Bottom Section */}
                <p className="mt-4 line-clamp-2 text-sm">{description}</p>
            </div>
        </li>
    );
};

export default FeatureJobItem;
