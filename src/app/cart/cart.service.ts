import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IDevice } from '../device-details/device.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
 private cartSubject = new BehaviorSubject<IDevice[]>([])
 public cart$:Observable<IDevice[]>=this.cartSubject.asObservable()

  constructor(private http:HttpClient) { 
    this.getCart().subscribe((cartData)=>{
        this.cartSubject.next(cartData)
    })

  }
 
  public getCart():Observable<IDevice[]>{
   return this.http.get<IDevice[]>("/api/carts")
  }

  // add device to cart 
  public addToCart(device:IDevice){
      this.http.post("/api/carts",device).subscribe(()=>{
      console.log(`Device ${device.model} added to cart`);
      //refresh the cart 
        this.getCart().subscribe((cartData)=>{
        this.cartSubject.next(cartData)
      })
    })

  }

  public deleteDeviceFromCart(device:any){
      this.http.delete(`/api/carts/${device.id}`).subscribe(()=>{
      console.log(`Device ${device.model} removed from the cart`);
      //refresh the cart
        this.getCart().subscribe((cartData)=>{
        this.cartSubject.next(cartData)
      })
    })
  }
}
