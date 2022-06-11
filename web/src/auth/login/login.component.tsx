import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext, ApiContext } from "../../shared/contexts/global.context";
import UserModel from "../../shared/models/user.model";

function LoginComponent() {
  const service = useContext(ApiContext).authApi;
  const userService = useContext(UserContext);
  let navigate = useNavigate();
  
  async function onSubmit() {
    try {
      //if (this.loginForm.valid) {
      const usr = await service.login({ login: "Jeer", password: "123" });
      userService.User = new UserModel(usr);
      //this.chatService.connectionWebSocket();
      navigate('/');
      //}
    } catch (Exception) {
      alert("не подходит");
    }
  }

  return (
    <div>
      <button onClick={onSubmit}>login</button>
      {userService.User && <p>Hi, {userService.User.shortName}</p>}
    </div>
  );
}

export default LoginComponent;
