import Headline from "./Headline"
import Title from "./Title"

const CallToAction = () => {
    return (
        <section className="min-h-[200px] py-12  px-[15%] bg-[#ea590c] flex flex-col items-center gap-y-4">
            <Title title="Ready to Find Your Next Opportunity?" color={'white'}/>
            <Headline headline="Join millions of professionals who trust Jobs 'N' Profiles" color={'white'}/>
            <div className="flex items-center gap-x-4 my-4">
                <button className="bg-white text-[#ea590c] px-6 py-1.5 text-lg rounded-sm font-semibold hover:cursor-pointer">Create Profile</button>
                <button className="bg-transparent border border-white text-white px-6 py-1.5 text-lg rounded-sm font-semibold hover:cursor-pointer">Post a Job</button>
            </div>
        </section>
    )
}

export default CallToAction