import {
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  ElementRef,
  Inject,
  Input,
  OnDestroy,
  OnInit, Optional,
  ViewContainerRef
} from '@angular/core';
import {AbstractControl, NgControl, ValidationErrors} from '@angular/forms';
import {FORM_ERRORS} from '../model/form-errors';
import {ControlErrorComponent} from '../component/control-error/control-error.component';
import {merge} from 'rxjs';
import {TranslateService} from '@ngx-translate/core';
import {ControlErrorsContainerDirective} from './control-errors-container.directive';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[formControl], [formControlName]'
})
export class ControlErrorsDirective implements OnInit, OnDestroy {
  ref: ComponentRef<ControlErrorComponent>;
  container: ViewContainerRef;
  @Input() customErrors = {};
  @Input() formControlName: string;

  constructor(
    private vcr: ViewContainerRef,
    private host: ElementRef<HTMLFormElement>,
    private resolver: ComponentFactoryResolver,
    @Inject(FORM_ERRORS) private errors,
    private controlDir: NgControl,
    private translateService: TranslateService,
    @Optional() formErrorsContainer: ControlErrorsContainerDirective,
  ) {
    this.container = formErrorsContainer ? formErrorsContainer.vcr : vcr;
  }

  ngOnInit(): void {
    merge(
      this.control.valueChanges,
      this.control.statusChanges,
    )
      .subscribe(() => {
        const controlErrors: ValidationErrors = this.control.errors;
        if (controlErrors && (this.control.touched || this.control.value)) {
          this.assignTranslatedError(controlErrors);
        } else if (this.ref) {
          this.setError(null);
        }
      });
  }

  private assignTranslatedError(controlErrors: ValidationErrors): void {
    this.control.markAsTouched();
    const firstKey = Object.keys(controlErrors)[0];
    const errorByKey = this.errors[firstKey];
    const translatedText = this.getTranslatedError(firstKey, errorByKey, controlErrors[firstKey]);
    this.setError(translatedText);
  }

  get control(): AbstractControl {
    return this.controlDir.control;
  }

  get element(): HTMLFormElement {
    return this.host.nativeElement;
  }

  private getTranslatedError(key, errorByKey, controlError): string {
    switch (key) {
      case 'min':
        return this.translateService.instant(errorByKey(controlError), {value: controlError.min});
      case 'max':
        return this.translateService.instant(errorByKey(controlError), {value: controlError.max});
      case 'minlength':
        return this.translateService.instant(errorByKey(controlError), {value: controlError.requiredLength});
      case 'maxlength':
        return this.translateService.instant(errorByKey(controlError), {value: controlError.requiredLength});
      default:
        if (this.translateService.instant(errorByKey(controlError)) === '') {
          return controlError;
        }
        return this.translateService.instant(errorByKey(controlError));
    }
  }

  private setError(text: string) {
    if (!this.ref) {
      const factory = this.resolver.resolveComponentFactory(ControlErrorComponent);
      this.ref = this.container.createComponent(factory);
    }
    this.ref.instance.text = text;
  }

  ngOnDestroy() {
  }
}
