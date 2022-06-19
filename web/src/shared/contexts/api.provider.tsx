import React, { useContext } from "react";
import ApiService from '../services/api.service';

const apiService = new ApiService();
const apiContext = React.createContext(apiService);

export const ApiProvider = ({ children }: any) => {
  return (
    <apiContext.Provider value={apiService}>{children}</apiContext.Provider>
  );
};

export const useApi = () => useContext(apiContext);
