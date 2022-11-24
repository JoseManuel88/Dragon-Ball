import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommunicatorService } from 'src/app/services/communicator.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

public reactiveForm = new FormGroup({
  
  user: new FormControl(null, [Validators.required]),
  password: new FormControl(null,[Validators.required])
  
});
  constructor(private communitorService: CommunicatorService,private route: Router) { }

  ngOnInit(): void {
    
  }
  public loginUser() {

    
    if (this.reactiveForm.valid){
      this.communitorService.setIsAuth(true);
      this.route.navigateByUrl('characters');
    }

  }
  public createUser(){
    this.route.navigateByUrl('register');

    
  }

}
