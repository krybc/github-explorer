import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NotFoundComponent} from './component/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'search-user',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true, onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
