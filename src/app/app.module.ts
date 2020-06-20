import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import {RepositoryModule} from '@repository/repository.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ApiModule} from '@api/api.module';
import { AppComponent } from './app.component';
import {ActivatedRouteSnapshot, RouterModule} from '@angular/router';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {CoreModule} from '@core/core.module';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpLoaderFactory} from '@core/util/i18n/http-loader.factory';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      }
    }),
    ApiModule.forRoot(),
    RepositoryModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
