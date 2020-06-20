import {Component, HostBinding, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FormFieldComponent implements OnInit {
  @Input() label: string = null;
  @Input() dir: string;

  @HostBinding('class.form-field-center') get isDirCenter() {
    return this.dir === 'center';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
