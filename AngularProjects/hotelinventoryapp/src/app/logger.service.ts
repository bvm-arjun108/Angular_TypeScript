import { Injectable } from "@angular/core";

@Injectable(
    // {providedIn: 'root'} // Resolved with @Optional()
)
export class LoggerService{

    constructor() {}
    log(msg: string){
        console.log(msg);
    }
     
}