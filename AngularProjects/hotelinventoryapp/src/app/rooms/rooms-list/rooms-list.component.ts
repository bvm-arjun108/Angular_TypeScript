import { RoomList } from './../rooms';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'hinv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit, OnChanges, OnDestroy {

  @Input() rooms: RoomList[] = [];

  @Input() tableTitle: string = '';

  @Output() selectedRoom = new EventEmitter<RoomList>();

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if(changes['title']){
      this.tableTitle = changes['title'].currentValue.toUpperCase();
    }
  }

  ngOnInit(): void {
  }

  selectRoom(room: RoomList) {
    this.selectedRoom.emit(room);
  }

  ngOnDestroy(): void {
    console.log('On Destroy Called')
}

}
