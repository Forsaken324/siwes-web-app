import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";

const MainNav = () => {
  return (
    <div className="flex fixed w-full z-100 p-2 bg-white border border-t-0 border-r-0 border-l-0 border-gray-400/30">
      <Link to={"/"} className="flex items-center ml-10">
        <img src={assets.qicon} alt="q logo" className="h-[30px]" />
        <p className="font-bold text-[25px] md:text-[30px] text-black">
          rentals
        </p>
      </Link>
    </div>
  );
};

export default MainNav;


// isaiah 7 The prophecy of the messiah
// the virgin will givebirth and conceive a son, and call him emmanuel
// then I made love to the prophetess, menaseh