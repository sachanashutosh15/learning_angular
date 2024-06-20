import { Injectable } from '@angular/core';
import { CanDeactivateFn } from '@angular/router';
import { BookingComponent } from '../booking.component';

@Injectable({
  providedIn: 'root',
})
export class BookingGuard {
  canDeactivate(component: BookingComponent) {
    return true;
  }
}
