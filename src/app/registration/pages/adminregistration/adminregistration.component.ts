import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators,AbstractControl,ValidationErrors} from '@angular/forms';
import {Http} from '@angular/http';
@Component({
  selector: 'app-adminregistration',
  templateUrl: './adminregistration.component.html',
  styleUrls: ['./adminregistration.component.css']
})
export class AdminregistrationComponent implements OnInit {
  id:FormGroup;
  constructor(private httpservice : Http) {
this.id =new FormGroup({

name : new FormControl('',Validators.required),

mail : new FormControl('',[Validators.required,Validators.pattern(/^([a-zA-Z0-9_\.\-])+\@virtusa.com+$/)]),

mobileno: new FormControl('',[Validators.required,Validators.pattern(/^d{10}$/),Validators.maxLength(10)]),

loc : new FormControl('Hyderabad',Validators.required)

})



   }

  ngOnInit() {
  }

}
