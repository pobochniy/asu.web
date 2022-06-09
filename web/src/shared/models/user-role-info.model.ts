import { UserRoleEnum } from "../enums/user-role.enum";

/** User Role Info */
export class UserRoleInfoModel {
  constructor(
    public id: UserRoleEnum,
    /** Описание */
    public summary: string,
    /** Категория */
    public groupCode: string,
    /** Присутствует у пользователя */
    public checked: boolean = false
  ) {}
}