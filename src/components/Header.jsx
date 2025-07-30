import { useState } from "react";
import { APP_LOGO, navMenuList } from "../utils/constants";
import Button from "./Button";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onHandleSidebarMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="relative bg-amber-50 w-full flex items-center justify-between px-[5%] md:px-[2%] lg:px-[15%] py-4 md:py-2">
      {/* Left Section for Logo */}
      <img src={APP_LOGO} alt="logo" className="h-10 sm:h-12" />

      {/* Middle Section for Desktop Nav Menu */}
      <ul className="md:flex md:items-center md:gap-x-8 hidden">
        {navMenuList.map((eachItem) => (
          <Link key={eachItem.id} className="text-black" to={eachItem.route}>
            <li  className="hover:text-amber-500 cursor-pointer text-sm whitespace-nowrap">
              {eachItem.menu}
            </li>
          </Link>
        ))}
      </ul>

      {/* Right Section for Desktop */}
      <div className="hidden  md:flex">
        <button className="bg-transparent mr-4">Sign In</button>
        <Button buttonText="Post Job" width={"100px"} />
      </div>

      {/* Hamburger Icon for Mobile Only */}
      <RxHamburgerMenu
        className="text-[#ea590c] text-2xl md:hidden cursor-pointer"
        onClick={onHandleSidebarMenu}
      />

      {/* Mobile Menu */}
      {isOpen && (
        <aside className="absolute top-[100%] left-0 right-0 bg-white px-4 py-3 shadow-md md:hidden z-50">
          <ul className="flex flex-col gap-3 items-center">
            {navMenuList.map((eachItem) => (
              <li
                key={eachItem.id}
                className="hover:text-amber-500 cursor-pointer text-sm transition-colors"
              >
                {eachItem.menu}
              </li>
            ))}
            <button className="mt-2 text-sm text-[#ea590c]">Sign In</button>
            <Button buttonText="Post Job" width="100%" />
          </ul>
        </aside>
      )}
    </header>
  );
};

export default Header;
