export interface AuthInterface
{
    isLoggedIn: boolean;
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ChildrenInterface
{
    children: React.ReactNode;
}

export interface Countries
{
    code: string;
    name: string;
}