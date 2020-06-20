import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormFieldComponent} from './component/form-field/form-field.component';
import {ControlErrorsDirective} from './directive/control-errors.directive';
import {ControlErrorComponent} from './component/control-error/control-error.component';
import {ControlErrorsContainerDirective} from './directive/control-errors-container.directive';

@NgModule({
  declarations: [
    FormFieldComponent,
    ControlErrorsDirective,
    ControlErrorsContainerDirective,
    ControlErrorComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FormFieldComponent,
    ControlErrorsDirective,
    ControlErrorsContainerDirective,
    ControlErrorComponent,
  ]
})
export class FormFieldModule {
}
