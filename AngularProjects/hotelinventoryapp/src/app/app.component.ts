import { LoggerService } from './logger.service';
import { RoomsComponent } from './rooms/rooms.component';
import { Component, OnInit, ViewChild, ViewContainerRef, AfterViewInit, ElementRef, Optional, Inject } from '@angular/core';
import {localStorageToken} from './localstorage.token'

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  // template : '<h1>Hello World from inline template!</h1>', inline Html
  // template : `<h1>Hello World from inline template!</h1>
  //                <p> Angular is Awesome</p>`, multi-line html

  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{

  
  title = 'hotelinventoryapp';
  role = 'Admin';

  // @ViewChild('user',{read: ViewContainerRef}) vcr!: ViewContainerRef;

  // ngAfterViewInit(): void {
  //   const componentRef = this.vcr.createComponent(RoomsComponent);
  //   componentRef.instance.rooms.totalRooms = 50;
  // }

  constructor(@Optional() private loggerService: LoggerService,
  @Inject(localStorageToken) private localStorage: Storage) {}

  @ViewChild('name', {static: true}) name!: ElementRef;

  ngOnInit(): void {
    this.loggerService?.log('AppComponent.ngOnInit()');
    this.name.nativeElement.innerText = 'Hilton Hotel';

    this.localStorage.setItem('name', 'Mariott Hotel');
  }
}
