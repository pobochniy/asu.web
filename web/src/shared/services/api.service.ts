import AuthApiService from "../api/auth-api.service";
import EpicApiService from "../api/epic-api.service";
import UsersApiService from "../api/users-api.service";

class ApiService {
  constructor(
    public authApi = new AuthApiService(),
    public epicApi = new EpicApiService(),
    public usersApi = new UsersApiService()
  ) {}
}

export default ApiService;
