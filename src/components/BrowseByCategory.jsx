import { CategoryList } from "../utils/constants"
import CategoryItem from "./CategoryItem"
import Headline from "./Headline"
import Title from "./Title"

const BrowseByCategory = () => {
    return (
        <section className="bg-amber-50 min-h-[400px] py-12  gap-y-4 px-[15%] flex flex-col items-center">
            <Title title="Browse by Category" />
            <Headline headline="Browse by Category" />
            {/* All Categories Container */}
            <ul className="my-8 flex md:flex-row flex-col items-center md:justify-center flex-wrap gap-6">
                {
                    CategoryList.map((eachCategory) => (
                        <CategoryItem categoryInfo={eachCategory} key={eachCategory.id} />
                    ))
                }
            </ul>
        </section>
    )
}

export default BrowseByCategory