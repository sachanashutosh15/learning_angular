import { Component } from '@angular/core';
import { Room } from '../rooms.interface';
import { RoomsService } from '../services/rooms.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'hinv-add-new-room',
  templateUrl: './add-new-room.component.html',
  styleUrls: ['./add-new-room.component.scss'],
})
export class AddNewRoomComponent {
  constructor(private roomsService: RoomsService) {}
  successMessage = '';

  roomData: Room = {
    amenities: '',
    checkInTime: new Date(),
    checkOutTime: new Date(),
    photos: '',
    price: 0,
    rating: 0,
    roomType: '',
  };

  addRoom(newRoomForm: NgForm) {
    this.roomsService.addRoom(this.roomData).subscribe((result) => {
      this.successMessage = 'Room added Successfully';
      newRoomForm.reset({
        amenities: '',
        checkInTime: new Date(),
        checkOutTime: new Date(),
        photos: '',
        price: 0,
        rating: 0,
        roomType: '',
      });
    });
  }
}
