import { IoIosInfinite } from "react-icons/io"
import { FaLinkedin } from "react-icons/fa";
import { IoMdRocket } from "react-icons/io";
import {  MdStarBorder } from "react-icons/md";
const PremiumFeatureItem = ({ headline, description, iconName }) => {
    return (
        <li className="w-full sm:w-[48%] md:w-[31%]  flex flex-col items-center p-4 gap-y-4 my-4 bg-white border-[0.5px] border-[#edc6ab] rounded-lg min-h-[200px] hover:shadow-md hover:cursor-pointer transition-shadow">
            <div className="bg-[#ffedd4] p-2 rounded-md">
                {iconName === "infinity" ? (
                    <IoIosInfinite className="text-[#e87f3a] text-2xl" />
                ) : iconName === "star" ? (
                    <MdStarBorder className="text-[#e87f3a] text-2xl" />
                ) : iconName === "rocket" ? (
                    <IoMdRocket className="text-[#e87f3a] text-2xl" />
                ) : (
                    <FaLinkedin className="text-[#e87f3a] text-2xl" />
                )}
            </div>
            <h3 className="font-semibold text-base text-center">{headline}</h3>
            <p className="text-center text-gray-500 text-sm">{description}</p>
        </li>

    )
}

export default PremiumFeatureItem