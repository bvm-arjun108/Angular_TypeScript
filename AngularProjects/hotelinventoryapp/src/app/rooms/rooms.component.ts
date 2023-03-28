import { RoomsService } from './services/rooms.service';
import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit, QueryList, SkipSelf, ViewChild, ViewChildren } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Room, RoomList } from './rooms';
import { Observable } from 'rxjs';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit, AfterViewChecked {

  tableTitle = 'Rooms List';
  hotelLocation = 'Atlanta';
  numberOfRooms = 10;
  hideRooms = false;
  selectedRoom !: RoomList;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  };

  roomList: RoomList[] = [];

  stream = new Observable(observer => {
    observer.next('user1');
    observer.next('user2');
    observer.next('user3');
    observer.complete();
    // observer.error('error');

  });

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  @ViewChildren(HeaderComponent) headerChildrenComponent!: QueryList<HeaderComponent>;

  // roomService = new RoomsService(); // Creating Instances Manually. Use Dependency Injection Instead

  constructor(@SkipSelf() private roomsService: RoomsService) { }

  ngOnInit(): void {
    // console.log(this.headerComponent); static = true if you want to implement it inside oninit().
    // this.roomList = this.roomsService.getRooms();

    this.stream.subscribe((data) => console.log(data));

    this.stream.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('complete'),
      error: (err) => console.log(err)
    });

    console.log(this.roomsService.getRooms());
    this.roomsService.getRooms().subscribe(rooms => {
      this.roomList = rooms;
    });


  }

  ngDoCheck(): void {
    console.log('On changes is called');
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.tableTitle = "Toggle Room List";
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }

  addRoom() {
    const room: RoomList = {
      roomNumber: '9',
      roomType: 'Queen Room',
      amenities: 'AIR CONDITIONER, WIFI',
      price: 1500,
      photos: 'https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?cs=srgb&dl=pexels-vecislavas-popa-1571458.jpg&fm=jpg',
      checkinTime: new Date('15-Nov-2023'),
      checkOutTime: new Date('19-Nov-2023'),
      rating: 4.2
    };
    // this.roomList.push(room);
    this.roomList = [...this.roomList, room]; // Use of spread operator to retain the previous records and add the new records to the room list
  }

  ngAfterViewInit(): void {
    // console.log(this.headerComponent);
    this.headerComponent.hotelName = `Welcome to Hotel Westin at ${this.hotelLocation}`;

    this.headerChildrenComponent.last.hotelName = 'Last Hotel';

    // this.headerChildrenComponent.get(1).hotelName = 'Second Hotel';
  }

  ngAfterViewChecked(): void {
  }



}
