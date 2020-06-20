import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {RepositoryViewModel} from '@repository/view-model/repository.view-model';
import {RepositoryDataProvider} from '@repository/data-provider/repository.data-provider';
import {Observable} from 'rxjs';

@Injectable()
export class RepositoryListResolver implements Resolve<RepositoryViewModel[]>{
  constructor(
    private readonly dataProvider: RepositoryDataProvider,
  ) {
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<RepositoryViewModel[]> {
    return this.dataProvider.getRepositoryList(route.paramMap.get('username'));
  }
}
