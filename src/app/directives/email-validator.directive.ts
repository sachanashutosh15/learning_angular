import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
} from '@angular/forms';

@Directive({
  selector: '[hinvvalidateemail]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EmailValidatorDirective,
      multi: true,
    },
  ],
})
export class EmailValidatorDirective {
  validate(control: AbstractControl): ValidationErrors | null {
    const value = control.value as string;
    if (value?.includes('test')) {
      return {
        invalidEmail: true,
      };
    } else {
      return null;
    }
  }
}
