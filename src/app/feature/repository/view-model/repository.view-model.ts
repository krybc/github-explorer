import {BranchViewModel} from './branch.view-model';

export type RepositoryViewModel = {
  id: number;
  name: string;
  owner: string;
  branchList: BranchViewModel[];
};
