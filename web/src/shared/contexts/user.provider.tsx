import React, { useContext, useEffect, useState } from "react";
import UserModel from "../models/user.model";
import UserService from "../services/user.service";

const defaultProps = {
  getUser: (): UserModel | undefined => {return undefined},
  setUser: (val: UserModel) => {return} ,
  logOut: () => {return},
  isAuth: () => {return false},
  hasRole: (roleId: number) => {return false},
}

const userContext = React.createContext<typeof defaultProps>(defaultProps);

export const UserProvider = ({ children }: any) => {
  //const userService = UserService();
  const localStorageKey = "user";
  const [user, setStateUser] = useState<UserModel>();

  useEffect(() => {
    console.log("UserService useEffect ====================");
    const usr = localStorage.getItem(localStorageKey);
    if (usr !== null) setStateUser(new UserModel(JSON.parse(usr)));
  }, []);

  function getUser() {
    return user;
  }

  function setUser(val: UserModel) {
    localStorage.setItem(localStorageKey, JSON.stringify(val));
    setStateUser(val);
  }

  function logOut() {
    localStorage.removeItem(localStorageKey);
    setStateUser(undefined);
  }

  function isAuth(): boolean {
    return user !== undefined && user.userName !== null && user.userName !== undefined && user.userName !== '';
  }

  function hasRole(roleId: number): boolean {
    if (!user || !isAuth || user.roles == null) return false;
    return user.roles.indexOf(roleId) > -1;
  }

  return (
    <userContext.Provider value={{
      getUser,
      setUser ,
      logOut,
      isAuth,
      hasRole,
    }}>
      {children}
    </userContext.Provider>
  );
};

export const useUser = () => useContext(userContext);
