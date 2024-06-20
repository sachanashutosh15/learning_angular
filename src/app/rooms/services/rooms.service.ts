import { Inject, Injectable } from '@angular/core';
import { Room } from '../rooms.interface';
import { APP_CONFIG_SERVICE } from '../../../app/appConfig/appConfig.service';
import { AppConfig } from '../../../app/appConfig/appConfig.interface';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  constructor(
    @Inject(APP_CONFIG_SERVICE) private config: AppConfig,
    private http: HttpClient
  ) {
    console.log('>>>url', config.endPoint);
  }

  rooms$ = this.http.get<Room[]>('/api/rooms').pipe(shareReplay(1));

  getRooms() {
    return this.http.get<Room[]>('/api/rooms');
  }

  addRoom(room: Room) {
    return this.http.post<Room[]>('/api/rooms', room);
  }

  editRoom(updatedRoom: Room) {
    return this.http.put<Room[]>(
      `/api/rooms/${updatedRoom.roomNumber}`,
      updatedRoom
    );
  }

  deleteRoom(id: string | number) {
    return this.http.delete<Room[]>(`/api/rooms/${id}`);
  }

  getPhotos() {
    const request = new HttpRequest(
      'GET',
      `http://jsonplaceholder.typicode.com/photos`,
      {
        reportProgress: true,
      }
    );
    return this.http.request(request);
  }
}
