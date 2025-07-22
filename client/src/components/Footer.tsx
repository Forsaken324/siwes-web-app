import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
const Footer = () => {
  const date = new Date();
  return (
    <div className="flex flex-col gap-4 justify-center mt-50 p-4">
      <div className="flex flex-col md:flex-row justify-evenly">
        <div className="flex flex-col justify-evenly gap-2">
          <div className="flex">
            <img src={assets.qicon} alt="q-rentals logo" />
            <p className="font-bold text-[30px]">rentals</p>
          </div>
          <p className="md:w-[250px] lg:w-[400px] text-gray-400">
            Premium car rental service with a wide selection of luxury and
            everyday vehicles for all your driving needs.
          </p>
          <div className="flex gap-3">
            <Link to={"https://facebook.com"}>
              <img src={assets.facebook_logo} alt="facebook_logo" />
            </Link>
            <Link to={"https://instagram.com"}>
              <img src={assets.instagram_logo} alt="instagram_logo" />
            </Link>
            <Link to={""}>
              <img src={assets.twitter_logo} alt="twitter_logo" />
            </Link>
            <a href="mailto:qrentals@mail.com">
              <img src={assets.gmail_logo} alt="gmail_logo" />
            </a>
          </div>
        </div>
        <div className='flex flex-col md:flex-row gap-5 md:gap-15 mt-7 md:mt-0'>
          <div className="flex flex-col gap-2">
            <h2 className="text-black font-semibold">QUICK LINKS</h2>
            <ul className="text-gray-400 text-sm">
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/car-search"}>Browse Cars</Link>
              </li>
              <li>
                <Link to={"/list-car"}>List Your Car</Link>
              </li>
              <li>
                <Link to={"/about-us"}>About Us</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-blaxk font-semibold">RESOURCES</h2>
            <ul className="text-gray-400 text-sm">
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/car-search"}>Browse Cars</Link>
              </li>
              <li>
                <Link to={"/list-car"}>List Your Car</Link>
              </li>
              <li>
                <Link to={"/about-us"}>About Us</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-black font-semibold">CONTACT</h2>
            <ul className="text-gray-400 text-sm">
              <li>
                <Link to={"/"}>1234 Luxury Drive</Link>
              </li>
              <li>
                <Link to={"/car-search"}>San Francisco, CA 94107</Link>
              </li>
              <li>
                <Link to={"/list-car"}>+1 (555) 123-4567</Link>
              </li>
              <li>
                <Link to={"/about-us"}>qrentals@mail.com</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <hr className="text-gray-400/50 md:w-[85%] xl:w-[62%]" />
      </div>
      <div className="text-gray-400 flex justify-evenly ml-2 mr-2">
        <p>&copy; {date.getFullYear()} Qrental. All rights reserved.</p>
        <ul className="flex gap-3">
          <li><Link to={'/'}>Terms</Link></li>
          <li><Link to={'/'}>Privacy</Link></li>
          <li><Link to={'/'}>Cookies</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

// I am gabriel.
// God sent gabriel to mary. Why was mary chosen?
// Elizabeth was mary's relative, gabriel revealed that elizabeth was pregnant to mary.
// The baby lept in her womb. Blessed is she who has believed that the LORD will redeem his promises to her.
// caesar augustus, even strangers recognised Jesus as the messiah, when he was still young and did not yet make
// himself known to the world.

// luke 4: 39. And she arose and served them?


// the man took Jesus by his word. His word, he holds his word dearly.