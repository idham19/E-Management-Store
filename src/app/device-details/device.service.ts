import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { IDevice } from '../device-details/device.model';


@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor(private http:HttpClient) { }


  getDevices():Observable<IDevice[]>{
    return this.http.get<IDevice[]>('/api/devices')
  }
  addDevice(device:IDevice):Observable<IDevice>{
    return this.http.post<IDevice>("/api/devices",device)
  }
  getDeviceById(id: number): Observable<IDevice> {
    return this.http.get<IDevice>(`/api/devices/${id}`);
  }
  deleteDeviceById(id:number):Observable<any>{
   return this.http.delete(`/api/devices/${id}`)
  }
  upDateDevice(id:number,device:IDevice):Observable<IDevice>{
    return this.http.put<IDevice>(`/api/devices/${id}`,device)
  }
}
