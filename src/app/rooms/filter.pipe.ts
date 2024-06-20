import { Pipe, PipeTransform } from '@angular/core';
import { Room } from './rooms.interface';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(rooms: Room[], price: number | null): Room[] {
    const valueForComparison = price ?? 0;
    return rooms.filter((room: Room) => room.price >= valueForComparison) || [];
  }
}
