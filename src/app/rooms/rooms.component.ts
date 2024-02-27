import {
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { Room, Rooms } from './rooms';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements DoCheck {
  roomList: Room[] = [];
  selectedRoom!: Room;

  ngDoCheck() {}

  ngOnInit(): void {
    this.roomList = [
      {
        roomNumber: 201,
        roomType: 'Type1',
        amenities: 'Set1',
        price: 1000,
        photos:
          'https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fimages%2Fanimals%2Fcat&psig=AOvVaw3PhjrEPumX2USBPaPGXX4k&ust=1684667276582000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMCmmYLhg_8CFQAAAAAdAAAAABAE',
        checkInTime: new Date('11-Nov-2021'),
        checkOutTime: new Date('12-Nov-2021'),
        rating: 3.5,
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
        rating: 4.2,
      },
    ];
  }
  hotelName = 'Hilton Hotel';
  numberOfRooms = 10;
  isHidden = false;
  toggle() {
    this.isHidden = this.isHidden ? false : true;
    this.title = this.title.toUpperCase();
  }

  rooms: Rooms = {
    totalRooms: 20,
    availableRooms: 1,
    bookedRooms: 5,
  };

  selectRoom(room: Room) {
    this.selectedRoom = room;
  }

  title = 'Hello world';

  addRoom() {
    const newRoom: Room = {
      roomNumber: 203,
      roomType: 'Type2',
      amenities: 'Set2',
      price: 2000,
      photos:
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fimages%2Fanimals%2Fcat&psig=AOvVaw3PhjrEPumX2USBPaPGXX4k&ust=1684667276582000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMCmmYLhg_8CFQAAAAAdAAAAABAE',
      checkInTime: new Date('11-Nov-2021'),
      checkOutTime: new Date('12-Nov-2021'),
      rating: 4.2,
    };
    console.log('roomList>>>', this.roomList);
    this.roomList = [...this.roomList, newRoom];
    console.log('roomList>>>', this.roomList);
  }
}
