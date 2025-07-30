import { APP_LOGO, footerEmployerLinks, footerJobSeerkerLinks } from "../utils/constants"

const Footer = () => {
    return (
        <footer className="bg-[#121828] min-h-[350px] px-[5%] md:px-[15%] py-8">
            <div className="flex flex-col md:flex-row items-start justify-between">
                {/*Left Section */}
                <div className="w-full md:w-[50%]">
                    <img src={APP_LOGO} alt="logo" className="h-12 mb-4" />
                    <p className="text-white text-md mb-4 leading-relaxed w-full md:w-[70%]">The leading job portal connecting talented professionals with top companies across the United States. Find your dream job or hire the perfect candidate today.</p>
                </div>
                {/*Right Section */}
                <div className="flex flex-col md:flex-row justify-around  w-full md:w-[50%]">
                    {/*For JobSeekers */}
                    <ul className="flex flex-col gap-y-2 my-6">
                        <h5 className="font-semibold text-white text-lg">For JobSeekers</h5>
                        {footerJobSeerkerLinks.map((eachLink) => (
                            <li className="text-white/70 cursor-pointer">{eachLink.name}</li>
                        ))}
                    </ul>
                    {/*For Employers */}
                    <ul className="flex flex-col gap-y-2">
                        <h5 className="font-semibold text-white text-lg">For Employers</h5>
                        {footerEmployerLinks.map((eachLink) => (
                            <li className="text-white/70 cursor-pointer">{eachLink.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <hr className="border-t border-white/50 border-opacity-20 w-full my-6" />
            <div className="flex flex-col md:flex-row items-center justify-between gap-y-4">
                {/*Bottom Left Section */}
                <h4 className="text-white/80">© 2024 Jobs 'N' Profiles. All rights reserved.</h4>
                {/*Bottom Right Section */}
                <div className="text-white/80 text-sm flex items-center gap-x-4">
                    <span>Privacy Policy</span>
                    <span>Terms of Service</span>
                    <span>Contact Us</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer