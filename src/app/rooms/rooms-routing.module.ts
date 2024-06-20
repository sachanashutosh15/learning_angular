import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsComponent } from './rooms.component';
import { AddNewRoomComponent } from './add-new-room/add-new-room.component';
import { BookRoomComponent } from './book-room/book-room.component';
import { RoomGuard } from './rooms.guard';

const routes: Routes = [
  {
    path: '',
    component: RoomsComponent,
    canActivateChild: [RoomGuard],
    children: [
      {
        path: 'new',
        component: AddNewRoomComponent,
      },
      {
        path: ':id',
        component: BookRoomComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoomsRoutingModule {}
