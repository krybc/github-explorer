import { InjectionToken } from '@angular/core';

export const defaultErrors = {
  required: () => 'error.required',
  minlength: () => 'error.minLength',
  maxlength: () => 'error.maxLength',
  min: () => 'error.min',
  max: () => 'error.max',
  custom: (error) => `${error}`,
};

export const FORM_ERRORS = new InjectionToken('FORM_ERRORS', {
  providedIn: 'root',
  factory: () => defaultErrors,
});
