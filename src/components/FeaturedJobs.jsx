import Headline from "./Headline"
import Title from "./Title"
import { featuredJobsList } from '../utils/constants'
import FeatureJobItem from "./FeatureJobItem"
import Button from "./Button"

const FeaturedJobs = () => {
    return (
        <section className="bg-[#f8fbfc] min-h-[400px] py-12 gap-y-4 px-[15%] flex flex-col items-center">
            <Title title='Featured Jobs' />
            <Headline headline="Discover the latest opportunities from top companies" />
            {/*Feature Jobs Container */}
            <ul className="my-8 flex md:flex-row flex-col items-center md:justify-center flex-wrap gap-6">
                {/*Feature Job Item */}

                {
                    featuredJobsList.map((eachItem) => (
                        <FeatureJobItem jobInfo={eachItem} key={eachItem.id}/>
                    ))
                }
            </ul>
            <Button buttonText={"View All Jobs"} width={'100%'}/>
        </section>
    )
}

export default FeaturedJobs