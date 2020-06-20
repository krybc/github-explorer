import {Component, OnInit} from '@angular/core';
import {SearchUserForm} from '@repository/form/search-user.form';
import {FormGroup} from '@angular/forms';
import {SearchUserValidator} from '@repository/form/search-user.validator';
import {UserDataProvider} from '@repository/data-provider/user.data-provider';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.scss'],
  providers: [
    SearchUserForm,
    SearchUserValidator,
  ]
})
export class SearchUserComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private formService: SearchUserForm,
    private dataProvider: UserDataProvider,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.form = this.formService.init();
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.router.navigate([`/user/${this.formService.username}`]);
    }
  }
}
