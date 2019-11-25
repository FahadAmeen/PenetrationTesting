import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidatorFn } from '@angular/forms';

@Directive({
  selector: '[appNoWhiteSpaceValidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: NoWhiteSpaceValidatorDirective, multi: true }]
})
export class NoWhiteSpaceValidatorDirective {

  constructor() { }

  static validate(control: AbstractControl): { [key: string]: any } {
    return control;
  }
  ValidatorFn() {

    return (control: AbstractControl): { [key: string]: any } => {

      // messy but you get the idea
      const isWhitespace = (control.value || '').trim().length === 0;
      const isValid = !isWhitespace;
      return isValid ? null : { whitespace: 'value is only whitespace' };

    };
  }
}
