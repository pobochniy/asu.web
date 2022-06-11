import React from 'react';
import UserService from '../services/user.service';
import ApiService from '../services/api.service';

export const UserContext = React.createContext<UserService>(new UserService());
export const ApiContext = React.createContext<ApiService>(new ApiService());
