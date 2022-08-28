import { UserModel } from "../../src/shared/models/user.model";
import { UserRoleEnum } from "../../src/shared/enums/user-role.enum";

export const LehaPassword = "!Qwerty23";
export const LehaName = "Alexey";
export const LehaEmail = "alexey@asuemail.ru";
export const LehaPhone = "+79091112233";

export const VladName = "Vlad";
export const VladEmail = "vlad@asuemail.ru";
export const VladPhone = "+79091113344";

export class UserBuilder {
    private _profile: UserModel;

    constructor(id: string, name: string, email: string, phone: string)
    {
        this._profile = new UserModel({
            id: id,
            userName: name,
            email: email,
            phone: phone
        });
    }

    WithAllRoles = () => {
        const allRoles = Object.keys(UserRoleEnum)
          .filter((v) => !isNaN(Number(v)) && v !== '0')
          .map(x=>+x);

        this._profile.roles = allRoles;
        return this;
    }

    WithRoles = (roles: UserRoleEnum[]) => {
      this._profile.roles = roles;
      return this;
    }

    Please = () => {
        return this._profile;
    }
  }
