import BrowseByCategory from "../components/BrowseByCategory"
import FeaturedJobs from "../components/FeaturedJobs"
import Header from "../components/Header"
import Hero from "../components/Hero"
import PremiumFeatures from "../components/PremiumFeatures"
import TopCompaniesHiring from "../components/TopCompaniesHiring"

const Home = () => {
    return (
        <>
            {/*Hero Section */}
            <Hero />
            {/*Premium Features Section */}
            <PremiumFeatures />
            {/* Featured Jobs Section*/}
            <FeaturedJobs/>
            {/*Companies Hirings Section */}
            <TopCompaniesHiring/>
            {/* Browse By Category Section*/}
            <BrowseByCategory/>
        </>
    )
}

export default Home