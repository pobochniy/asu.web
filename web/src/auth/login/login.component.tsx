import { useNavigate } from "react-router-dom";
import { useApi } from "../../shared/contexts/api.provider";
import { useUser } from "../../shared/contexts/user.provider";
import UserModel from "../../shared/models/user.model";

function LoginComponent() {
  const api = useApi().authApi;
  const service = useUser();
  let navigate = useNavigate();
  
  async function onSubmit() {
    try {
      //if (this.loginForm.valid) {
      const usr = await api.login({ login: "Jeer", password: "123" });
      service.User = new UserModel(usr);
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
      {service.User && <p>Hi, {service.User.shortName}</p>}
    </div>
  );
}

export default LoginComponent;
