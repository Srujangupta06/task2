import Headline from "./Headline"
import Title from "./Title"

const CallToAction = () => {
    return (
        <section className="min-h-[200px] py-12 px-[5%] md:px-[15%] bg-[#ea590c] flex flex-col items-center gap-y-4">
            <Title title="Ready to Find Your Next Opportunity?" color={'white'} />
            <Headline headline="Join millions of professionals who trust Jobs 'N' Profiles" color={'white'} />
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 my-4 w-full">
                <button className="bg-white text-nowrap text-[#ea590c] px-6 py-2 text-base rounded-sm font-semibold w-full md:w-[200px]">
                    Create Profile
                </button>
                <button className="text-nowrap bg-transparent border border-white text-white px-6 py-2 text-base rounded-sm font-semibold w-full md:w-[200px]">
                    Post a Job
                </button>
            </div>

        </section>
    )
}

export default CallToAction