
const HiringCompanyItem = ({companyInfo}) => {
    const {noOfOpenings,name,companyLogoUrl} = companyInfo
  return (
    <li className="min-h-[240px] border-[0.5px] border-[#f5efe5] w-full md:w-[50%] lg:w-[14%] flex flex-col items-center gap-y-4 p-6 rounded-md hover:cursor-pointer hover:shadow-md">
        {/*Image */}
        <img src={companyLogoUrl} alt="" className="h-16 rounded-md"/>
        <h1 className="font-semibold text-lg text-center">{name}</h1>
        <p className="text-gray-600">{noOfOpenings} openings</p>
    </li>
  )
}

export default HiringCompanyItem