import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_model/user';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user:User={
    email:'example@gmail.com',
    password:'',
    }
  constructor(private authService:AuthService ) { }

  ngOnInit(): void {}
    onSubmit(){
      this.authService.register(this.user).subscribe(
        (response)=>{console.log(response)},
        (error)=>{console.log(error)},
        ()=>{},
      )
    }


}
