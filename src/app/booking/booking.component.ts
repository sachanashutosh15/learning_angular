import { Component } from '@angular/core';
import { ConfigService } from '../services/config.service';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { BookingService } from './booking.service';
import { exhaustMap, mergeMap, switchMap } from 'rxjs';
import { CustomValidator } from '../validators/custom-validators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'hinv-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent {
  bookingForm!: FormGroup;

  get guests() {
    return this.bookingForm.get('guestList') as FormArray;
  }

  constructor(
    private configService: ConfigService,
    private fb: FormBuilder,
    private bookingService: BookingService,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit() {
    const roomId = this.activatedRoute.snapshot.paramMap.get('id');
    this.bookingForm = this.fb.group(
      {
        roomId: new FormControl(
          { value: roomId, disabled: true },
          { validators: Validators.required }
        ),
        guestEmail: new FormControl('', {
          validators: [Validators.required, Validators.email],
        }),
        checkInDate: new FormControl(''),
        checkOutDate: new FormControl(''),
        bookingStatus: new FormControl(''),
        bookingAmount: new FormControl(''),
        bookingDate: new FormControl(''),
        mobileNumber: new FormControl(''),
        guestName: new FormControl('', {
          validators: [
            Validators.required,
            CustomValidator.ValidateName,
            CustomValidator.ValidateSpecialChar('*'),
          ],
        }),
        guestAddress: this.fb.group({
          addressLine1: new FormControl(''),
          addressLine2: new FormControl(''),
          city: new FormControl(''),
          state: new FormControl(''),
          country: new FormControl(''),
          zipCode: new FormControl(''),
        }),
        guestList: this.fb.array([this.newGuestControl()]),
        tnc: new FormControl(false, { validators: [Validators.requiredTrue] }),
      },
      { updateOn: 'blur', validators: [CustomValidator.ValidateCheckoutDate] }
    );
    this.bookingForm.valueChanges
      .pipe(exhaustMap((data) => this.bookingService.bookRoom(data)))
      .subscribe((data) => {
        console.log(data);
      });
  }

  newGuestControl() {
    return this.fb.group({
      name: new FormControl(''),
      age: new FormControl(''),
    });
  }

  bookRoom() {
    console.log('>>>booking room:', this.bookingForm.getRawValue());
    this.bookingService
      .bookRoom(this.bookingForm.getRawValue())
      .subscribe((data: any) => console.log(data));
    this.bookingForm.reset({
      roomId: '',
      guestEmail: '',
      checkInDate: '',
      checkOutDate: '',
      bookingStatus: '',
      bookingAmount: '',
      bookingDate: '',
      mobileNumber: '',
      guestName: '',
      guestAddress: this.fb.group({
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        country: '',
        zipCode: '',
      }),
      guestList: [],
      tnc: false,
    });
  }
  addGuest() {
    this.guests.push(this.newGuestControl());
  }
  addPassport() {
    this.bookingForm.addControl('passport', new FormControl(''));
  }

  removeControl(i: number) {
    this.guests.removeAt(i);
  }
}
