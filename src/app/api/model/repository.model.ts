import {Exclude, Expose, Type} from 'class-transformer';
import {UserModel} from './user.model';

@Exclude()
export class RepositoryModel {
  @Expose()
  id: number;

  @Expose()
  name: string;

  @Expose()
  @Type(() => UserModel)
  owner: UserModel;


}
