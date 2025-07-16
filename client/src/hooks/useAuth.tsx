import {useContext} from 'react'
import { authContext } from '../contexts/AuthContext'

const useAuth = () => {
    const context = useContext(authContext);
    if(!context)
    {
        throw new Error('Auth context must be used inside its provider');
    }
  return context;
}

export default useAuth;