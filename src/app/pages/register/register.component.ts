import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public reactiveForm = new FormGroup({
  
    email: new FormControl(null, [Validators.required]),
    password: new FormControl(null,[Validators.required])
    
  });

  constructor(private route: Router) { }

  ngOnInit(): void {
  }


  public registerUser(){
    if (this.reactiveForm.valid){
    // this.route.navigateByUrl('login');
    this.route.navigateByUrl('characters');
    }
  }

}
