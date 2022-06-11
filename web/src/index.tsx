import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import App from "./app/app.component";
import UserService from "./shared/services/user.service";
import { UserContext, ApiContext } from "./shared/contexts/global.context";
import ApiService from "./shared/services/api.service";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContext.Provider value={new UserService()}>
        <ApiContext.Provider value={new ApiService()}>
          <App />
        </ApiContext.Provider>
      </UserContext.Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
