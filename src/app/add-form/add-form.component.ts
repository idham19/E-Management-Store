import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; // Import this module
import { IDevice } from '../device-details/device.model';
import { ActivatedRoute, Router } from '@angular/router';
import { DeviceService } from '../device-details/device.service';


@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent {

  deviceForm!: FormGroup;
  deviceId!: number;
  public imagUrl=""

  constructor(
  private fb: FormBuilder, 
  private deviceSvc:DeviceService, 
  private router :Router,
  private route :ActivatedRoute) {}

  ngOnInit() {
    // Initialize the form
    this.deviceForm = this.fb.group({
      buttonValue: [''],
      type: ['',[Validators.required]],         
      model: [''],   
      brand:[""],
      screenSize:[""],
      price: [''], 
      discount: [''], 
      image: [''],   
    });
    // This + is unary operator converts the string value returned by get('id') to a number.
    this.deviceId = +this.route!.snapshot!.paramMap!.get('id')!;

    if (this.deviceId) {
      // Fetch the device data and populate the form
      this.deviceSvc.getDeviceById(this.deviceId).subscribe((device:any) => {
        // Patch the form with device data
        this.deviceForm.patchValue({
          type: device.type,
          model: device.model,
          brand: device.brand,
          screenSize: device.screenSize,
          price: device.price,
          discount: device.discount,
          image: device.image
        });
      });
      this.getImgUrl(this.deviceId)
    }
  }

  // Function to handle form submission
  onSubmit(event:Event) {
    event.preventDefault(); // Prevent the default form submission behavior
     // Get the target form element
     this.deviceId = +this.route!.snapshot!.paramMap!.get('id')!;
     console.log(this.deviceId);
     
     const target = event.target as HTMLFormElement;
     // Use querySelector to get the button and cast it to HTMLButtonElement
     const button = target.querySelector('button[type="submit"]:focus') as HTMLButtonElement;
     const buttonValue = button?.value; 
 
     console.log(`This is the buttonValue: ${buttonValue}`);

    if (this.deviceForm.valid) {
      try{
        if(buttonValue==="Add Item"){
          const newDevice = this.deviceForm.value;
          console.log(`new Device added ${newDevice}`);
          this.deviceSvc.addDevice(newDevice).subscribe((response)=>{
            console.log("Device added",response);
            //reset a form
            this.deviceForm.reset()
            this.router.navigate(['/catalog'])
          })
        }
        else if (buttonValue==="Edit Item"){
          console.log("Editing item...");
          const newDevice = this.deviceForm.value;
          console.log(newDevice);

          this.editDeviceDetails(this.deviceId,newDevice)
        }
        else if(buttonValue==="Delete Item"){
         this.deleteDeviceById(this.deviceId)
        }
        else{
          console.log("Button value doesn't exist");
          
        }
        
      }catch(error){
        console.log("Erro adding new Device",error);
      }
    } else {
      console.error('Form is invalid');
    }
  }
  

  public deleteDeviceById(id:number):void{
    this.deviceSvc.deleteDeviceById(id).subscribe(()=>{
      this.router.navigate(['/catalog'])
    }); 
  }
  public getImgUrl(id:number):void{
     this.deviceSvc.getDeviceById(id).subscribe((device)=>{
       this.imagUrl=device.image
    })
  }
  public editDeviceDetails(id:number,device:IDevice){
    this.deviceSvc.upDateDevice(id,device).subscribe(()=>{
      console.log(`Device ${device.model}Updated`);
      this.router.navigate(['/catalog'])

    })
  }
  
}
