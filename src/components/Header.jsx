import { APP_LOGO, navMenuList } from "../utils/constants"
import Button from "./Button"

const Header = () => {
    return (
        <header className="bg-amber-50 w-full flex items-center justify-between px-[15%] py-2">
            {/*Left Section */}
            <img src={APP_LOGO} alt="logo" className="h-12" />
            {/*Middle Section */}
            <ul className="flex items-center gap-x-8">
                {/*Nav Menu */}
                {
                    navMenuList.map((eachItem) => (
                        <li className="hover:text-amber-500 cursor-pointer text-sm" key={eachItem.id}>{eachItem.menu}</li>
                    ))
                }
            </ul>
            {/*Right Section */}
            <div>
                <button className="bg-transparent mr-4">Sign In</button>
                <Button buttonText="Post Job" width={'100px'}/>
            </div>
        </header>
    )
}
export default Header