import { premiumFeatures } from "../utils/constants";
import Button from "./Button";
import Headline from "./Headline"
import PremiumFeatureItem from "./PremiumFeatureItem";
import Title from "./Title"

const PremiumFeatures = () => {
    return (
        <section className="bg-amber-50 min-h-[400px] py-12 flex flex-col items-center gap-y-4 px-[15%]">
            <Title title="Premium Features" />
            <Headline headline="Powerful tools to accelerate your job search and hiring process" />
            {/*Feature Cards */}
            <ul className="flex items-center justify-center w-full gap-x-20 my-8">
                {
                    premiumFeatures.map((eachFeature) => (
                        <PremiumFeatureItem headline={eachFeature.feature} description={eachFeature.description} iconName={eachFeature.iconName} key={eachFeature.id}/>
                    ))
                }
            </ul>
            <Button buttonText='Explore Premium Features' width="40%"/>
        </section>
    )
}

export default PremiumFeatures