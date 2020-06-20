import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[controlErrorsContainer]'
})
export class ControlErrorsContainerDirective {

  constructor(
    public vcr: ViewContainerRef
  ) {
  }

}
