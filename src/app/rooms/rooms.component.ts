import { Component, OnInit } from '@angular/core';
import { RoomList, Rooms } from './rooms';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent {
  hotelName = 'Hilton Hotel';
  numberOfRooms = 10;
  isHidden = false;
  toggle() {
    this.isHidden = this.isHidden ? false : true;
  }

  rooms: Rooms = {
    totalRooms: 20,
    availableRooms: 1,
    bookedRooms: 5,
  };

  roomList: RoomList[] = [
    {
      roomNumber: 201,
      roomType: 'Type1',
      amenities: 'Set1',
      price: 1000,
      photos: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fimages%2Fanimals%2Fcat&psig=AOvVaw3PhjrEPumX2USBPaPGXX4k&ust=1684667276582000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMCmmYLhg_8CFQAAAAAdAAAAABAE",
      checkInTime: new Date('11-Nov-2021'),
      checkOutTime: new Date('12-Nov-2021'),
      rating: 3.5
    },
    {
      roomNumber: 202,
      roomType: 'Type2',
      amenities: 'Set2',
      price: 2000,
      photos:
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fimages%2Fanimals%2Fcat&psig=AOvVaw3PhjrEPumX2USBPaPGXX4k&ust=1684667276582000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMCmmYLhg_8CFQAAAAAdAAAAABAE',
      checkInTime: new Date('11-Nov-2021'),
      checkOutTime: new Date('12-Nov-2021'),
      rating: 4.2
    }
  ];
}
