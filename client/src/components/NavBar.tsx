import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { Search, Menu } from "lucide-react";
import { useState } from "react";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleLinkClick = () => {
    scrollTo(0, 0);
    setMenuOpen(false);
  }
  
  return (
    <div className="flex items-center justify-evenly p-2 border border-t-0 border-r-0 border-l-0 border-b-light-gray">
      <div className="flex items-center gap-2">
        <img src={assets.qicon} alt="q logo" className="h-[30px]" />
        <p className="font-bold text-[30px] text-black">Rentals</p>
      </div>

      <Menu className="md:hidden" />

      <div className="flex items-center justify-evenly w-full">
        <div className="flex gap-5">
          <Link to={"/"}>Home</Link>
          <Link to={"/car-search"}>Cars</Link>
          <a href="#about">About</a>
        </div>
        <div className="flex items-center gap-7">
          <div className="flex w-[233px] h-[38px] items-center rounded-full border border-light-gray">
            <input
              type="text"
              placeholder="Search cars"
              className="outline-none w-[185px] ml-2"
            />
            <Search className="mr-5" />
          </div>
          <Link to={"/car-search"}>List cars</Link>
          <button className="w-[114.86px] h-[38px] text-white bg-primary hover:bg-primary-light duration-300 transition rounded">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
