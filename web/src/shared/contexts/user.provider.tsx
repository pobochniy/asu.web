import React, { useContext } from "react";
import UserService from "../services/user.service";

const userContext = React.createContext(null);

export const UserProvider = ({ children }: any) => {
  const userService = UserService();

  return (
    <userContext.Provider value={userService}>
      {children}
    </userContext.Provider>
  );
};

export const useUser = () => useContext(userContext);
