import { UserProfileModel } from "../models/user-profile.model";
import { BaseApiService } from "./base-api.service";

class UsersApiService extends BaseApiService {
  private storage?: UserProfileModel[] = undefined;

  constructor() {
    super('Users');
  }

  public async GetProfiles() {
    if (!this.storage) {
      const profiles = await this.get<any[]>('GetProfiles');
      console.log(profiles);
      this.storage = profiles.map(x => new UserProfileModel(x));
    }

    return this.storage;
  }

  public async getUser(userId: string): Promise<UserProfileModel> {
    const profiles = await this.GetProfiles();
    return profiles.find(x => x.id === userId) || new UserProfileModel();
  }

  public async getUserRoles(userId: string) {
    return this.get<number[]>('GetRoles?userId=' + userId);
  }

  public async setUserRoles(userId: string, roles: number[]) {
    return this.post('SetRoles', { userId: userId, roles: roles });
  }

  public async changeUser(model: UserProfileModel) {
    if (!this.storage) return;

    const idx = this.storage.findIndex(x => x.id === model.id);
    if (idx > -1) {
      this.storage.splice(idx, 1);
    }

    this.storage.push(model);
  }
}

export default UsersApiService;