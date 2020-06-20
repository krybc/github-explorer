import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SearchUserComponent} from '@repository/container/search-user/search-user.component';
import {RepositoryListResolver} from '@repository/resolver/repository-list.resolver';
import {RepositoryListComponent} from '@repository/container/repository-list/repository-list.component';

const routes: Routes = [
  {
    path: 'search-user',
    component: SearchUserComponent,
  },
  {
    path: 'user/:username',
    component: RepositoryListComponent,
    resolve: {
      repositoryList: RepositoryListResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepositoryRoutingModule { }
