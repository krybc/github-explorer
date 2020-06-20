import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListComponent} from './component/list/list.component';
import {ListItemComponent} from './component/list-item/list-item.component';

@NgModule({
  declarations: [ListComponent, ListItemComponent],
  exports: [
    ListComponent,
    ListItemComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class ListModule {
}
