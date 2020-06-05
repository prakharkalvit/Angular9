import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewserviceService {
employees:any[];
  constructor() { 
    this.employees=[
      {
        empcode:'001',name:'Prakhar Kalvit'
      },
      {
        empcode:'002',name:'Divvy Vyas'
      }
    ];
  }
  display(){
    return 'hello Prakhar';
  }
}
