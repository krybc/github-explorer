import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RepositoryRoutingModule} from './repository-routing.module';
import {RepositoryDataProvider} from '@repository/data-provider/repository.data-provider';
import {RepositoryListResolver} from '@repository/resolver/repository-list.resolver';
import {SearchUserComponent} from './container/search-user/search-user.component';
import {RouterModule} from '@angular/router';
import {RepositoryListComponent} from './container/repository-list/repository-list.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FormModule} from '../../shared/form/form.module';
import {FormFieldModule} from '../../shared/form-field/form-field.module';
import {TranslateModule} from '@ngx-translate/core';
import {UserDataProvider} from '@repository/data-provider/user.data-provider';
import {CardModule} from '../../shared/card/card.module';
import {ListModule} from '../../shared/list/list.module';

@NgModule({
  declarations: [SearchUserComponent, RepositoryListComponent],
  imports: [
    CommonModule,
    RepositoryRoutingModule,
    ReactiveFormsModule,
    FormModule,
    FormFieldModule,
    TranslateModule,
    CardModule,
    ListModule
  ],
  providers: [
    RepositoryDataProvider,
    RepositoryListResolver,
    UserDataProvider,
  ],
  exports: [
    RouterModule,
  ]
})
export class RepositoryModule {
}
