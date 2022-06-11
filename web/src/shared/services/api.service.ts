import AuthApiService from '../api/auth-api.service';

class ApiService {
  constructor(public authApi: AuthApiService = new AuthApiService()) {}
}

export default ApiService;
