import {RepositoryViewModel} from '@repository/view-model/repository.view-model';
import {RepositoryModel} from '@api/model/repository.model';
import {BranchModel} from '@api/model/branch.model';

export class RepositoryFactory {
  public static createFromRepositoryListResponse(apiRepository: RepositoryModel, apiBranchList: BranchModel[]): RepositoryViewModel {
    console.log(apiRepository, apiBranchList);
    return {
      id: apiRepository.id,
      name: apiRepository.name,
      owner: apiRepository.owner.login,
      branchList: apiBranchList
        .map((branchItem: BranchModel) => {
          return {
            repositoryId: apiRepository.id,
            name: branchItem.name,
            sha: branchItem.commit.sha
          };
        })
    };
  }
}
