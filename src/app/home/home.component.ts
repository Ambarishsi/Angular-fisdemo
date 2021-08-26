import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  value = '45';
  input_var = "hi from parent";
  out_var:any;

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  goToContact(): void {
    this.router.navigate(['/contact']);
  }

  getData(ev: any){
    this.out_var=ev;
  }
}
