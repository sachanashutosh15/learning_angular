import { AbstractControl, FormGroup } from '@angular/forms';

export class CustomValidator {
  static ValidateName(control: AbstractControl) {
    const value = control.value as string;
    if (value.includes('test')) {
      return {
        invalidName: true,
      };
    }
    return null;
  }

  static ValidateSpecialChar(char: string) {
    return (control: AbstractControl) => {
      const value = control.value as string;
      if (value.includes(char)) {
        return {
          invalidSpecialChar: true,
        };
      }
      return null;
    };
  }

  static ValidateCheckoutDate(control: FormGroup) {
    if (
      control.get('checkInDate')?.value &&
      control.get('checkOutDate')?.value
    ) {
      const checkInDate: any = new Date(control.get('checkInDate')?.value);
      const checkOutDate: any = new Date(control.get('checkOutDate')?.value);
      const diffTime = checkOutDate - checkInDate;
      const diffDays = diffTime / (60 * 60 * 24 * 1000);
      if (diffDays <= 0) {
        control.get('checkOutDate')?.setErrors({
          invalidDate: true,
        });
        return {
          invalidCheckInCheckOutDates: true,
        };
      }
    }
    return null;
  }
}
