import { IoCodeOutline } from "react-icons/io5";
import { FaBriefcaseMedical } from "react-icons/fa";
import { CiDollar } from "react-icons/ci";
import { BsGraphUpArrow } from "react-icons/bs";
import { MdOutlinePalette } from "react-icons/md";
import { GoGear } from "react-icons/go";
import { LuBook } from "react-icons/lu";






const CategoryItem = ({ categoryInfo }) => {
    const { noOfJobs, name, iconName } = categoryInfo
    return (
        <li className="w-full sm:w-[48%] md:w-[50%] lg:w-[20%] flex flex-col items-center justify-center p-4 gap-y-4 my-4 bg-white border-[0.5px] border-[#edc6ab] rounded-lg min-h-[200px] hover:shadow-md hover:cursor-pointer transition-shadow">
            <div className="bg-[#ffedd4] p-2 rounded-md">
                {iconName === 'technology' ? <IoCodeOutline className="text-[#e87f3a] text-2xl"/> :
                    iconName === 'medical' ? <FaBriefcaseMedical className="text-[#e87f3a] text-2xl"/> :
                        iconName === 'finance' ? <CiDollar className="text-[#e87f3a] text-2xl"/> :
                            iconName === 'marketing' ? <BsGraphUpArrow className="text-[#e87f3a] text-2xl"/> :
                                iconName === 'design' ? <MdOutlinePalette className="text-[#e87f3a] text-2xl"/> :
                                    iconName === 'sales' ? <BsGraphUpArrow className="text-[#e87f3a] text-2xl"/> :
                                        iconName === 'education' ? <LuBook className="text-[#e87f3a] text-2xl"/> :
                                            <GoGear className="text-[#e87f3a] text-2xl"/>}
            </div>
            <h3 className="font-semibold text-base text-center">{name}</h3>
            <p className="text-center text-gray-500 text-sm">{noOfJobs}</p>
        </li>
    )
}

export default CategoryItem