import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class BookingService {
  constructor(private httpClient: HttpClient) {}

  bookRoom(bookingInfo: any) {
    return this.httpClient.post(
      'https://jsonplaceholder.typicode.com/posts',
      bookingInfo
    );
  }
}
