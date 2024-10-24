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
 constructor(private router:Router){
 }




}

