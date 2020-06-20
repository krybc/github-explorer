import {Exclude, Expose} from 'class-transformer';

@Exclude()
export class UserModel {
  @Expose()
  login: string;
}
