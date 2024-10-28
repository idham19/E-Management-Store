import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IDevice } from './device.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-device-details',
  templateUrl: './device-details.component.html',
  styleUrls: ['./device-details.component.css']
})

export class DeviceDetailsComponent {
@Input() device!:any;
@Output() buy = new EventEmitter();

 constructor(private router:Router){
 }

 buyButtonClicked(){
  this.buy.emit()
 }
 getToManagePage(deviceId:number){
  this.router.navigate(['/add-form',deviceId])
 }

}

