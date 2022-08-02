import UserModel from "../models/user.model";
import React, { useEffect } from "react";

const UserService = () => {
  const localStorageKey = "user";
  const [user, setStateUser] = React.useState<UserModel | null>(null);

  useEffect(() => {
    console.log("UserService useEffect ====================");
    const usr = localStorage.getItem(localStorageKey);
    if (usr !== null) setStateUser(new UserModel(JSON.parse(usr)));
  }, []);

  function getUser(): UserModel | null {
    return user;
  }

  function setUser(val: UserModel) {
    localStorage.setItem(localStorageKey, JSON.stringify(val));
    setStateUser(val);
  }

  function logOut() {
    localStorage.removeItem(localStorageKey);
    setStateUser(null);
  }

  function isAuth(): boolean {
    return user !== null && user.userName !== null;
  }

  function hasRole(roleId: number): boolean {
    if (!user || !isAuth || user.roles == null) return false;
    return user.roles.indexOf(roleId) > -1;
  }

  return {
    getUser,
    setUser,
    logOut,
    isAuth,
    hasRole,
  };
};

export default UserService;
