import { Component, Input, Output, EventEmitter, OnDestroy, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit,OnDestroy {

  @Input('srv') element:{ type: string; name: string; content: string; } | undefined;

  @Input() myinput:any;

  @Output() myOutput: EventEmitter<string> = new EventEmitter();

  childtoParent = "hi from child";

  myForm: any;

  @ViewChild('viewChild') viewChilds!: ElementRef;

  customObservable:any;
  constructor(private fb: FormBuilder) {
    this.createForm();
  }



  ngOnInit(): void {
  this.customObservable = Observable.create((observer:any) => {
    observer.next('I am number 1')
    observer.next('I am number 2')
    observer.error(new Error('i am error'))
    observer.complete('I am number 4')
    observer.next('I am number 5')
    });

    this.customObservable.subscribe((data:any) =>{
        console.log(data);
    }),
    (error: any) => {
        alert("something");
    }, () =>{
      console.log("its completed")
    }
  }


  ngOnDestroy(): void{
    //  this.customObservable.unsubscribe();
  }


  unsubscribe(){
    this.viewChilds.nativeElement.style.background = 'red';
    this.myOutput.emit(this.childtoParent);


    //this.customObservable.unsubscribe();

  }

  createForm() {
    this.myForm = this.fb.group({
      policy: '',
      dateOfPurchase: '',
      customerId: '',
      fuel:'',
      vehicleSegment:'',
      premium: ['', Validators.max(100000)],
      bodilyInjuryLiability:'',
      personalInjury:'',
      propertyDamageLibility:'',
      collision:'',
      comprehensive:'',
      customerGender:'',
      incomeGrp:'',
      customerRegion:'',
      maritalStatus:''
    });
  }

}
