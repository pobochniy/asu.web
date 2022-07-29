import { Link } from "react-router-dom";
import { useUser } from "../shared/contexts/user.provider";
import { useApi } from "../shared/contexts/api.provider";

function HomeComponent() {
  const userService = useUser();
  const authApi = useApi().authApi;

  async function logOut(e: any) {
    userService.logOut();
    await authApi.logOut();
  }

  return (
    <>
      <h1>АСУ</h1>

      {userService.isAuth() && (
        <div>
          <p>
            Добро пожаловать, {userService.getUser()?.userName}{" "}
            <button onClick={logOut}>[Выход]</button>
          </p>
          <p>Хорошего дня</p>
        </div>
      )}

      {!userService.isAuth() && (
        <div>
          <ul>
            <li>
              <Link to="/login">Войдите</Link>
            </li>
            <li>
              или <Link to="/register">Зарегистрируйтесь</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default HomeComponent;
