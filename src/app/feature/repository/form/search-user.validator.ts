import {Injectable} from '@angular/core';
import {AbstractControl, ValidationErrors} from '@angular/forms';
import {Observable, of} from 'rxjs';
import {UserDataProvider} from '@repository/data-provider/user.data-provider';
import {switchMap} from 'rxjs/operators';
import {TranslateService} from '@ngx-translate/core';

@Injectable()
export class SearchUserValidator {
  constructor(
    private dataProvider: UserDataProvider,
    private translator: TranslateService,
  ) {}

  checkUsernameAvailable(control: AbstractControl): Observable<ValidationErrors> {
    return this.dataProvider
      .userByUsernameExist(control.value)
      .pipe(
        switchMap((result: boolean) => {
          return (result) ? of(null) : of({custom: this.translator.instant('searchUser.errors.notFound')});
        })
      );
  }
}
