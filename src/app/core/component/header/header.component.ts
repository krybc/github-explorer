import { Component, OnInit } from '@angular/core';
import {LanguageState} from '@core/util/i18n/language.state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private languageState: LanguageState,
  ) { }

  ngOnInit(): void {
  }

  changeLanguage(language: string): void {
    this.languageState.language = language;
  }
}
