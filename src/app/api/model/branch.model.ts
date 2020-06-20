import {Exclude, Expose, Type} from 'class-transformer';
import {CommitModel} from './commit.model';

@Exclude()
export class BranchModel {
  @Expose()
  name: string;

  @Expose()
  @Type(() => CommitModel)
  commit: CommitModel;
}
