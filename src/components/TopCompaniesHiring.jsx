import { Link } from "react-router-dom"
import { topCompaniesHirings } from "../utils/constants"
import Headline from "./Headline"
import HiringCompanyItem from "./HiringCompanyItem"
import Title from "./Title"
import { IoIosArrowRoundForward } from "react-icons/io";
const TopCompaniesHiring = () => {
    return (
        <section className="min-h-[400px] py-12 gap-y-4 px-[15%] flex flex-col items-center">
            <Title title="Top Companies Hiring" />
            <Headline headline="Join thousands of professionals at leading companies" />
            {/*Companies Container */}
            <ul className="w-full flex gap-y-6 items-center flex-wrap gap-x-6 my-8">
                {
                    topCompaniesHirings.map((eachCompany) => (
                        <HiringCompanyItem companyInfo={eachCompany} key={eachCompany.id} />
                    ))
                }
            </ul>
            <Link className="text-[#ea590c] font-semibold text-md flex items-center gap-x-1.5">
                <span>View all Companies</span>
                <IoIosArrowRoundForward className="text-2xl"/>
            </Link>
        </section>
    )
}

export default TopCompaniesHiring