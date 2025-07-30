import { BsSuitcaseLg } from "react-icons/bs";
import { LuUser } from "react-icons/lu";
import { HiOutlineBuildingOffice } from "react-icons/hi2";

const MetricItem = ({ label, value, iconName }) => {
    return (
        <li className="flex gap-x-3 items-center text-white text-lg">
            {iconName === "suitcase" ? <BsSuitcaseLg /> : iconName === "user" ? <LuUser /> : <HiOutlineBuildingOffice />}
            <p className="text-md">{value}</p>
            <p className="text-md">{label}</p>
        </li>
    )
}

export default MetricItem