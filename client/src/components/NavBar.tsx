import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { SearchIcon, Menu, XIcon } from "lucide-react";
import { useState } from "react";
import useAuth from "../hooks/useAuth";
import User from "./User";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const { isLoggedIn } = useAuth();
  const [searchValue, setSearchValue] = useState<string>("");

  const handleLinkClick = () => {
    scrollTo(0, 0);
    setMenuOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 z-50 w-full flex items-center justify-between md:justify-evenly md:px-16 lg:px-36 py-2 border border-b-light-gray border-t-0 border-r-0 border-l-0">
      <Menu
        className={`max-md:ml-4 md:hidden w-8 h-8 cursor-pointer`}
        onClick={() => setMenuOpen(true)}
      />
      <Link to={"/"} className="flex items-center gap-2">
        <img src={assets.qicon} alt="q logo" className="h-[30px]" />
        <p className="font-bold text-[25px] md:text-[30px] text-black">
          Rentals
        </p>
      </Link>

      <div
        className={`max-md:absolute max-md:top-0 max-md:left-0 max-md:font-medium max-md:text-lg z-50 flex flex-col md:flex-row items-center max-md:justify-center gap-8 min-md:px-8 py-3 max-md:h-screen min-md:rounded-full backdrop-blur bg-black/70 md:bg-white/10 md:border border-gray-800/20 overflow-hidden transition-[width] duration-300 ${
          menuOpen ? "max-md:w-full" : "max-md:w-0"
        }`}
      >
        <XIcon
          className="md:hidden absolute top-6 right-6 w-6 h-6 cursor-pointer text-white"
          onClick={() => setMenuOpen(false)}
        />
        <Link
          to={"/"}
          onClick={handleLinkClick}
          className={`${menuOpen ? "text-white" : ""}`}
        >
          Home
        </Link>
        <Link
          to={"/car-search"}
          onClick={handleLinkClick}
          className={`${menuOpen ? "text-white" : ""}`}
        >
          Cars
        </Link>
        <a href="#about" className={`${menuOpen ? "text-white" : ""}`}>
          About
        </a>
      </div>
      <div className="flex items-center gap-7">
        <div className="flex w-[233px] h-[38px] items-center rounded-full border border-light-gray hidden ">
          <input
            type="text"
            placeholder="Search cars"
            className="outline-none w-[185px] ml-2"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <SearchIcon className="mr-5" />
        </div>
        <Link to={"/car-search"} onClick={handleLinkClick} className="hidden">
          List cars
        </Link>
        {isLoggedIn ? (
          <User />
        ) : (
          <button className="w-[90px] md:w-[114.86px] md:h-[38px] mr-4 text-white bg-primary hover:bg-primary-light duration-300 transition rounded">
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default NavBar;

// matthew 7
