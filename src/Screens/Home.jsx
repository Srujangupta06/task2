import FeaturedJobs from "../components/FeaturedJobs"
import Header from "../components/Header"
import Hero from "../components/Hero"
import PremiumFeatures from "../components/PremiumFeatures"

const Home = () => {
    return (
        <>
            {/*Hero Section */}
            <Hero />
            {/*Premium Features Section */}
            <PremiumFeatures />
            {/* Featured Jobs */}
            <FeaturedJobs/>
        </>
    )
}

export default Home