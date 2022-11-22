import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  constructor(private communitorService: CommunicatorService) { }

  ngOnInit(): void {
    
  }
  public loginUser() {

    this.communitorService.setIsAuth(true);

  }
  public createUser(){


    
  }

}
