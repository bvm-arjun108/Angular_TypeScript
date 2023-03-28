import { APP_SERVICE_CONFIG } from './../../AppConfig/appconfig.service';
import { RoomList } from './../rooms';
import { Inject, Injectable } from '@angular/core';
import{ environment } from '../../../environments/environment'
import { AppConfig } from './../../AppConfig/appconfig.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  // roomList : RoomList [] = [
  //   {
  //     roomNumber: '1',
  //     roomType: 'Delexue Room',
  //     ammenities: 'AIR CONDITIONER, WIFI, TV',
  //     price: 5000,
  //     photos: 'https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?cs=srgb&dl=pexels-vecislavas-popa-1571458.jpg&fm=jpg',
  //     checkInTime: new Date('11-Nov-2023'),
  //     checkOutTime: new Date('12-Nov-2023'),
  //     rating: 3.1
  //   },
  //   {
  //     roomNumber: '2',
  //     roomType: 'Superior Room',
  //     ammenities: 'AIR CONDITIONER, No WIFI, TV',
  //     price: 3000,
  //     photos: 'https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?cs=srgb&dl=pexels-vecislavas-popa-1571458.jpg&fm=jpg',
  //     checkInTime: new Date('12-Nov-2023'),
  //     checkOutTime: new Date('15-Nov-2023'),
  //     rating: 3.6

  //   },
  //   {
  //     roomNumber: '3',
  //     roomType: 'Normal Room',
  //     ammenities: 'AIR CONDITIONER',
  //     price: 1000,
  //     photos: 'https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?cs=srgb&dl=pexels-vecislavas-popa-1571458.jpg&fm=jpg',
  //     checkInTime: new Date('15-Nov-2023'),
  //     checkOutTime: new Date('19-Nov-2023'),
  //     rating: 4.7
  //   },
  //   {
  //     roomNumber: '4',
  //     roomType: 'Living Room',
  //     ammenities: 'AIR CONDITIONER',
  //     price: 1000,
  //     photos: 'https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?cs=srgb&dl=pexels-vecislavas-popa-1571458.jpg&fm=jpg',
  //     checkInTime: new Date('15-Nov-2023'),
  //     checkOutTime: new Date('19-Nov-2023'),
  //     rating: 4.9
  //   },
  //   {
  //     roomNumber: '5',
  //     roomType: 'Suite Room',
  //     ammenities: 'AIR CONDITIONER',
  //     price: 1000,
  //     photos: 'https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?cs=srgb&dl=pexels-vecislavas-popa-1571458.jpg&fm=jpg',
  //     checkInTime: new Date('15-Nov-2023'),
  //     checkOutTime: new Date('19-Nov-2023'),
  //     rating: 1.5
  //   },
  //   {
  //     roomNumber: '6',
  //     roomType: 'Full Room',
  //     ammenities: 'AIR CONDITIONER',
  //     price: 1000,
  //     photos: 'https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?cs=srgb&dl=pexels-vecislavas-popa-1571458.jpg&fm=jpg',
  //     checkInTime: new Date('15-Nov-2023'),
  //     checkOutTime: new Date('19-Nov-2023'),
  //     rating: 2.5
  //   },
  //   {
  //     roomNumber: '7',
  //     roomType: 'Queen Room',
  //     ammenities: 'AIR CONDITIONER',
  //     price: 1000,
  //     photos: 'https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?cs=srgb&dl=pexels-vecislavas-popa-1571458.jpg&fm=jpg',
  //     checkInTime: new Date('15-Nov-2023'),
  //     checkOutTime: new Date('19-Nov-2023'),
  //     rating: 3.5
  //   },
  //   {
  //     roomNumber: '8',
  //     roomType: 'King Room',
  //     ammenities: 'AIR CONDITIONER',
  //     price: 1000,
  //     photos: 'https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?cs=srgb&dl=pexels-vecislavas-popa-1571458.jpg&fm=jpg',
  //     checkInTime: new Date('15-Nov-2023'),
  //     checkOutTime: new Date('19-Nov-2023'),
  //     rating: 4.2
  //   }
  // ]

  roomList: RoomList[] = [];

  constructor(@Inject (APP_SERVICE_CONFIG) private config:AppConfig,
  private http: HttpClient) { 
    console.log(this.config.apiEndpoint)
    console.log('Rooms Serivce is Initialized...')
  }

  getRooms(){
    return this.http.get<RoomList[]>('http://localhost:3000/api/rooms');
  }

}
