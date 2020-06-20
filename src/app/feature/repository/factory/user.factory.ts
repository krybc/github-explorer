import {UserModel} from '@api/model/user.model';
import {UserViewModel} from '@repository/view-model/user.view-model';

export class UserFactory {
  public static createFromGetUserResponse(user: UserModel): UserViewModel {
    return {
      login: user.login
    };
  }
}
