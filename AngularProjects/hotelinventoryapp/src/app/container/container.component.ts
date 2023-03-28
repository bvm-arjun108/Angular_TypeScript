import { RoomsService } from './../rooms/services/rooms.service';
import { EmployeeComponent } from './../employee/employee.component';
import { AfterContentInit, Component, ContentChild, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'hinv-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit, AfterContentInit {


  @ContentChild (EmployeeComponent) employee !: EmployeeComponent; 

  constructor(private roomsService: RoomsService) { }
  ngOnInit(): void {
  }
  ngAfterContentInit(): void {
    console.log(this.employee);
    this.employee.empName = 'Arjun';
  }

}
