import {Injectable} from '@angular/core';
import {catchError, map} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {UserRestService} from '@api/service/user.rest.service';
import {UserFactory} from '@repository/factory/user.factory';
import {UserViewModel} from '@repository/view-model/user.view-model';

@Injectable()
export class UserDataProvider {
  constructor(
    private readonly restService: UserRestService,
  ) {
  }

  public userByUsernameExist(username: string): Observable<boolean> {
    return this.restService
      .getUserByUsername(username)
      .pipe(
        map(result => true),
        catchError(error => of(false))
      );
  }

  public getUserByUsername(username: string): Observable<UserViewModel> {
    return this.restService
      .getUserByUsername(username)
      .pipe(
        map(result => UserFactory.createFromGetUserResponse(result))
      );
  }
}
