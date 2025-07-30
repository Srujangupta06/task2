import { IoIosInfinite } from "react-icons/io"
import { FaLinkedin, FaLinkedinIn } from "react-icons/fa";
import { IoMdRocket } from "react-icons/io";
import { MdOutlineStarBorder, MdStarBorder } from "react-icons/md";
const PremiumFeatureItem = ({ headline, description, iconName }) => {
    return (
        <li className="border-[0.5px] border-[#edc6ab]  bg-white w-[24%] flex flex-col items-center p-4 gap-y-4 rounded-lg hover:shadow-md hover:cursor-pointer h-[200px]">
            <div className="bg-[#ffedd4] w-fit p-2 rounded-md">
                {iconName === "infinity" ? <IoIosInfinite className="text-[#e87f3a] text-2xl" /> : iconName === "star" ? <MdStarBorder className="text-[#e87f3a] text-2xl"/> : iconName === "rocket" ? < IoMdRocket className="text-[#e87f3a] text-2xl"/> : <FaLinkedin className="text-[#e87f3a] text-2xl"/>}
            </div>
            <h3 className="font-semibold">{headline}</h3>
            <p className="text-center text-gray-500 text-sm">{description}</p>
        </li>
    )
}

export default PremiumFeatureItem