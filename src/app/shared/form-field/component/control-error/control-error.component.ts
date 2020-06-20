import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';

@Component({
  template: `<div class="invalid-feedback" [class.hide]="_hide">{{_text}}</div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ControlErrorComponent implements OnInit {
  _text: string;
  _hide = true;

  @Input() set text(value) {
    if (value !== this._text) {
      this._text = value;
      this._hide = !value;
      this.cdr.detectChanges();
    }
  }

  constructor(
    private cdr: ChangeDetectorRef,
  ) {
  }

  ngOnInit() {
  }
}
