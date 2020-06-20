import {Exclude, Expose} from 'class-transformer';

@Exclude()
export class CommitModel {
  @Expose()
  sha: string;
}
