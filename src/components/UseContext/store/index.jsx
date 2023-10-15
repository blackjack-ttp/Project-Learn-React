//*  LIB
import { createContext, useState } from 'react';

export const authContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  const handleChangeUser = () => {
    setUser(!user)
  }

  const data = {
    user,
    setUser,
    handleChangeUser
  };

  return <authContext.Provider value={data}>{children}</authContext.Provider>;
};
