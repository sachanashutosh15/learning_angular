import { Component, DoCheck } from '@angular/core';
import { Room, Rooms } from './rooms.interface';
import { RoomsService } from './services/rooms.service';
import { catchError, of, Subject } from 'rxjs';
import { ConfigService } from '../services/config.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements DoCheck {
  constructor(
    private roomsService: RoomsService,
    private configService: ConfigService
  ) {}
  roomList: Room[] = [];
  selectedRoom!: Room;
  error$ = new Subject<string>();
  getError$ = this.error$.asObservable();

  ngDoCheck() {}

  ngOnInit() {
    // this.roomsService.getPhotos().subscribe((res) => {
    //   console.log('>>>res:', res);
    // });
    this.roomsService.rooms$
      .pipe(
        catchError((err) => {
          this.error$.next(err.message);
          return of([]);
        })
      )
      .subscribe((rooms) => {
        this.roomList = rooms;
      });
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

  priceFilter = new FormControl(0);

  addRoom() {
    const newRoom: Room = {
      roomType: 'Type2',
      amenities: 'Set2',
      price: 2000,
      photos:
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fimages%2Fanimals%2Fcat&psig=AOvVaw3PhjrEPumX2USBPaPGXX4k&ust=1684667276582000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMCmmYLhg_8CFQAAAAAdAAAAABAE',
      checkInTime: new Date('11-Nov-2021'),
      checkOutTime: new Date('12-Nov-2021'),
      rating: 4.2,
    };
    this.roomsService.addRoom(newRoom).subscribe((rooms) => {
      this.roomList = rooms;
    });
  }

  editRoom() {
    const updatedRoom: Room = {
      roomNumber: 3,
      roomType: 'Type2',
      amenities: 'Set2',
      price: 2000,
      photos:
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fimages%2Fanimals%2Fcat&psig=AOvVaw3PhjrEPumX2USBPaPGXX4k&ust=1684667276582000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMCmmYLhg_8CFQAAAAAdAAAAABAE',
      checkInTime: new Date('11-Nov-2021'),
      checkOutTime: new Date('12-Nov-2021'),
      rating: 4.2,
    };
    this.roomsService.editRoom(updatedRoom).subscribe((rooms) => {
      this.roomList = rooms;
    });
  }

  deleteRoom() {
    this.roomsService.deleteRoom(3).subscribe((rooms) => {
      this.roomList = rooms;
    });
  }
}
