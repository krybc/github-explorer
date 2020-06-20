import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CoreRoutingModule} from './core-routing.module';
import {LayoutComponent} from './container/layout/layout.component';
import {HeaderComponent} from './component/header/header.component';
import {CoreComponent} from './core.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import {LanguageState} from '@core/util/i18n/language.state';

@NgModule({
  declarations: [
    CoreComponent,
    LayoutComponent,
    HeaderComponent,
    NotFoundComponent
  ],
  exports: [
    CoreComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  providers: [
    LanguageState,
  ]
})
export class CoreModule {
}
