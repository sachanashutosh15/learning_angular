import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { Room } from '../rooms';
import { HeaderComponent } from 'src/app/header/header.component';

@Component({
  selector: 'hinv-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomListComponent implements OnChanges, AfterViewInit {
  constructor(private cd: ChangeDetectorRef) {}
  @Input() rooms: Room[] = [];
  @Input() title!: string;

  @Output() roomSelector = new EventEmitter<Room>();

  ngOnChanges(changes: SimpleChanges): void {
    console.log('>>>ngOnChanges Called', changes);
  }

  ngOnInit(): void {}

  roomSelected(room: Room) {
    this.roomSelector.emit(room);
  }

  @ViewChild(HeaderComponent)
  headerComponent!: HeaderComponent;

  ngAfterViewInit() {
    this.headerComponent.title = 'Rendered Using view child.';
    this.cd.detectChanges();
    console.log('>>>headerComponent', this.headerComponent);
  }
}
