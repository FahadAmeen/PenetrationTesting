import { Directive } from '@angular/core';
import { FormControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appFileTypeValidator]',
  providers: [
    {
      provide: NG_VALIDATORS, useExisting: FileTypeValidatorDirective, multi: true
    }
  ]
})
export class FileTypeValidatorDirective {

  constructor() { }
  static validate(c: FormControl): { [key: string]: any } {
    if (c.value) {
      if (c.value[0]) {
        return this.checkExtension(c);
      }
    }
  }

  private static checkExtension(c: FormControl) {
    const valToLower = c.value[0].name;
    // console.log('validator', valToLower);

    // console.log(typeof valToLower);

    const regex = new RegExp('(.*?)\.(jpg|png|jpeg)$'); // add or remove required extensions here
    const regexTest = regex.test(valToLower);
    return !regexTest ? { notSupportedFileType: true } : null;
  }

  validate(c: FormControl): { [key: string]: any } {
    return FileTypeValidatorDirective.validate(c);
  }

}
