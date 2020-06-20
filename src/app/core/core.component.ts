import { Component } from '@angular/core';
import {LanguageState} from '@core/util/i18n/language.state';

@Component({
  selector: 'app-core',
  template: `<app-layout></app-layout>`,
})
export class CoreComponent {
  constructor(
    private languageState: LanguageState,
  ) {}
}
