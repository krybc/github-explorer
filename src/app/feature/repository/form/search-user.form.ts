import {Injectable} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SearchUserValidator} from '@repository/form/search-user.validator';

@Injectable()
export class SearchUserForm {
  public form: FormGroup;
  public username: string;

  constructor(
    private readonly formBuilder: FormBuilder,
    private formValidator: SearchUserValidator
  ) {
  }

  public init(): FormGroup {
    this.form = this.formBuilder.group({
      username: [null, {
        validators: [Validators.required, Validators.minLength(5)],
        asyncValidators: this.formValidator.checkUsernameAvailable.bind(this.formValidator)
      }]
    });

    this.form
      .valueChanges
      .subscribe(value => {
        this.username = value.username;
      });

    return this.form;
  }
}
