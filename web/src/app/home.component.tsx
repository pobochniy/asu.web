import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "..";
import { AuthApiService } from "../shared/api/auth-api.service";

function HomeComponent() {
  var service = useContext(UserContext);
  var authApi = new AuthApiService();

  async function logOut(e: any) {
    debugger;
    e.preventDefault();
    service.User = null;
    await authApi.logOut();
    //this.router.navigateByUrl('/');
  }

  return (
    <>
      <h1>АСУ</h1>

      {service.isAuth && (
        <div>
          <p>
            Добро пожаловать, {service.User?.userName}{" "}
            <a onClick={logOut}>[Выход]</a>
          </p>
          <p>Хорошего дня</p>
        </div>
      )}

      {!service.isAuth && (
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
