import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {RequestInterceptor} from './interceptor/request.interceptor';
import {RepositoryRestService} from '@api/service/repository.rest.service';
import {UserRestService} from '@api/service/user.rest.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    },
  ]
})
export class ApiModule {
  static forRoot() {
    return {
      ngModule: ApiModule,
      providers: [
        RepositoryRestService,
        UserRestService,
      ]
    };
  }
}
