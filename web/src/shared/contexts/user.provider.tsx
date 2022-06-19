import React, { useContext } from "react";
import UserService from "../services/user.service";

const userService = new UserService();
const userContext = React.createContext(userService);

export const UserProvider = ({ children }: any) => {
  return (
    <userContext.Provider value={userService}>{children}</userContext.Provider>
  );
};

export const useUser = () => useContext(userContext);
