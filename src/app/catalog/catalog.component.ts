import { Component } from '@angular/core';
import { IDevice } from '../device-details/device.model';
import { DeviceService } from '../device-details/device.service';


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {

filter:String =""
devices!:IDevice[];
constructor(
  private deviceSvc:DeviceService,
){}

ngOnInit(){
  this.deviceSvc.getDevices().subscribe((devices:IDevice[])=>{
    this.devices=devices
  })
}


getFiltredDevice(){
return this.filter===""?
this.devices:
this.devices.filter((device:IDevice)=>
device.type===this.filter
)
}


}
