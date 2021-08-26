import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CanComponentDeactivate } from './can-deactivate-guard.service';
import { UrlConstants } from '../common/constants';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, CanComponentDeactivate {

  makeNavigateion = false;
  ambarish:any;
  isLoading: boolean = false;
  myForm: any;

  constructor(
    private route: Router,
    private http: HttpClient,
    private fb: FormBuilder,
    private store :Store
    ) {
      this.createForm();
    }

  ngOnInit(): void {

  }

   // on submitting form
   onSubmit() {
    console.log(this.myForm.value);
  }

  goToSomeURL():any {
    this.makeNavigateion=true;

  }

  canDeactivate () :boolean | Observable<boolean> | Promise<boolean> {
    if(this.makeNavigateion == true){
      return true;
    }

    else if(this.makeNavigateion == false){
      return confirm('do you want to leave this page')
    }else{
      return false;
    }

}


getAllRecords(){
  this.isLoading = true;
  this.http
  .get(UrlConstants.DUMMY_EMPLOYEE_URL + 'todos')
  .pipe(map( (respData) => {
    const resDataArray = [];
    for (const id in respData){
      resDataArray.push( {...respData} )
    }
    return resDataArray;
  }))
  .subscribe((responseData) => {
    this.ambarish = JSON.stringify(responseData);
    console.log(responseData)
    this.isLoading = false;
  })
}

createForm() {
  this.myForm = this.fb.group({
    fname: '',
    lname: '',
    subject: ['', Validators.max(50)],
  });
}

}


