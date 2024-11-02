import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { IDevice } from '../device-details/device.model';
import { environment } from '../../environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor(private http:HttpClient) { }


  getDevices():Observable<IDevice[]>{
    return this.http.get<IDevice[]>(`${environment.apiUrl}/devices`)
  }
  addDevice(device:IDevice):Observable<IDevice>{
    return this.http.post<IDevice>(`${environment.apiUrl}/devices`,device)
  }
  getDeviceById(id: number): Observable<IDevice> {
    return this.http.get<IDevice>(`${environment.apiUrl}/devices/${id}`);
  }
  deleteDeviceById(id:number):Observable<any>{
   return this.http.delete(`${environment.apiUrl}/devices/${id}`)
  }
  upDateDevice(id:number,device:IDevice):Observable<IDevice>{
    return this.http.put<IDevice>(`${environment.apiUrl}/devices/${id}`,device)
  }
}
