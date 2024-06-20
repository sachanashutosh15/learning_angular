import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  QueryList,
  SimpleChanges,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { Room } from '../rooms.interface';
import { HeaderComponent } from 'src/app/header/header.component';

@Component({
  selector: 'hinv-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomListComponent implements OnChanges, AfterViewInit {
  constructor(private cd: ChangeDetectorRef) {}
  @Input() rooms: Room[] = [];
  @Input() title!: string;
  @Input() priceFilter!: number | null;

  @Output() roomSelector = new EventEmitter<Room>();

  ngOnChanges(changes: SimpleChanges): void {
    console.log('>>>ngOnChanges Called', changes);
  }

  ngOnInit(): void {}

  roomSelected(room: Room) {
    this.roomSelector.emit(room);
  }

  @ViewChildren(HeaderComponent)
  headerChildrenComponent!: QueryList<HeaderComponent>;

  @ViewChild(HeaderComponent)
  headerComponent!: HeaderComponent;

  ngAfterViewInit() {
    this.headerComponent.title = 'Rendered Using view child.';
    console.log('>>>headerComponent', this.headerComponent);
    console.log('>>>HeaderChildren:', this.headerChildrenComponent);
    this.headerChildrenComponent.last.title = 'Using view Children.';
    this.cd.detectChanges();
  }

  ngOnDestroy(): void {
    console.log('>>>onDestroy');
  }
}
