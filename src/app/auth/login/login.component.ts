import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_model/user';
import { AuthService } from 'src/app/_services/auth.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
user:User={
    email:'',
    password:'',
    }

  constructor(private authService:AuthService) { }

  ngOnInit(): void {}

  onSubmit(){
    this.authService.login(this.user).subscribe(
      (response)=>{
        localStorage.setItem('token',response['token'])
        console.log(response);
      },
      (error)=>{console.log(error)},
      ()=>{}

    )
  }
}
