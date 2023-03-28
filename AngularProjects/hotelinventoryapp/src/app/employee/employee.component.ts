import { RoomsService } from './../rooms/services/rooms.service';
import { Component, OnInit, Self } from '@angular/core';

@Component({
  selector: 'hinv-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  providers: [RoomsService]
})
export class EmployeeComponent implements OnInit {

  empName: string = 'John';
  constructor(@Self() private roomsService: RoomsService) { }
  ngOnInit(): void {
  }

}
