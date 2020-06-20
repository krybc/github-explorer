import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {plainToClass} from 'class-transformer';
import {RepositoryModel} from '@api/model/repository.model';
import {Observable} from 'rxjs';
import {BranchModel} from '@api/model/branch.model';

@Injectable()
export class RepositoryRestService {
  constructor(
    private readonly http: HttpClient
  ) {
  }

  public getRepositoryListByUser(username: string): Observable<RepositoryModel[]> {
    return this.http.get<RepositoryModel[]>(`users/${username}/repos`)
      .pipe(
        map(result => plainToClass(RepositoryModel, result as object[]))
      );
  }

  public getBranchListByRepository(username: string, repositoryName: string): Observable<BranchModel[]> {
    return this.http.get<BranchModel[]>(`repos/${username}/${repositoryName}/branches`)
      .pipe(
        map(result => plainToClass(BranchModel, result as object[]))
      );
  }
}
