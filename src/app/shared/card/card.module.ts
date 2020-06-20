import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardComponent} from './component/card/card.component';
import { CardHeaderComponent } from './component/card-header/card-header.component';
import { CardBodyComponent } from './component/card-body/card-body.component';

@NgModule({
  declarations: [CardComponent, CardHeaderComponent, CardBodyComponent],
  exports: [
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class CardModule {
}
