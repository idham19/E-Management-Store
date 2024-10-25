import { Component } from '@angular/core';
import { CartService } from './cart.service';
import { IDevice } from '../device-details/device.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
 public cart:IDevice[]=[]
 constructor(private cartSvc : CartService){}

 ngOnInit(){
  this.cartSvc.cart$.subscribe((cart)=>
    // we update the local cart 
    this.cart=cart
  )
 }
 public getCartItems(){
   return this.cart
 }
public getcartTotal() {
  let result=0
    this.cart.map((device)=>{
    let price= device.discount>0 
    ?device.price-device.discount 
    :device.price
    result+=price
  }
)
return result

}

removeFromCart(device: IDevice) {
  this.cartSvc.deleteDeviceFromCart(device);
}

getImageUrl(device: IDevice) {
  if (!device) return '';
  return  device.image
}


}
