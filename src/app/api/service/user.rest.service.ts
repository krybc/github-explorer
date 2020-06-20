import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {plainToClass} from 'class-transformer';
import {Observable} from 'rxjs';
import {UserModel} from '@api/model/user.model';

@Injectable()
export class UserRestService {
  constructor(
    private readonly http: HttpClient
  ) {
  }

  public getUserByUsername(username: string): Observable<UserModel> {
    return this.http.get<UserModel>(`users/${username}`)
      .pipe(
        map(result => plainToClass(UserModel, result as object))
      );
  }
}
