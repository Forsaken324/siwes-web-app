import { createContext, useState } from "react"
import type { AuthInterface } from "../interfaces/interfaces";
import type { ChildrenInterface } from "../interfaces/interfaces";

export const authContext = createContext<AuthInterface | null>(null);

const AuthContextProvider = ({children}: ChildrenInterface) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  return (
    <authContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
        {children}
    </authContext.Provider>
  )
}

export default AuthContextProvider;