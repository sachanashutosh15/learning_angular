import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Room } from '../rooms';
 
@Component({
  selector: 'hinv-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss']
})
export class RoomListComponent {

  @Input() rooms: Room[] = [];

  @Output() roomSelector = new EventEmitter<Room>();

  ngOnInit(): void {}

  roomSelected(room: Room) {
    this.roomSelector.emit(room);
  }
}
