import { useEffect, useState } from "react";
import { dummyUserData, ownerMenuLinks } from "../../assets/assets";
import { NavLink } from "react-router-dom";
import Loading from "../../common/animations/Loading";
import type { UserPayload } from "../../interfaces/interfaces";

const SideBar = () => {
  const [userData, setUserData] = useState<UserPayload | null>(null);
  const getUserDetails = async () => {
    setUserData(dummyUserData);
  }
  const handleSignOut = () => {

  }
  useEffect(() => {
    getUserDetails();
  }, [])
  return (
    userData ? (
      <div className="fixed flex flex-col items-center justify-between border border-b-0 border-t-0 border-gray-400/30 h-[100vh]">
      <div>
        <div className="flex flex-col items-center mt-[80px]">
          <img
            src={userData.image}
            alt={userData.name}
            className="w-[56px] h-[56px] rounded-full"
          />
          <p className="p-1 md:p-0 font-bold dark:text-gray-300">{dummyUserData.name}</p>
        </div>
        <div className="md:w-[200px] flex flex-col dark:text-gray-300">
          <hr className="w-full text-gray-400/30 mt-3" />
          {ownerMenuLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              className={({ isActive }) =>
                `relative flex items-center w-full max-md:justify-center gap-2 py-2.5 min-md:pl-10 first:mt-6 ${
                  isActive && "bg-primary/15 text-primary group"
                }`
              }
              end
            >
              {({ isActive }) => (
                <>
                  {isActive ? (
                    <img src={link.coloredIcon} className="w-5 h-5" />
                  ) : (
                    <img src={link.icon} className="w-5 h-5" />
                  )}
                  <p className="hidden text-sm md:block">{link.name}</p>
                  <span
                    className={`h-10 w-1.5 rounded-l absolute right-0 ${
                      isActive && "bg-primary"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </div>
      </div>
      <button className="mb-20 text-red-400 text-sm md:text-base hover:text-red-600 bg-red-400/20 hover:bg-red-400/50 duration-300 w-[80px] md:w-[90px] border border-red-400 rounded-full" onClick={handleSignOut}>
        Sign out
      </button>
    </div>
    ) : <Loading />
  );
};

export default SideBar;
