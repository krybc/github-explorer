import {Injectable} from '@angular/core';
import {RepositoryRestService} from '@api/service/repository.rest.service';
import {exhaustMap, flatMap, map, mergeMap, tap} from 'rxjs/operators';
import {RepositoryModel} from '@api/model/repository.model';
import {forkJoin, Observable, of} from 'rxjs';
import {BranchModel} from '@api/model/branch.model';
import {RepositoryFactory} from '@repository/factory/repository.factory';
import {RepositoryViewModel} from '@repository/view-model/repository.view-model';

@Injectable()
export class RepositoryDataProvider {
  constructor(
    private readonly restService: RepositoryRestService,
  ) {
  }

  public getRepositoryList(username: string): Observable<RepositoryViewModel[]> {
    return this.restService.getRepositoryListByUser(username)
      .pipe(
        flatMap((repositoryList: RepositoryModel[]) => {
          const result$: Observable<RepositoryViewModel>[] = [];
          repositoryList.map(item => {
            result$.push(this.prepareRepositoryBranchList(username, item));
          });

          return forkJoin(result$);
        })
      );
  }

  private prepareRepositoryBranchList(username: string, apiRepository: RepositoryModel) {
    return this.restService
      .getBranchListByRepository(username, apiRepository.name)
      .pipe(
        map((apiBranchList: BranchModel[]) => {
          return RepositoryFactory.createFromRepositoryListResponse(apiRepository, apiBranchList);
        })
      );
  }
}
