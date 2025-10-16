import { Directive, Input } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: `[frmdisableIf]`,
  standalone: true,
})
export class FormDirective {
  @Input('frmdisableIf') set disabledIf(condition: boolean) {
    const control = this.ngControl.control;

    condition ? control?.disable() : control?.enable();
  }
  constructor( private ngControl: NgControl ) {}

}
