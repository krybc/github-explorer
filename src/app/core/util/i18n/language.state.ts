import {Injectable} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {LanguageEnum} from '@core/enum/language.enum';
import {environment} from '../../../../environments/environment';

@Injectable()
export class LanguageState {
  public language$: Observable<string>;
  private languageSubject = new BehaviorSubject<string>(LanguageEnum.pl);
  private _language: string;
  readonly languageKey = 'language';

  constructor(
    private translate: TranslateService
  ) {
    if (localStorage.getItem(this.languageKey)) {
      this.language = localStorage.getItem(this.languageKey);
    } else {
      this.language = environment.defaultLanguage;
    }
  }

  set language(language: string) {
    this._language = language;
    this.translate.use(language);
    localStorage.setItem(this.languageKey, language);
  }

  get language() {
    return this._language;
  }
}
