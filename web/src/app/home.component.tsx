import { Link } from "react-router-dom";
import { useUser } from "../shared/contexts/user.provider";
import { useApi } from "../shared/contexts/api.provider";

function HomeComponent() {
  const service = useUser();
  const authApi = useApi().authApi;

  async function logOut(e: any) {
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
            <button onClick={logOut}>[Выход]</button>
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
